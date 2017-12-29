const closedStyle = {transform: 'translateX(340px)'};
const openStyle = {transform: 'translateX(0px)'};
let navState = false;

$(document).ready(function() {
  scrollTo(400);
  navPress();
});

const scrollTo = duration => {
  $('a[href|="#section"').on('click', function(event) {
    let target = $($(this).attr('href'));

    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, duration);
    toggleNav(closedStyle);
  });
}

const navPress = () => {
  let navButton = $('#nav-btn');
  navButton.on('click', event => {
    (navState === false) ? toggleNav(openStyle) : toggleNav(closedStyle);
  });
}

const toggleNav = style => {
  const $nav = $('nav');
  $nav.css(style);
  navState = !navState;
}