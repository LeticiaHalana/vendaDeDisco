import { getArray, setArray, categories } from "./productsData.js";

const categorys = document.querySelector(".categorys");

function renderGeneros(categories) {
    categories.forEach((categoria) => {
        const botao = document.createElement('button');
        botao.classList.add("buttons_category");
        botao.textContent = categoria;
        categorys.appendChild(botao);
    });

}
renderGeneros(categories);

