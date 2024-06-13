import { products, categories } from "./productsData.js";

const categorys = document.querySelector(".categorys");
const valor_range = document.querySelector(".valor_range");
const input = document.querySelector('#input');
const discos = document.querySelector(".discos");

//RENDERIZA GENEROS MUSICAIS
function renderGeneros(categories) {
  categories.forEach((categoria) => {
    const botao = document.createElement('button');
    botao.classList.add("buttons_category");
    botao.textContent = categoria;
    categorys.appendChild(botao);
  });

}
renderGeneros(categories);

//PEGA O VALOR DO INPUT PARA O CSS
document.querySelectorAll('input[type="range"]').forEach(function (input) {
  input.style.setProperty('--value', input.value);
  input.addEventListener('input', function () {
    input.style.setProperty('--value', input.value);
  });
});

//RENDERIZA O VALOR DO INPUT EM TEMPO REAL
input.addEventListener('input', () => {

  valor_range.innerHTML = `R$ ${input.value},50`;

});

//PEGA INPUT PARADO
input.addEventListener("click", () => {
  let valor = input.value;
  console.log(valor);
});

function renderTodos(data) {
  data.forEach((valor) => {
    discos.insertAdjacentHTML("beforeend", `
      <div class="container_disco">
        <div class="container_img"><img src=${valor.img}> </div>
        <div class="container_informacoes">
          <div class="container_ano_banda">
            <h2 class="banda_ano">${valor.band}</h2>
            <h2 class="banda_ano">${valor.year}</h2>
          </div>
          <h2 Class="musica">${valor.title}</h2>
          <div class="container_preco_botao">
            <h2 class="preco">R$ ${(valor.price).toFixed(2)}</h2>
            <button class="comprar">Comprar</button>
          </div>
        </div>
      </div>
    
    `
    )
  })
}
renderTodos(products);

