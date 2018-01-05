$(document).ready(() => {
  scrollTo(400);
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
  const navButton = document.querySelector('#nav-btn'),
        navSidebar = document.querySelector('nav');

  navButton.addEventListener('click', () => {
    navSidebar.classList.toggle('nav-active');
  });
}

const loopNodeList = nodeList => {
  let nodeIndex;

  for (nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++) {
    return nodeList[nodeIndex];
  }
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

navPress();