const button = document.querySelector(".theme");
const body = document.querySelector('body');
const title = document.querySelector(".title");
const title_category = document.querySelector(".title_categorys");
const barra_range = document.querySelector(".range");
const title_range = document.querySelector(".title_range");
const valor_range = document.querySelector(".valor_range");
const title_albuns = document.querySelector(".title_albuns");
const buttons_category = document.querySelectorAll(".buttons_category");


button.addEventListener("click", () => {
    button.classList.toggle("dark-mode-button");
    body.classList.toggle("dark-mode");
    title.classList.toggle("dark-mode-title");
    title_category.classList.toggle("title_categorys_dark");
    valor_range.classList.toggle("title_categorys_dark");
    title_range.classList.toggle("title_categorys_dark");
    title_albuns.classList.toggle("title_categorys_dark");
    barra_range.classList.toggle("range_dark");

    buttons_category.forEach((e) => {
        e.classList.toggle("button_category_dark");
    })

});