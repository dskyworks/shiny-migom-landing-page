'use strict';

// Menu open/close & aria attributes

const html = document.querySelector('.html');
const menuButton = document.querySelector('.menu__button');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  let expanded = menuButton.getAttribute('aria-expanded') === 'true';

  menuButton.setAttribute('aria-expanded', !expanded);
  expanded
    ? menuButton.setAttribute('aria-label', 'Открыть меню')
    : menuButton.setAttribute('aria-label', 'Закрыть меню');

  html.classList.toggle('html--lock');
  header.classList.toggle('header--open-menu');
  menu.classList.toggle('menu--open');
  menuButton.classList.toggle('menu__button--open');
});

// Hero background animation

const heroBackground = document.querySelector('.hero');

const observer = new IntersectionObserver((e) => {
  console.log(e[0].isIntersecting);
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
