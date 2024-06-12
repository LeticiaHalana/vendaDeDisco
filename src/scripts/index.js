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

document.querySelectorAll('input[type="range"]').forEach(function(input) {
    input.style.setProperty('--value', input.value);
    input.addEventListener('input', function() {
      input.style.setProperty('--value', input.value);
    });
  });