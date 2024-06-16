const body = document.querySelector('body');
const title_category = document.querySelector(".title_categorys");
const title_range = document.querySelector(".title_range");
const title_albuns = document.querySelector(".title_albuns");
const button = document.querySelector(".theme");
const title = document.querySelector(".title");
const barra_range = document.querySelector(".range");
const valor_range = document.querySelector(".valor_range");
const buttons_category = document.querySelectorAll(".buttons_category");
const container_disco = document.querySelectorAll(".container_disco ");
const banda_ano = document.querySelectorAll(".banda_ano");
const theme_disco = document.querySelectorAll(".theme_disco");
const comprar = document.querySelectorAll(".comprar");


button.addEventListener("click", () => {
    // BODY
    body.classList.toggle("dark-mode");
    // TITULOR COR GREY 4
    title_category.classList.toggle("title_dark");
    title_range.classList.toggle("title_dark");
    title_albuns.classList.toggle("title_dark");
    //

    button.classList.toggle("dark-mode-button");
    title.classList.toggle("dark-mode-title");
    valor_range.classList.toggle("title_dark");
    barra_range.classList.toggle("range_dark");

    buttons_category.forEach((e) => {
        e.classList.toggle("button_category_dark");
    })

    container_disco.forEach((e) => {
        e.classList.toggle("container_disco_dark");
    })

    banda_ano.forEach((e) => {
        e.classList.toggle("bando_ano_dark");
    })

    theme_disco.forEach((e) => {
        e.classList.toggle("theme_disco_dark");
    })

    comprar.forEach((e) => {
        e.classList.toggle("comprar_dark");
    })

});