const productsList = document.querySelector(".article-products-list");
const product = document.querySelectorAll(".article-product");

productsList.addEventListener("click", e => {
    // Only if an anchor element is clicked
    if (e.target.children[1].nodeName === "A") {
        // Redirect to that anchor element's href value
        window.location = e.target.children[1].href;
    }
    
})