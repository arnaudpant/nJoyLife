// ======================================================
// Material design header
// ======================================================
let headerAnimElt = document.querySelector('header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 16){

    headerAnimElt.classList.add("header-scroll");
  }else{
    headerAnimElt.classList.remove("header-scroll");

  }

})

// ======================================================
// Loader
// ======================================================
const loaderElt = document.querySelector('.loader');
window.addEventListener('load', () => {
  loaderElt.classList.add('loader-out');
})


// *********************************
// HEADER MENU
// *********************************

// # Affichage menu sur mobile
// ## Header
const headerMenuDeroulantElt = document.querySelector("header")

// ## Burger menu
const btnBurgerElt = document.querySelector(".mobil-burger");
const burgerTiretElt = document.querySelector(".burger-tiret");

//  ## Nom ou profession
const headerNameElt = document.querySelector(".mobil-name");
const headerProfessionElt = document.querySelector(".mobil-profession");

//  ## Menu deroulant
const navbarMobileElt = document.querySelector(".mobil-menu-deroulant");

//  ## Tous les li
const lienNavbarAboutElt = document.querySelectorAll(
    ".menu-deroulant__liens-li"
);


// # Fonction toggle

function toggleMenu() {
    headerMenuDeroulantElt.classList.toggle("active-menu-deroulant");
    burgerTiretElt.classList.toggle("burger-tiret--anim");
    headerNameElt.classList.toggle("active-menu-deroulant");
    headerProfessionElt.classList.toggle("active-menu-deroulant");
    navbarMobileElt.classList.toggle("active-menu-deroulant");
}



// # Clic pour dérouler le menu
btnBurgerElt.addEventListener("click", toggleMenu);

//  # Clic sur un li => disparition du menu
for (let i = 0; i < lienNavbarAboutElt.length; i++) {
    lienNavbarAboutElt[i].addEventListener("click", toggleMenu);
}



// *********************************
// FOOTER
// *********************************
const dateFooterElt = document.getElementById('date-footer');
dateFooterElt.innerHTML = new Date().getFullYear();