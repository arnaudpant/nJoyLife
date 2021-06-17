// *********************************
// HEADER
// *********************************

// Affichage menu sur mobile
const btnBurgerElt = document.querySelector(".header__burger");
const navUlElt = document.querySelector(".header__nav__ul");
const burgerTiretElt = document.querySelector(".burger-tiret");

btnBurgerElt.addEventListener("click", () => {
  burgerTiretElt.classList.toggle("burger-tiret--anim");
  navUlElt.classList.toggle("active-menu-deroulant");
});

// Animation bouton burger
