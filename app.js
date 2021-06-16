const btnBurgerElt = document.querySelector('.header__burger');
const navUlElt = document.querySelector('.header__nav__ul');

btnBurgerElt.addEventListener('click', () => {
  navUlElt.classList.toggle('active-menu-deroulant')
})