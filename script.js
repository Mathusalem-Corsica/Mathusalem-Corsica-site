const button = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

button?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
