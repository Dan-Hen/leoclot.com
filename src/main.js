import barba from '@barba/core';
import { gsap, TweenMax } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './js/SplitText';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

function HomeEnter () {
  const smallBall = document.querySelector('.cursor__ball--small')
  const hoverables = document.querySelectorAll('.hoverable')

  // Listeners
  document.body.addEventListener('mousemove', onMouseMove)
  for (let i = 0; i < hoverables.length; i++) {
    hoverables[i].addEventListener('mouseenter', onMouseHover)
    hoverables[i].addEventListener('mouseleave', onMouseHoverOut)
  }

  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to(smallBall, 0.1, {
      x: e.pageX - pageXOffset,
      y: e.pageY - pageYOffset
    })
  }

  // Hover an element
  function onMouseHover() {
    TweenMax.to(smallBall, 0.3, {
      scale: 5
    })
  }

  function onMouseHoverOut() {
    TweenMax.to(smallBall, 0.3, {
      scale: 1
    })
  }

  const hero = gsap.timeline()
  hero.to(' .arrow-down', {
    x: -0,
    y: 0,
    duration: 0.6,
    delay: 1.2,
    ease: 'Power3.easeInOut'
  }, 0)
  hero.fromTo('.lineChild', { opacity: 0 }, {
    opacity: 1,
    duration: 0.5,
    delay: 0,
    ease: 'Power3.easeInOut',
    stagger: 0.1
  }, 0)
  hero.fromTo('.lineChild', { y: 100 }, {
    y: 0,
    duration: 0.4,
    delay: 0,
    ease: 'Power3.easeInOut',
    stagger: 0.1
  }, 0)
  hero.fromTo('.fadeIn', { opacity: 0 }, {
    opacity: 1,
    duration: 1,
    delay: 0,
    ease: 'Power3.easeInOut',
    stagger: 0.1
  }, 0)
  hero.fromTo('.fadeIn2', { opacity: 0 }, {
    opacity: 1,
    duration: 0.6,
    delay: 0.6,
    ease: 'Power3.easeInOut',
    stagger: 0.4
  }, 0)
}

function HomeLeave() {
  const line = gsap.timeline({
    onComplete: function () {
      listAnim.play(0)
    }
  })
  line.fromTo('.cutline', { width: '100%' }, {
    width: '0%',
    duration: 0.2,
    ease: 'Power4.easeInOut'
  }, 0)
  line.fromTo('.fadeInUp', { opacity: 1 }, {
    opacity: 0,
    duration: 0.2,
    ease: 'Power3.easeInOut',
    stagger: 0.05
  }, 0)

  const listAnim = gsap.timeline({ paused: true })
  listAnim.to(window, {
    duration: 0.3,
    scrollTo: 0,
    ease: 'power4.in'
  }, 0)
  listAnim.to('.active', {
    top: '40vh',
    transform: 'translateY(-40%)',
    duration: 0.3,
    ease: 'power4.in'
  }, 0)
  listAnim.fromTo('.active', { opacity: 1 }, {
    delay: 0.1,
    duration: 0.2,
    ease: 'power4.in',
    opacity: 0.7
  }, 0)
  listAnim.fromTo(' .arrow-down', { opacity: 1 }, {
    opacity: 0,
    duration: 0.1,
    ease: 'power4.in'
  }, 0)
  listAnim.fromTo('.lineChild', { opacity: 1 }, {
    opacity: 0,
    duration: 0.1,
    stagger: -0.05,
    ease: 'power4.in'
  }, 0)
  listAnim.fromTo('.lineChild', { y: 0 }, {
    y: 100,
    duration: 0.2,
    stagger: -0.07,
    ease: 'power4.in'
  }, 0)
  listAnim.fromTo('.fadeIn', { opacity: 1 }, {
    opacity: 0,
    duration: 0.1,
    ease: 'power4.in'
  }, 0)
  listAnim.fromTo('.fadeIn2', { opacity: 1 }, {
    opacity: 0,
    duration: 0.2,
    ease: 'power4.in'
  }, 0)
  listAnim.fromTo('.surround', { strokeDashoffset: 0 },
    {
      strokeDashoffset: 1250,
      opacity: 1,
      duration: 0.2,
      delay: 0
    }, 0)
}

function HomeScroll () {
  gsap.fromTo('.cutline', { width: '0%' }, {
    width: '100%',
    duration: 0.6,
    delay: 0.4,
    stagger: 0.2,
    ease: 'Power4.easeInOut',
    scrollTrigger: '.cultine'
  })
  gsap.fromTo('.fadeInUp', { opacity: 0 }, {
    ease: 'Power3.easeInOut',
    opacity: 1,
    delay: 0.4,
    stagger: 0.1,
    scrollTrigger: '.fadeInUp'
  })
  gsap.fromTo('.lineChild2', {
    y: 100,
    opacity: 0
  }, {
    delay: 0.2,
    duration: 0.4,
    ease: 'Power3.easeInOut',
    opacity: 1,
    y: 0,
    stagger: 0.2,
    scrollTrigger: '.lineChild2'
  })
  const light = gsap.timeline({
    onComplete: function () {
      light.delay(5).restart(true)
    }
  })
  light.fromTo('#rect1', { rotation: +18.05 - 180, transformOrigin: '50% 50%' }, {
    duration: 2,
    delay: 0.5,
    ease: 'Power3.easeInOut',
    rotation: -18.05 + 180,
    transformOrigin: '50% 50%'
  }, 0)
  light.fromTo('#rect2', { rotation: +53.3 - 180, transformOrigin: '50% 50%' }, {
    duration: 2,
    delay: 0.5,
    ease: 'Power3.easeInOut',
    rotation: -53.3 + 180,
    transformOrigin: '50% 50%'
  }, 0)
  light.fromTo('#rect3', { rotation: 0, transformOrigin: '50% 50%' }, {
    duration: 2,
    delay: 0.5,
    ease: 'Power3.easeInOut',
    rotation: 180,
    transformOrigin: '50% 50%'
  }, 0)
  light.fromTo('#rect4', { rotation: +36.66, transformOrigin: '50% 50%' }, {
    duration: 2,
    delay: 0.5,
    ease: 'Power3.easeInOut',
    rotation: -36.66 + 180,
    transformOrigin: '50% 50%'
  }, 0)
  light.fromTo('#rect5', { rotation: +71.94, transformOrigin: '50% 50%' }, {
    duration: 2,
    delay: 0.5,
    ease: 'Power3.easeInOut',
    rotation: -71.94 + 180,
    transformOrigin: '50% 50%'
  }, 0)
}

function MenuLaunch () {
  document.getElementById('nav-toggle-text').textContent = 'close'
  document.getElementById('nav-toggle').href = 'javascript:history.back()'

  gsap.fromTo('.menu-option', {
    y: 40,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.3,
    stagger: 0.2
  })
  gsap.fromTo('.footer', { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
      delay: 0.2
    })
  gsap.fromTo('.menu-project-list', { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
      delay: 0.7,
      stagger: 0.05
    })
  gsap.fromTo('.crossed', { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
      delay: 0.7
    })
}

function MenuScroll () {

}

function MenuLeave () {
  document.getElementById('nav-toggle-text').textContent = 'menu'
  document.getElementById('nav-toggle').href = 'menu.html'

  gsap.fromTo('.menu-option', {
    y: 0,
    opacity: 1
  }, {
    y: 40,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1
  })
  gsap.fromTo('.footer', { opacity: 1 },
    {
      opacity: 0,
      duration: 0.2,
      delay: 0.1
    })
  gsap.fromTo('.menu-project-list', { opacity: 1 },
    {
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      stagger: -0.05
    })
  gsap.fromTo('.crossed', { strokeDashoffset: 0 },
    {
      strokeDashoffset: 1250,
      opacity: 1,
      duration: 0.3,
      delay: 0
    })
}

function ProjectLaunch () {
  gsap.fromTo('.lineChild', {
    y: 100,
    opacity: 0
  }, {
    delay: 0,
    duration: 0.8,
    ease: 'Power3.easeInOut',
    opacity: 1,
    y: 0,
    stagger: 0.2
  })
  gsap.fromTo('.fadeIn', { opacity: 0 }, {
    duration: 0.5,
    delay: 0.2,
    ease: 'Power4.easeInOut',
    opacity: 1,
    stagger: 0.1
  })
  gsap.fromTo('.row-full', {
    opacity: 0,
    y: 30,
    rotation: 2
  }, {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 0.8,
    ease: 'Power4.easeInOut'
  })
}

function ProjectScroll () {
  gsap.fromTo('.row-right', {
    opacity: 0,
    y: 20,
    rotation: 2
  }, {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 0.6,
    delay: 0.2,
    ease: 'Power3.easeInOut',
    scrollTrigger: '.row-right'
  })
  gsap.fromTo('.row-left', {
    opacity: 0,
    y: 20,
    rotation: 2
  }, {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 0.6,
    delay: 0.2,
    ease: 'Power3.easeInOut',
    scrollTrigger: '.row-left'
  })
  gsap.fromTo('.fadeIn2', { opacity: 0 }, {
    opacity: 1,
    duration: 0.6,
    delay: 0.6,
    ease: 'Power3.easeInOut',
    stagger: 0.4
  })
  gsap.fromTo('.P1', {
    y: 20,
    opacity: 0
  }, {
    delay: 0.2,
    duration: 0.4,
    ease: 'Power3.easeInOut',
    opacity: 1,
    y: 0,
    stagger: 0.1,
    scrollTrigger: '.P1'
  })
  gsap.fromTo('.P2', {
    y: 20,
    opacity: 0
  }, {
    delay: 0.2,
    duration: 0.4,
    ease: 'Power3.easeInOut',
    opacity: 1,
    y: 0,
    stagger: 0.1,
    scrollTrigger: '.P2'
  })
}

function ProjectLeave () {
  const projectFade = gsap.timeline()
  projectFade.fromTo('.row-right', { opacity: 1 }, {
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    ease: 'Power3.easeInOut'
  }, 0)
  projectFade.fromTo('.row-left', { opacity: 1 }, {
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    ease: 'Power3.easeInOut'
  }, 0)
  projectFade.fromTo('.row-full', { opacity: 1 }, {
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    ease: 'Power3.easeInOut'
  }, 0)
  projectFade.fromTo('.fadeIn', { opacity: 1 }, {
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    ease: 'Power3.easeInOut'
  }, 0)
  projectFade.fromTo('.fadeIn2', { opacity: 1 }, {
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    ease: 'Power3.easeInOut'
  }, 0)
  projectFade.fromTo('.P1', {
    y: 0,
    opacity: 1
  }, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'Power3.easeInOut'
  }, 0)
  projectFade.fromTo('.P2', {
    y: 0,
    opacity: 1
  }, {
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: 'Power3.easeInOut'
  }, 0)
  gsap.fromTo('.lineChild', {
    y: 0,
    opacity: 1
  }, {
    delay: 0.2,
    duration: 0.8,
    ease: 'Power3.easeInOut',
    opacity: 0,
    y: 100,
    stagger: 0.2
  })
  gsap.fromTo('.hero-image', { opacity: 1 }, {
    opacity: 0,
    delay: 0.2,
    duration: 0.6,
    ease: 'Power3.easeInOut'
  })
  gsap.to('.hero-image', {
    top: '30vh',
    transform: 'translateY(-40%)',
    duration: 0.6,
    delay: 0.2,
    ease: 'Power3.easeInOut'
  })
  gsap.fromTo('.next', { x: 0, opacity: 1 }, {
    x: -30,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    ease: 'Power3.easeInOut'
  })
}

barba.init({
  debug: true,
  transitions: [
    {
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 1,
          delay: 0.7
        })
      },
      enter(data) {
        data.current.container.style.display = 'none'
        return gsap.from(data.next.container, {
          opacity: 1
        })
      }
    }
  ],
  views: [
    {
      namespace: 'project',
      beforeEnter ({ next }) {
        let lineParent = new SplitText(next.container.querySelectorAll('.title'), {
          type: 'lines',
          linesClass: 'lineParent'
        })
        let lineChild = new SplitText(next.container.querySelectorAll('.lineParent'), {
          type: 'lines',
          linesClass: 'lineChild'
        })
        ProjectLaunch()
      },
      afterEnter({ next }) {
        let P1 = new SplitText(next.container.querySelectorAll('.P1'), {
          type: 'lines',
          linesClass: 'P1'
        })
        let P2 = new SplitText(next.container.querySelectorAll('.P2'), {
          type: 'lines',
          linesClass: 'P2'
        })
        ProjectScroll()
      },
      beforeLeave({ next }) {
        ProjectLeave()
      }
    },
    {
      namespace: 'menu',
      beforeEnter({ next }) {
        MenuLaunch()
      },
      afterEnter({ next }) {
        MenuScroll()
      },
      beforeLeave({ next }) {
        MenuLeave()
      }
    },
    {
      namespace: 'home',
      beforeEnter({ next }) {
        gsap.to(window, {
          duration: 0,
          scrollTo: 0,
          ease: 'power4.in'
        })
        let lineparent2 = new SplitText(next.container.querySelectorAll('.footer-text'), {
          type: 'lines',
          linesClass: 'lineParent2'
        })
        let lineChild2 = new SplitText(next.container.querySelectorAll('.lineParent2'), {
          type: 'lines',
          linesClass: 'lineChild2'
        })

        let lineParent = new SplitText(next.container.querySelectorAll('.header-text'), {
          type: 'lines',
          linesClass: 'lineParent'
        })
        let lineChild = new SplitText(next.container.querySelectorAll('.lineParent'), {
          type: 'lines',
          linesClass: 'lineChild'
        })
        HomeEnter()
      },
      afterEnter({ next }) {
        HomeScroll()
        document.getElementById('light').addEventListener('click', lightMode)

        function lightMode() {
          const element = document.body
          element.classList.toggle('light-mode')
          const light = document.getElementByClass('.lightMode')
          light.classList.toggle('light-mode')
        }

        document.querySelector('#nav-toggle').addEventListener('click', function () {
          this.classList.toggle('image-active')
        })
        const links = next.container.querySelectorAll('.hover-section')
        const images = next.container.querySelectorAll('.image-section')
        links.forEach((link, i) => {
          link.addEventListener('mouseenter', () => {
            link.classList.add('active')
            if (images[i]) images[i].classList.add('active')
          })

          link.addEventListener('mouseleave', () => {
            links.forEach(link => link.classList.remove('active'))
            images.forEach(image => image.classList.remove('active'))
          })
        })
      },
      beforeLeave({ next }) {
        HomeLeave()
      }
    }
  ]
})
