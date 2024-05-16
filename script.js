window.addEventListener('DOMContentLoaded', () => {

  const menuBurgerBtn = document.querySelector('.menu-burger-btn'),
        menuBurger = document.querySelector('.nav-list'),
        menuBurgerItem = document.querySelectorAll('.nav-list__item');

  menuBurgerBtn.addEventListener('click', () => {
    menuBurgerBtn.classList.toggle('menu-active');
    menuBurger.classList.toggle('menu-open');
  });

  document.addEventListener('click', (e) => {
    if (!menuBurger.contains(e.target) && e.target !== menuBurgerBtn) {
      menuBurger.classList.remove('menu-open');
      menuBurgerBtn.classList.remove('menu-active');
    }
  });

  menuBurgerItem.forEach((item) => {
    item.addEventListener('click', () => {
      menuBurger.classList.remove('menu-open');
      menuBurgerBtn.classList.remove('menu-active');
    });
  });
});


