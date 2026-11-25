const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
const mobile = window.matchMedia('(max-width: 800px)');

function setOpen(open) {
  menu.setAttribute('aria-expanded', String(open));
  nav.hidden = mobile.matches && !open;
}

document.documentElement.classList.add('enhanced');
setOpen(false);
menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', () => setOpen(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    menu.focus();
  }
});
mobile.addEventListener('change', () => setOpen(false));
