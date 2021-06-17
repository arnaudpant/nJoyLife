// *********************************
// HEADER
// *********************************

// Affichage menu sur mobile
const btnBurgerElt = document.querySelector(".header__burger");
const navbarMobileElt = document.querySelector(".navbar-mobile");
const burgerTiretElt = document.querySelector(".burger-tiret");

btnBurgerElt.addEventListener("click", () => {
  burgerTiretElt.classList.toggle("burger-tiret--anim");
  navbarMobileElt.classList.toggle("active-menu-deroulant");
});

// Animation bouton burger
