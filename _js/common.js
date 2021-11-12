const mobMenu = document.querySelector('header .mobOpen');
const mobMenuClose = document.querySelector('header .mobClose');
const nav = document.querySelector('header nav');
const navList = document.querySelectorAll('header nav ul li');
const navListSub = document.querySelectorAll('header nav ul li .sub');

if (window.matchMedia("max-width: 640px")) {
  mobMenu.addEventListener('click', function () {
    nav.classList.add('slide-right')
  })
  mobMenuClose.addEventListener('click', function () {
    nav.classList.remove('slide-right')
  })

}
// header


const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY == 0) {
    gsap.to('#to-top', 0.2, {
      x: 100
    });
  } else {
    gsap.to('#to-top', 0.2, {
      x: 0
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});
//to-top

const useBtn = document.querySelector('.useBtn');
const personalBtn = document.querySelector('.personalBtn');
const policyUse = document.querySelector('#policyUse');
const policyPersonal = document.querySelector('#policyPersonal');
const useClose = document.querySelector('.useClose');
const perClose = document.querySelector('.perClose');

useBtn.addEventListener('click', function () {
  policyUse.classList.add('open');
});

useClose.addEventListener('click', function () {
  policyUse.classList.remove('open');
});

personalBtn.addEventListener('click', function () {
  policyPersonal.classList.add('open');
});

perClose.addEventListener('click', function () {
  policyPersonal.classList.remove('open');
});
// policy