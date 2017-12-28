const navButton = document.getElementById('nav-btn');
const navItems = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
let navState = false;

const toggleNav = style => {
  const nav = document.getElementsByTagName('nav');

  Object.assign(nav[0].style, style);
  navState = !navState;
}

navButton.addEventListener('click', event => {
  const closedStyle = {transform: 'translateX(340px)'};
  const openStyle = {transform: 'translateX(0px)'};

  (navState === false) ? toggleNav(openStyle) : toggleNav(closedStyle);
});

const addListenersToNodes = list => {
  for (let item = 0; item < 11; item++) {
    list[item].addEventListener('click', event => {
      let section = list[item].getAttribute('data-section');
      let target = document.getElementById(section);

      target.scrollIntoView({behavior: 'smooth'});
    });
  }
}

addListenersToNodes(navItems);