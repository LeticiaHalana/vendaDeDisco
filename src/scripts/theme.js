const button = document.querySelector(".theme");
const body = document.querySelector('body');
const title = document.querySelector(".title");
const title_category = document.querySelector(".title_categorys");


const buttons_category = document.querySelectorAll(".buttons_category");
console.log(buttons_category);


button.addEventListener("click", () => {
    button.classList.toggle("dark-mode-button");
    body.classList.toggle("dark-mode");
    title.classList.toggle("dark-mode-title");
    title_category.classList.toggle("title_categorys_dark");

    buttons_category.forEach((e) => {
        e.classList.toggle("button_category_dark");
    })

});