const scrollTo = () => {
  const navItems = document.querySelectorAll('nav a'),
        navSidebar = document.querySelector('nav');
  let   nodeIndex;

  for (nodeIndex = 0; nodeIndex < navItems.length; nodeIndex++) {
    navItems[nodeIndex].addEventListener('click', event => {
      const section = event.currentTarget.getAttribute('href'),
            target = document.querySelector(section);

      event.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
      navSidebar.classList.toggle('nav-active');
    });
  }
}

const navPress = () => {
  const navButton = document.querySelector('#nav-btn'),
        navSidebar = document.querySelector('nav');

  navButton.addEventListener('click', () => {
    navSidebar.classList.toggle('nav-active');
  });
}

const valueState = () => {
  const valueIcons = document.querySelectorAll('.value-icon');
  let   nodeIndex;

  for (nodeIndex = 0; nodeIndex < valueIcons.length; nodeIndex++) {
    valueIcons[nodeIndex].addEventListener('click', event => {
      const currentValue = event.currentTarget.parentNode.getAttribute('id'),
            inactiveParagraphs = document.querySelectorAll(`.values > p:not(#${currentValue})`),
            inactiveIcons = document.querySelectorAll(`.value-set:not(#${currentValue}) > .value-icon`),
            inactiveHeadings = document.querySelectorAll(`.value-set:not(#${currentValue}) > p`),
            activeParagraph = document.querySelector(`.values > #${currentValue}`),
            activeHeading = document.querySelector(`#${currentValue} > p`);
      let   nodeIndex;

      for (nodeIndex = 0; nodeIndex < 2; nodeIndex++) {
        inactiveParagraphs[nodeIndex].classList.add('hidden');
        inactiveIcons[nodeIndex].classList.remove('value-active');
        inactiveHeadings[nodeIndex].classList.remove('value-text-active');
      }

      event.currentTarget.classList.toggle('value-active');
      activeParagraph.classList.toggle('hidden');
      activeHeading.classList.toggle('value-text-active');
    });
  }
}

const calendarHover = dayType => {
  const dayList = document.querySelectorAll(`.${dayType}`);
  let   nodeIndex;

  for (nodeIndex = 0; nodeIndex < dayList.length; nodeIndex++) {
    dayList[nodeIndex].addEventListener('mouseenter', () => {
      for (nodeIndex = 0; nodeIndex < dayList.length; nodeIndex++) {
        dayList[nodeIndex].classList.add(`${dayType}-active`);
      }
    });

    dayList[nodeIndex].addEventListener('mouseleave', () => {
      for (nodeIndex = 0; nodeIndex < dayList.length; nodeIndex++) {
        dayList[nodeIndex].classList.remove(`${dayType}-active`);
      }
    });
  }
}

const awardsCarousel = () => {
  const awardObjects = document.querySelectorAll('.trophy-container object'),
        arrowLeft = document.querySelector('.left'),
        arrowRight = document.querySelector('.right');
  let   carouselIndex = 0,
        nodeIndex;

  arrowLeft.addEventListener('click', event => {
    awardObjects[carouselIndex].classList.add('hidden');
    if (carouselIndex === 0) {
      carouselIndex = 2;
    } else {
      carouselIndex--;
    }
    awardObjects[carouselIndex].classList.remove('hidden');
  });

  arrowRight.addEventListener('click', event => {
    awardObjects[carouselIndex].classList.add('hidden');
    if (carouselIndex === 2) {
      carouselIndex = 0;
    } else {
      carouselIndex++;
    }
    awardObjects[carouselIndex].classList.remove('hidden');
  });
}

navPress();
calendarHover('optional');
calendarHover('mandatory');
scrollTo();
valueState();
awardsCarousel();