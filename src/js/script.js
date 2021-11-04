'use strict';

// Menu open/close & aria attributes

const html = document.querySelector('.html');
const body = document.querySelector('.body');

const menuButton = document.querySelector('.menu__button');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');

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
  menu.classList.toggle('menu--open');
  menuButton.classList.toggle('menu__button--open');
});

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
