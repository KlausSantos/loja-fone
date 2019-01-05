const $second = document.querySelector(".-second");
let valorInicial = 10;

$second.addEventListener("click", handleClick);

function handleClick() {
  const $carrinho = document.querySelector(".-last");
  $carrinho.textContent = `Carrinho (${++valorInicial})`;
}
