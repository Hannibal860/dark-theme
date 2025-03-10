const themeBtn = document.querySelector('.theme-btn');
const themeValue = document.querySelector('.theme-btn__default');
const body = document.querySelector('body');

themeBtn.addEventListener('click', switchTheme);
function switchTheme (e) {
  themeValue.classList.toggle('not-default');
  body.classList.toggle('dark');
}
