/*
1 - ter a janela (browser)
2 - ter o html na mão 
3 - pegar o coração
4 - pegar o clique no coração
5 - no momento que o usuário clicar, queremos mostra um texto na tela
*/

const $heart = window.document.querySelector(".-heart");
const $star = document.querySelector(".-star");

$heart.addEventListener("click", handleClick);
$star.addEventListener("click", starClick);
function handleClick() {
  /*  if ($heart.classList.contains("-active")) {
    $heart.classList.remove("-active");
  } else {
    $heart.classList.add("-active");
  } */

  $heart.classList.toggle("-active");
}

function starClick() {
  $star.classList.toggle("-star1");
}
