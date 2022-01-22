const articleCategories = document.querySelector(".article-categories");
const articleCategoryList = document.querySelectorAll(".article-category");
const categoryHeatedHoses = document.querySelector(".article-category-heated-hoses");
const categoryOther = document.querySelector(".article-category-other");

articleCategories.addEventListener("change", e => {
        
    articleCategoryList.forEach(category => {
        category.classList.add("article-category-hidden");
    })
    
    switch(e.target.value) {
        case "heated-hoses":
            categoryHeatedHoses.classList.remove("article-category-hidden");
            break;
        case "other":
            categoryOther.classList.remove("article-category-hidden");
            break;
        default:
            // do nothing
    }
})