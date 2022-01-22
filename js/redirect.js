const button = document.querySelector(".article-redirect-button");
const redirectContainer = document.querySelector(".redirect-container");

button.addEventListener("click", e => {
    e.preventDefault();
    redirectContainer.classList.remove("redirect-container-hidden");
    setTimeout(function() {
        window.location = "../index.html";
    }, 2000)
    
    
})