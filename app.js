// *********************************
// HEADER
// *********************************

// Affichage menu sur mobile
const btnBurgerElt = document.querySelector(".header__burger");
const navbarMobileElt = document.querySelector(".navbar-mobile");
const burgerTiretElt = document.querySelector(".burger-tiret");
const navbarMobileContainerElt = document.querySelector(
  ".navbar-mobile__container"
);
const navbarTitleElt = document.querySelector(".header__title");

btnBurgerElt.addEventListener("click", () => {
  burgerTiretElt.classList.toggle("burger-tiret--anim");
  navbarMobileElt.classList.toggle("active-menu-deroulant");
  navbarMobileContainerElt.classList.toggle("active-menu-deroulant");
  // navbarTitleElt.textContent = "NATUROPATHE";
});
