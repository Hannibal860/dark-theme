const themeBtn = document.querySelector('.theme-btn');
const themeValue = document.querySelector('.theme-btn__default');
const body = document.querySelector('body');
const logo = document.querySelector('.logo__img');

themeBtn.addEventListener('click', switchTheme);
function switchTheme(e) {
  themeValue.classList.toggle('not-default');
  body.classList.toggle('dark');
  themeBtn.classList.toggle('dark');
  logo.classList.toggle('dark');
  if (themeValue.classList.contains('not-default')) {
    themeValue.innerHTML = `<svg class="icon" width="24" height="24">
      <use xlink:href="images/icons/sprite.svg#icon-moonlight"></use>
    </svg>`  } else {
    themeValue.innerHTML = `<svg class="icon" width="24" height="24">
      <use xlink:href="images/icons/sprite.svg#icon-sun"></use>
      </svg>`
  };
  if (logo.classList.contains('dark')) {
    logo.setAttribute("src", "./images/icons/logo-white.svg")
  } else {
    logo.setAttribute("src", "./images/icons/logo.svg")
  }  
}
