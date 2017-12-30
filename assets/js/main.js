$(document).ready(() => {
  scrollTo(400);
  navPress();
});

const scrollTo = duration => {
  $('a[href|="#section"').on('click', event => {
    let target = $($(event.currentTarget).attr('href'));

    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, duration);
    $('nav').toggleClass('nav-active');
  });
}

const navPress = () => {
  const $navButton = $('#nav-btn');
  $navButton.on('click', event => {
    $('nav').toggleClass('nav-active');
  });
}