// *********************************
// HEADER
// *********************************

// Affichage menu sur mobile
const btnBurgerElt = document.querySelector(".header-burger");
const navbarMobileElt = document.querySelector(".header-mobile");
const burgerTiretElt = document.querySelector(".burger-tiret");

const lienNavbarAboutElt = document.querySelectorAll(".header-mobile__liens__li")

const headerNameElt = document.querySelector(".header-name");
const headerProfessionElt = document.querySelector(".header-profession");

btnBurgerElt.addEventListener("click", () => {
  burgerTiretElt.classList.toggle("burger-tiret--anim");
  navbarMobileElt.classList.toggle("active-menu-deroulant");
  headerNameElt.classList.toggle("active-menu-deroulant");
  headerProfessionElt.classList.toggle("active-menu-deroulant");
});

for (let i = 0; i < lienNavbarAboutElt.length; i++) {
    lienNavbarAboutElt[i].addEventListener ('click', () => {
      burgerTiretElt.classList.toggle("burger-tiret--anim");
      navbarMobileElt.classList.toggle("active-menu-deroulant");
      headerNameElt.classList.toggle("active-menu-deroulant");
      headerProfessionElt.classList.toggle("active-menu-deroulant");
  })
}


// lienNavbarAboutElt[0].addEventListener ('click', ()=>{
//   navbarMobileElt.classList.toggle("active-menu-deroulant");
// });


// *********************************
// SECTION 1
// *********************************

// const accueilPlumeMoveElt = document.querySelector(
//   ".section-accueil__bloc__plume"
// );