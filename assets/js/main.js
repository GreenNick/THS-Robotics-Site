const navButton = document.getElementById('nav-btn');
const navItems = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
const closedStyle = {transform: 'translateX(340px)'};
const openStyle = {transform: 'translateX(0px)'};
let navState = false;

const toggleNav = style => {
  const nav = document.getElementsByTagName('nav');

  Object.assign(nav[0].style, style);
  navState = !navState;
}

navButton.addEventListener('click', event => {
  (navState === false) ? toggleNav(openStyle) : toggleNav(closedStyle);
});

const addListenersToNodes = list => {
  for (let item = 0; item < 11; item++) {
    list[item].addEventListener('click', event => {
      let section = list[item].getAttribute('data-section');
      let target = document.getElementById(section);

      target.scrollIntoView({behavior: 'smooth'});
      toggleNav(closedStyle);
    });
  }
}

addListenersToNodes(navItems);