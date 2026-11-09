
const backdrop = document.querySelector('#dialog-backdrop');
const memoryDialog = document.querySelector('#memory-dialog');
const quizDialog = document.querySelector('#quiz-dialog');
const quizForm = document.querySelector('#memory-quiz');
const feedback = document.querySelector('#quiz-feedback');
let lastDialogTrigger = null;

function showScene(name) {
  closeDialog(false);
  for (const scene of document.querySelectorAll('.scene')) {
    const active = scene.id === `${name}-scene`;
    scene.hidden = !active;
    scene.classList.toggle('is-active', active);
  }
  window.scrollTo({top: 0, behavior: 'instant'});
}

function openDialog(type, trigger) {
  lastDialogTrigger = trigger;
  const isQuiz = type === 'quiz';
  memoryDialog.hidden = isQuiz;
  quizDialog.hidden = !isQuiz;
  backdrop.hidden = false;
  document.body.style.overflow = 'hidden';
  if (isQuiz) {
    quizForm.reset();
    feedback.textContent = '';
    document.querySelector('#word-left').focus();
  } else {
    document.querySelector('#memory-word').textContent = type;
    memoryDialog.querySelector('[data-close]').focus();
  }
}

function closeDialog(restoreFocus = true) {
  if (backdrop.hidden) return;
  backdrop.hidden = true;
  memoryDialog.hidden = true;
  quizDialog.hidden = true;
  document.body.style.overflow = '';
  if (restoreFocus && lastDialogTrigger && !lastDialogTrigger.closest('[hidden]')) lastDialogTrigger.focus();
}

for (const button of document.querySelectorAll('[data-scene]')) {
  button.addEventListener('click', () => showScene(button.dataset.scene));
}
for (const button of document.querySelectorAll('[data-memory]')) {
  button.addEventListener('click', () => openDialog(button.dataset.memory, button));
}
for (const button of document.querySelectorAll('[data-dialog="quiz"]')) {
  button.addEventListener('click', () => openDialog('quiz', button));
}
for (const button of document.querySelectorAll('[data-close]')) {
  button.addEventListener('click', () => closeDialog());
}
backdrop.addEventListener('click', (event) => {
  if (event.target === backdrop) closeDialog();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !backdrop.hidden) closeDialog();
});

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const left = document.querySelector('#word-left').value.trim().toLowerCase();
  const right = document.querySelector('#word-right').value.trim().toLowerCase();
  if (left === 'change' && right === 'reflect') {
    showScene('memory');
  } else {
    feedback.textContent = 'Are you sure? Explore the park. The memory lode may give a clue.';
  }
});
