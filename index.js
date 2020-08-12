// carousel js

const config = {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  gap: 30
}

new Glide('.glide', config).mount()

// hamburger menu js

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav-center');

function menuContent() {
  hamburger.classList.toggle('show');
  menu.classList.toggle('show');
  close.classList.toggle('show');
}

hamburger.addEventListener('click', menuContent);
close.addEventListener('click', menuContent);
