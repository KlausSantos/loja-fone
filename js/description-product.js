/*
1 - ter a janela (browser)
2 - ter o html na mão 
3 - pegar o coração
4 - pegar o clique no coração
5 - no momento que o usuário clicar, queremos mostra um texto na tela
*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener('click', handleClick);

function handleClick() {
  console.log('ae');
}