const $headerStore = document.querySelector(".header-store");
const $list = document.querySelector(".list");
const $menu = document.querySelector(".-menu");

$menu.addEventListener("click", () => {
  $list.classList.toggle("-active");
});
