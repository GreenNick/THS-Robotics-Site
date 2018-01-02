$(document).ready(() => {
  scrollTo(400);
  navPress();
  valueState();
  calendarHover('optional');
  calendarHover('mandatory');
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
  $('#nav-btn').on('click', event => {
    document.querySelector('nav').classList.toggle('nav-active');
  });
}

const valueState = () => {
  $('.value-icon').on('click', event => {
    let value = $(event.currentTarget).siblings().text();
    $(event.currentTarget).parents('.values').find(`#${value.toLowerCase()}`).siblings('p').hide();
    $(event.currentTarget).parent().siblings().find('.value-icon').removeClass('value-active');
    $(event.currentTarget).parent().siblings().find('p').removeClass('value-text-active');
    $(event.currentTarget).toggleClass('value-active');
    $(`#${value.toLowerCase()}`).toggle();
    $(event.currentTarget).siblings().toggleClass('value-text-active');
  })
}

const calendarHover = dayType => {
  $(`.${dayType}`).on('mouseenter', event => {
    $(`.${dayType}`).addClass(`${dayType}-active`);
  }).on('mouseleave', event => {
    $(`.${dayType}`).removeClass(`${dayType}-active`);
  });
}