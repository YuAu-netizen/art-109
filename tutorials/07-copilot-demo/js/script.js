const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const isLiked = button.getAttribute("aria-pressed") === "true";
        const count = button.querySelector(".like-count");

        button.setAttribute("aria-pressed", String(!isLiked));
        count.textContent = isLiked ? "0" : "1";
    });
});

document.querySelectorAll(".love-button").forEach((button) => {
    button.addEventListener("click", () => {
        const actions = button.closest(".card-actions");
        const burst = document.createElement("span");
        const buttonCenter = button.getBoundingClientRect().left + button.offsetWidth / 2;
        const actionsLeft = actions.getBoundingClientRect().left;
        const hearts = ["💛", "💗", "❤️", "💖", "💕", "❤️", "💓", "💛"];
        const horizontalOffsets = [-34, -22, -9, 5, 18, 30, -15, 13];

        burst.className = "heart-burst";
        burst.setAttribute("aria-hidden", "true");

        hearts.forEach((heart, index) => {
            const particle = document.createElement("span");
            const offset = horizontalOffsets[index];

            particle.className = "heart-particle";
            particle.textContent = heart;
            particle.style.left = `${buttonCenter - actionsLeft + offset}px`;
            particle.style.setProperty("--x", `${offset * 1.5}px`);
            particle.style.setProperty("--rotate", `${(index % 2 === 0 ? 1 : -1) * (12 + index * 3)}deg`);
            particle.style.setProperty("--delay", `${index * 24}ms`);
            burst.append(particle);
        });

        actions.append(burst);
        button.classList.remove("is-loved");
        void button.offsetWidth;
        button.classList.add("is-loved");
        window.setTimeout(() => burst.remove(), 1200);
    });
});