const scrollTo = () => {
  const navItems = document.querySelectorAll('nav a')
  const navButton = document.querySelector('.nav-btn')
  const navSidebar = document.querySelector('nav')

  navItems.forEach((navItem) => {
    navItem.addEventListener('click', event => {
      const section = event.currentTarget.getAttribute('href')
      const target = document.querySelector(section)

      event.preventDefault()
      target.scrollIntoView({behavior: 'smooth'})
      navSidebar.classList.toggle('nav-active')
      navButton.classList.toggle('nav-close')
    })
  })
}

const navPress = () => {
  const navButton = document.querySelector('.nav-btn')
  const navSidebar = document.querySelector('nav')

  navButton.addEventListener('click', () => {
    navSidebar.classList.toggle('nav-active')
    navButton.classList.toggle('nav-close')
  })
}

const valueState = () => {
  const valueIcons = document.querySelectorAll('.value-icon')

  valueIcons.forEach((valueIcon) => {
    valueIcon.addEventListener('click', event => {
      const currentValue = event.currentTarget.parentNode.getAttribute('id')
      const inactiveParagraphs = document.querySelectorAll(`.values > p:not(#${currentValue})`)
      const inactiveIcons = document.querySelectorAll(`.value-set:not(#${currentValue}) > .value-icon`)
      const inactiveHeadings = document.querySelectorAll(`.value-set:not(#${currentValue}) > p`)
      const activeParagraph = document.querySelector(`.values > #${currentValue}`)
      const activeHeading = document.querySelector(`#${currentValue} > p`)
      const target = event.currentTarget

      for (let i = 0; i < 2; i++) {
        inactiveParagraphs[i].classList.add('hidden')
        inactiveParagraphs[i].style.display = 'none'
        inactiveIcons[i].classList.remove('value-active')
        inactiveHeadings[i].classList.remove('value-text-active')
      }

      activeParagraph.style.display = 'inline-block'
      target.classList.toggle('value-active')
      activeHeading.classList.toggle('value-text-active')
      activeParagraph.classList.toggle('hidden')
    })
  })
}

const calendarHover = dayType => {
  const dayList = document.querySelectorAll(`.${dayType}`)
  const dayContainer = document.querySelector(`.${dayType}-container`)

  dayList.forEach((day) => {
    day.addEventListener('mouseenter', () => {
      dayList.forEach((day) => {
        day.classList.add(`${dayType}-active`)
      })

      dayContainer.classList.add(`${dayType}-active`)
    })

    day.addEventListener('mouseleave', () => {
      dayList.forEach((day) => {
        day.classList.remove(`${dayType}-active`)
      })

      dayContainer.classList.remove(`${dayType}-active`)
    })
  })
}

const awardsCarousel = () => {
  const awardObjects = document.querySelectorAll('.trophy-container object')
  const arrowLeft = document.querySelector('.trophy-container .left')
  const arrowRight = document.querySelector('.trophy-container .right')
  let carouselIndex = 0

  arrowLeft.addEventListener('click', event => {
    awardObjects[carouselIndex].classList.add('hidden')
    carouselIndex === 0
      ? carouselIndex = 3
      : carouselIndex--
    awardObjects[carouselIndex].classList.remove('hidden')
  })

  arrowRight.addEventListener('click', event => {
    awardObjects[carouselIndex].classList.add('hidden')
    carouselIndex === 3
      ? carouselIndex = 0
      : carouselIndex++
    awardObjects[carouselIndex].classList.remove('hidden')
  })
}

const clubsCarousel = () => {
  const clubContainer = document.querySelector('.club-container')
  const clubDesc = document.querySelectorAll('.club-container p')
  const clubHead = document.querySelectorAll('.club-container h4')
  const arrowLeft = document.querySelector('.club-container .left')
  const arrowRight = document.querySelector('.club-container .right')
  let carouselIndex = 0

  arrowLeft.addEventListener('click', event => {
    clubDesc[carouselIndex].classList.add('hidden')
    clubHead[carouselIndex].classList.add('hidden')

    carouselIndex === 0
      ? carouselIndex = 2
      : carouselIndex--

    switch (carouselIndex) {
      case 0:
        clubContainer.id = 'vex-bg'
        break
      case 1:
        clubContainer.id = 'tsa-bg'
        break
      case 2:
        clubContainer.id = 'stem-bg'
        break
    }

    clubDesc[carouselIndex].classList.remove('hidden')
    clubHead[carouselIndex].classList.remove('hidden')
  })

  arrowRight.addEventListener('click', event => {
    clubDesc[carouselIndex].classList.add('hidden')
    clubHead[carouselIndex].classList.add('hidden')

    carouselIndex === 2
      ? carouselIndex = 0
      : carouselIndex++

    switch (carouselIndex) {
      case 0:
        clubContainer.id = 'vex-bg'
        break
      case 1:
        clubContainer.id = 'tsa-bg'
        break
      case 2:
        clubContainer.id = 'stem-bg'
        break
    }

    clubDesc[carouselIndex].classList.remove('hidden')
    clubHead[carouselIndex].classList.remove('hidden')
  })
}

(() => {
  navPress()
  calendarHover('optional')
  calendarHover('mandatory')
  scrollTo()
  valueState()
  awardsCarousel()
  clubsCarousel()
})()
