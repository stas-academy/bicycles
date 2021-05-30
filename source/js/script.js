const navigation = () => {

  const page = document.querySelector('.page');
  const navMain = page.querySelector('.main-navigation');
  const navToggle = navMain.querySelector('.main-navigation__toggle');
  const navList = navMain.querySelector('.main-navigation__list');

  const openMenu = () => {
    page.classList.add('page--no-scroll');
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
    navList.addEventListener('click', onMenuClick);
    document.addEventListener('keydown', onMenuEsc);
  };

  const closeMenu = () => {
    page.classList.remove('page--no-scroll');
    navMain.classList.remove('main-navigation--opened');
    navMain.classList.add('main-navigation--closed');
    navList.removeEventListener('click', onMenuClick);
    document.removeEventListener('keydown', onMenuEsc);
  };

  const onMenuClick = () => {
    closeMenu();
  };

  const onMenuEsc = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeMenu();
    }
  };

  navMain.classList.remove('main-navigation--nojs');
  navMain.classList.add('main-navigation--closed');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-navigation--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

//При ошибки код выполняется!

let isStorage = navigation;
let storage = "";

try {
  storage = navigation();
} catch (err) {
  isStorage = false;
}

//scroll

const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      let blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
