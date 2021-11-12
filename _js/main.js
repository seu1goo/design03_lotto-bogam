if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
};

var galleryThumbs = new Swiper('#mainVisual .gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 9.8,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    1025: {
      slidesPerView: 9.8
    },
    769: {
      slidesPerView: 8.7
    },
    641: {
      slidesPerView: 8.5
    },
    0: {
      slidesPerView: 2
    }
  }
});
var galleryTop = new Swiper('#mainVisual .gallery-top', {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  }
});

$("#mainVisual .pauseBtn").click(function () {
  galleryThumbs.autoplay.stop();
  galleryTop.autoplay.stop();
  $(this).hide();
  $("#mainVisual .playBtn").show();
});

$("#mainVisual .playBtn").click(function () {
  galleryThumbs.autoplay.start();
  galleryTop.autoplay.start();
  $(this).hide();
  $("#mainVisual .pauseBtn").show();
});
//mainVisual

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
//section-animation

new Swiper('#contentReceipt .swiper-container', {
  slidesPerView: 6,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1600: {
      slidesPerView: 6
    },
    1025: {
      slidesPerView: 5
    },
    769: {
      slidesPerView: 4
    },
    641: {
      slidesPerView: 3
    },
    0: {
      slidesPerView: 2
    }
  }
});
//contentReceipt

new Swiper('.popupZone .swiper-container', {
  slidesPerView: 4.2,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    1025: {
      slidesPerView: 4.2
    },
    769: {
      slidesPerView: 2.2
    },
    640: {
      slidesPerView: 1.2
    },
    0: {
      slidesPerView: 2.2
    }
  }
});
//popUp