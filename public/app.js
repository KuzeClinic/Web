const menu = document.querySelector("#mobile");
const links = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const mobilemenu = () => {
  menu.classList.toggle("activated");
  links.classList.toggle("active");
  overlay.classList.toggle("activated");
};
menu.addEventListener("click", mobilemenu);

function hide() {
  if (window.innerWidth <= 768) {
    menu.classList.remove("activated");
    links.classList.remove("active");
    overlay.classList.remove("activated");
  }
}

const list = document.querySelector(".navlist");
const hidethis = () => {
  const menuBars = document.querySelector(".active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.remove("activated");
    links.classList.remove("active");
    overlay.classList.remove("activated");
  }
};
list.addEventListener("click", hidethis);

window.addEventListener('load', function () {
  setTimeout(() => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loaded")
  }, 2300);
}) 