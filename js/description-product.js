/*
1 - ter a janela (browser)
2 - ter o html na mão 
3 - pegar o coração
4 - pegar o clique no coração
5 - no momento que o usuário clicar, queremos mostra um texto na tela
*/

const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star) {
  $star.addEventListener("click", handleClick);
});

/* $stars[0].addEventListener("click", starClick0);
$stars[1].addEventListener("click", starClick1);
$stars[2].addEventListener("click", starClick2);
$stars[3].addEventListener("click", starClick3);
$stars[4].addEventListener("click", starClick4); */

function handleClick() {
  /*  if ($heart.classList.contains("-active")) {
    $heart.classList.remove("-active");
  } else {
    $heart.classList.add("-active");
  } */

  this.classList.toggle("-active");
}
//por conta do THIS não foi necessário o restante das linhas ... FELIZ
/* 
function handleStar() {
  this.classList.toggle("-active");
}
 */
/* function starClick0() {
  $stars[0].classList.toggle("-active");
}
function starClick1() {
  $stars[1].classList.toggle("-active");
}
function starClick2() {
  $stars[2].classList.toggle("-active");
}
function starClick3() {
  $stars[3].classList.toggle("-active");
}
function starClick4() {
  $stars[4].classList.toggle("-active");
} */
