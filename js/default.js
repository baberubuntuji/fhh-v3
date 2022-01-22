const menuButtonOpen = document.querySelector(".header-menu-button");
const menuButtonClose = document.querySelector(".menu-button-close");
const menu = document.querySelector(".menu");

menuButtonOpen.addEventListener("click", function() {
    menu.classList.toggle("menu-hidden");
});

menuButtonClose.addEventListener("click", function() {
    menu.classList.toggle("menu-hidden");
});


const menuBar = document.querySelector(".menu-bar");
const menuBarButtons = document.querySelectorAll(".menu-bar-button");

menuBar.addEventListener("click", e => {
    // Only if an anchor element is clicked
    if (e.target.children[1].nodeName === "A") {
        // Redirect to that anchor element's href value
        window.location = e.target.children[1].href;
    }
    
})
