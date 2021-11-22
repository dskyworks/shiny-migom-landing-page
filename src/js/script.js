'use strict';

// Menu open/close & aria attributes
const html = document.querySelector('.html');
const body = document.querySelector('.body');

const menuButton = document.querySelector('.menu__button');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuLinks = document.querySelectorAll('.burger-menu__link');

menuButton.addEventListener('click', () => {
  let expanded = menuButton.getAttribute('aria-expanded') === 'true';

  menuButton.setAttribute('aria-expanded', !expanded);
  expanded
    ? menuButton.setAttribute('aria-label', 'Открыть меню')
    : menuButton.setAttribute('aria-label', 'Закрыть меню');

  window.scrollY = 0;
  html.classList.toggle('html--lock');
  body.classList.toggle('body--lock');
  header.classList.toggle('header--open-menu');
  burgerMenu.classList.toggle('menu--open');
  menuButton.classList.toggle('menu__button--open');
});

for (let i = 0; i < burgerMenuLinks.length; i++) {
  burgerMenuLinks[i].addEventListener('click', () => {
    menuButton.getAttribute('aria-expanded') === 'false';
    menuButton.setAttribute('aria-label', 'Открыть меню');
    html.classList.remove('html--lock');
    body.classList.remove('body--lock');
    header.classList.remove('header--open-menu');
    burgerMenu.classList.remove('menu--open');
    menuButton.classList.remove('menu__button--open');
  });
}

// Hero background animation
const heroBackground = document.querySelector('.hero');

const observer = new IntersectionObserver((e) => {
  e[0].isIntersecting
    ? window.addEventListener('scroll', () => {
        heroBackground.style.backgroundPosition = `center bottom ${
          -window.scrollY * 0.4
        }px`;
      })
    : window.addEventListener('scroll', () => {
        heroBackground.style.backgroundPosition = 'center bottom';
      });
});

observer.observe(heroBackground);

//Price

const priceInput = document.querySelector('.price__input');
const priceSelect = document.querySelector('.price__select');
const priceList = document.querySelector('.price__list');

//Price data
const price = {
  R13n15: [
    {
      serviceName: 'Снятие и установка колеса',
      servicePrice: '120 ₽',
    },
    {
      serviceName: 'Демонтаж/монтаж шины',
      servicePrice: '125 ₽',
    },
    {
      serviceName: 'Балансировка колеса с учетом грузиков',
      servicePrice: '105 ₽',
    },
    {
      serviceName: 'Установка клапана резинового',
      servicePrice: '30 ₽',
    },
    {
      serviceName: 'Установка клапана металлического',
      servicePrice: '50 ₽',
    },
    {
      serviceName: 'Установка одного датчика давления',
      servicePrice: '200 ₽',
    },
    {
      serviceName: 'Очистка и смазка ступицы, шпилек/болтов',
      servicePrice: '100 ₽',
    },
    {
      serviceName: 'Ремонт камеры (одно повреждение)',
      servicePrice: '350 ₽',
    },
    {
      serviceName: 'Ремонт прокола жгутом',
      servicePrice: '300-600 ₽',
    },
    {
      serviceName: 'Ремонт прокола грибком',
      servicePrice: '500-700 ₽',
    },
    {
      serviceName: 'Ремонт бокового пореза шины',
      servicePrice: '600-1400 ₽',
    },
    {
      serviceName: 'Утилизация шины',
      servicePrice: '400 ₽',
    },
    {
      serviceName: 'Коэф. для внедорожников и низкопрофильной резины',
      servicePrice: '1,2',
    },
    {
      serviceName: 'Выезд шиномонтажа (день/ночь)',
      servicePrice: '500/800 ₽',
    },
    {
      serviceName: 'Дополнительно оплачивается выезд за КАД',
      servicePrice: '500/800 ₽',
    },
  ],

  R16: [
    {
      serviceName: 'Снятие и установка колеса',
      servicePrice: '220 ₽',
    },
    {
      serviceName: 'Демонтаж/монтаж шины',
      servicePrice: '225 ₽',
    },
    {
      serviceName: 'Балансировка колеса с учетом грузиков',
      servicePrice: '205 ₽',
    },
    {
      serviceName: 'Установка клапана резинового',
      servicePrice: '60 ₽',
    },
    {
      serviceName: 'Установка клапана металлического',
      servicePrice: '80 ₽',
    },
    {
      serviceName: 'Установка одного датчика давления',
      servicePrice: '300 ₽',
    },
    {
      serviceName: 'Очистка и смазка ступицы, шпилек/болтов',
      servicePrice: '200 ₽',
    },
    {
      serviceName: 'Ремонт камеры (одно повреждение)',
      servicePrice: '450 ₽',
    },

    {
      serviceName: 'Ремонт прокола жгутом',
      servicePrice: '400-700 ₽',
    },
    {
      serviceName: 'Ремонт прокола грибком',
      servicePrice: '700-800 ₽',
    },
    {
      serviceName: 'Ремонт бокового пореза шины',
      servicePrice: '700-1500 ₽',
    },
    {
      serviceName: 'Утилизация шины',
      servicePrice: '500 ₽',
    },
    {
      serviceName: 'Коэф. для внедорожников и низкопрофильной резины',
      servicePrice: '1,3',
    },
    {
      serviceName: 'Выезд шиномонтажа (день/ночь)',
      servicePrice: '600/900 ₽',
    },
    {
      serviceName: 'Дополнительно оплачивается выезд за КАД',
      servicePrice: '600/900 ₽',
    },
  ],

  R17: [
    {
      serviceName: 'Снятие и установка колеса',
      servicePrice: '320 ₽',
    },
    {
      serviceName: 'Демонтаж/монтаж шины',
      servicePrice: '325 ₽',
    },
    {
      serviceName: 'Балансировка колеса с учетом грузиков',
      servicePrice: '305 ₽',
    },
    {
      serviceName: 'Установка клапана резинового',
      servicePrice: '130 ₽',
    },
    {
      serviceName: 'Установка клапана металлического',
      servicePrice: '150 ₽',
    },
    {
      serviceName: 'Установка одного датчика давления',
      servicePrice: '400 ₽',
    },
    {
      serviceName: 'Очистка и смазка ступицы, шпилек/болтов',
      servicePrice: '300 ₽',
    },
    {
      serviceName: 'Ремонт камеры (одно повреждение)',
      servicePrice: '550 ₽',
    },
    {
      serviceName: 'Ремонт прокола жгутом',
      servicePrice: '500-900 ₽',
    },
    {
      serviceName: 'Ремонт прокола грибком',
      servicePrice: '1500-1700 ₽',
    },
    {
      serviceName: 'Ремонт бокового пореза шины',
      servicePrice: '800-1800 ₽',
    },
    {
      serviceName: 'Утилизация шины',
      servicePrice: '700 ₽',
    },
    {
      serviceName: 'Коэф. для внедорожников и низкопрофильной резины',
      servicePrice: '2,0',
    },
    {
      serviceName: 'Выезд шиномонтажа (день/ночь)',
      servicePrice: '1500/1800 ₽',
    },
    {
      serviceName: 'Дополнительно оплачивается выезд за КАД',
      servicePrice: '1500/1800 ₽',
    },
  ],

  R18: [
    {
      serviceName: 'Снятие и установка колеса',
      servicePrice: '420 ₽',
    },
    {
      serviceName: 'Демонтаж/монтаж шины',
      servicePrice: '425 ₽',
    },
    {
      serviceName: 'Балансировка колеса с учетом грузиков',
      servicePrice: '305 ₽',
    },
    {
      serviceName: 'Установка клапана резинового',
      servicePrice: '200 ₽',
    },
    {
      serviceName: 'Установка клапана металлического',
      servicePrice: '350 ₽',
    },
    {
      serviceName: 'Установка одного датчика давления',
      servicePrice: '700 ₽',
    },
    {
      serviceName: 'Очистка и смазка ступицы, шпилек/болтов',
      servicePrice: '1000 ₽',
    },
    {
      serviceName: 'Ремонт камеры (одно повреждение)',
      servicePrice: '1350 ₽',
    },
    {
      serviceName: 'Ремонт прокола жгутом',
      servicePrice: '800-1600 ₽',
    },
    {
      serviceName: 'Ремонт прокола грибком',
      servicePrice: '2500-3700 ₽',
    },
    {
      serviceName: 'Ремонт бокового пореза шины',
      servicePrice: '1600-2400 ₽',
    },
    {
      serviceName: 'Утилизация шины',
      servicePrice: '1400 ₽',
    },
    {
      serviceName: 'Коэф. для внедорожников и низкопрофильной резины',
      servicePrice: '3,2',
    },
    {
      serviceName: 'Выезд шиномонтажа (день/ночь)',
      servicePrice: '2500/2800 ₽',
    },
    {
      serviceName: 'Дополнительно оплачивается выезд за КАД',
      servicePrice: '2500/2800 ₽',
    },
  ],

  R19: [
    {
      serviceName: 'Снятие и установка колеса',
      servicePrice: '520 ₽',
    },
    {
      serviceName: 'Демонтаж/монтаж шины',
      servicePrice: '525 ₽',
    },
    {
      serviceName: 'Балансировка колеса с учетом грузиков',
      servicePrice: '405 ₽',
    },
    {
      serviceName: 'Установка клапана резинового',
      servicePrice: '330 ₽',
    },
    {
      serviceName: 'Установка клапана металлического',
      servicePrice: '450 ₽',
    },
    {
      serviceName: 'Установка одного датчика давления',
      servicePrice: '900 ₽',
    },
    {
      serviceName: 'Очистка и смазка ступицы, шпилек/болтов',
      servicePrice: '1000 ₽',
    },
    {
      serviceName: 'Ремонт камеры (одно повреждение)',
      servicePrice: '3500 ₽',
    },
    {
      serviceName: 'Ремонт прокола жгутом',
      servicePrice: '800-1600 ₽',
    },
    {
      serviceName: 'Ремонт прокола грибком',
      servicePrice: '1500-1700 ₽',
    },
    {
      serviceName: 'Ремонт бокового пореза шины',
      servicePrice: '2600-2800 ₽',
    },
    {
      serviceName: 'Утилизация шины',
      servicePrice: '1400 ₽',
    },
    {
      serviceName: 'Коэф. для внедорожников и низкопрофильной резины',
      servicePrice: '3,5',
    },
    {
      serviceName: 'Выезд шиномонтажа (день/ночь)',
      servicePrice: '1500/1800 ₽',
    },
    {
      serviceName: 'Дополнительно оплачивается выезд за КАД',
      servicePrice: '1500/1800 ₽',
    },
  ],

  R20: [
    {
      serviceName: 'Снятие и установка колеса',
      servicePrice: '620 ₽',
    },
    {
      serviceName: 'Демонтаж/монтаж шины',
      servicePrice: '625 ₽',
    },
    {
      serviceName: 'Балансировка колеса с учетом грузиков',
      servicePrice: '605 ₽',
    },
    {
      serviceName: 'Установка клапана резинового',
      servicePrice: '1030 ₽',
    },
    {
      serviceName: 'Установка клапана металлического',
      servicePrice: '1050 ₽',
    },
    {
      serviceName: 'Установка одного датчика давления',
      servicePrice: '2000 ₽',
    },
    {
      serviceName: 'Очистка и смазка ступицы, шпилек/болтов',
      servicePrice: '1000 ₽',
    },
    {
      serviceName: 'Ремонт камеры (одно повреждение)',
      servicePrice: '4500 ₽',
    },
    {
      serviceName: 'Ремонт прокола жгутом',
      servicePrice: '2300-2600 ₽',
    },
    {
      serviceName: 'Ремонт прокола грибком',
      servicePrice: '2500-2700 ₽',
    },
    {
      serviceName: 'Ремонт бокового пореза шины',
      servicePrice: '1600-1900 ₽',
    },
    {
      serviceName: 'Утилизация шины',
      servicePrice: '2000 ₽',
    },
    {
      serviceName: 'Коэф. для внедорожников и низкопрофильной резины',
      servicePrice: '4',
    },
    {
      serviceName: 'Выезд шиномонтажа (день/ночь)',
      servicePrice: '2500/2800 ₽',
    },
    {
      serviceName: 'Дополнительно оплачивается выезд за КАД',
      servicePrice: '2500/2800 ₽',
    },
  ],

  R21n22: [
    {
      serviceName: 'Снятие и установка колеса',
      servicePrice: '5120 ₽',
    },
    {
      serviceName: 'Демонтаж/монтаж шины',
      servicePrice: '5125 ₽',
    },
    {
      serviceName: 'Балансировка колеса с учетом грузиков',
      servicePrice: '5105 ₽',
    },
    {
      serviceName: 'Установка клапана резинового',
      servicePrice: '1000 ₽',
    },
    {
      serviceName: 'Установка клапана металлического',
      servicePrice: '500 ₽',
    },
    {
      serviceName: 'Установка одного датчика давления',
      servicePrice: '2000 ₽',
    },
    {
      serviceName: 'Очистка и смазка ступицы, шпилек/болтов',
      servicePrice: '1000 ₽',
    },
    {
      serviceName: 'Ремонт камеры (одно повреждение)',
      servicePrice: '3500 ₽',
    },
    {
      serviceName: 'Ремонт прокола жгутом',
      servicePrice: '3000-6000 ₽',
    },
    {
      serviceName: 'Ремонт прокола грибком',
      servicePrice: '5000-7000 ₽',
    },
    {
      serviceName: 'Ремонт бокового пореза шины',
      servicePrice: '6000-14000 ₽',
    },
    {
      serviceName: 'Утилизация шины',
      servicePrice: '4000 ₽',
    },
    {
      serviceName: 'Коэф. для внедорожников и низкопрофильной резины',
      servicePrice: '5',
    },
    {
      serviceName: 'Выезд шиномонтажа (день/ночь)',
      servicePrice: '5000/8000 ₽',
    },
    {
      serviceName: 'Дополнительно оплачивается выезд за КАД',
      servicePrice: '5000/8000 ₽',
    },
  ],
};

//Price data updater
const priceDataUpdate = () => {
  //Reset innerHTML
  priceList.innerHTML = '';

  //Convert input position to key
  let selectedPrice;
  switch (priceInput.value) {
    case '0':
      selectedPrice = price.R13n15;
      break;
    case '1':
      selectedPrice = price.R16;
      break;
    case '2':
      selectedPrice = price.R17;
      break;
    case '3':
      selectedPrice = price.R18;
      break;
    case '4':
      selectedPrice = price.R19;
      break;
    case '5':
      selectedPrice = price.R20;
      break;
    case '6':
      selectedPrice = price.R21n22;
      break;
  }

  //Generate html from selected object
  for (let i = 0; i < selectedPrice.length; i++) {
    priceList.innerHTML += `<p class="price__item">${selectedPrice[i].serviceName} <span class="price__value">${selectedPrice[i].servicePrice}</span></p>`;
  }
};

//Initial main price data
priceDataUpdate();

//Price data switcher
//input switcher
priceInput.addEventListener('input', () => {
  priceSelect.value = priceInput.value;
  priceDataUpdate();
});

//select switcher
priceSelect.addEventListener('change', () => {
  priceInput.value = priceSelect.value;
  priceDataUpdate();
});

const swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      grid: {
        rows: 3,
      },
    },
    1080: {
      slidesPerView: 5,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
