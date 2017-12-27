const navButton = document.getElementById('nav-btn')
let navState = false;

function toggleNav(style) {
  const nav = document.getElementsByTagName('nav');

  Object.assign(nav[0].style, style);
  navState = !navState;
}

navButton.addEventListener('click', event => {
  const closedStyle = {transform: 'translateX(340px)'};
  const openStyle = {transform: 'translateX(0px)'};

  (navState === false) ? toggleNav(openStyle) : toggleNav(closedStyle);
});