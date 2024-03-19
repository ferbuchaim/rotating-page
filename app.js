const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const containerClass = document.querySelector('.container');

openBtn.addEventListener('click', () => {
  containerClass.classList.add('show-nav');
});

closeBtn.addEventListener('click', () => {
  containerClass.classList.remove('show-nav');
});
