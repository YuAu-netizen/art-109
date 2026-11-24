console.log("hello")


// select html elements


const main = document.querySelector("main");


// [Card] Image Tagging Switcher


main.addEventListener("click", (event) => {
    if (event.target.classList.contains("card")) {
        main.prepend(event.target);
    }
});
