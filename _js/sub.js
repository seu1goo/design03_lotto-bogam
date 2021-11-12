$('.systemGrade figure').each(function () {
  if ($(window).width() < 641) {
    $(this).find('img').attr({
      src: "../_img/systemgrade_arrow_bottom.png"
    })
  }
});
// system

$(function () {
  var sticsTotal = $('.sticsTotal_tbl > ul > li.item_lst');
  sticsTotal.addClass('hide');
  sticsTotal.find('.dtl_table').hide();

  $('.sticsTotal_tbl > ul > li > .tit').click(function () {
    var onSticsTotal = $(this).parents('.sticsTotal_tbl > ul > li.item_lst:first');
    if (onSticsTotal.hasClass('hide')) {
      sticsTotal.addClass('hide').removeClass('active');
      sticsTotal.find('.dtl_table').slideUp(300);
      onSticsTotal.removeClass('hide').addClass('active');
      onSticsTotal.find('.dtl_table').slideDown(300);
    } else {
      onSticsTotal.removeClass('active').addClass('hide');
      onSticsTotal.find('.dtl_table').slideUp(300);
    }
    return false;
  });
});

$(function () {
  $('.csBtn').on('click', function () {
    var btn, selector, target;
    btn = $(this);
    selector = btn.parents('.cs');
    target = selector.find('.csTarget');

    function hide() {
      target.animate({
        height: '0px'
      }, 100, function () {
        target.hide();
      });
    }

    if (target.is(':visible')) {
      hide();
    } else {
      $('.csTarget').css('height', '0px');
      $('.csTarget').hide();

      var h = 5 * 34;
      target.show();
      target.animate({
        height: h + 'px'
      }, 200, function () {
        target.find('li').on('click', function () {
          btn.text($(this).attr('data-startNum') + '회');
          hide();
          target.find('li').off('click');
        });

        $(window).on('click', function () {
          $(window).off('click');
          if (target.is(':visible')) {
            hide();
          }
        });
      });
    }
  });
});
// analysis

var swiper = new Swiper('.newsslide', {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  direction: 'vertical',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    loop: true,
  },
});
var swiper = new Swiper('.mediabox', {
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
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
    },
  }
});
// news

$('.checks label').on('click', function () {
  var checkboxId = $(this).attr('for');

  if ($('#' + checkboxId).is(':checked') == false) {
    $(this).addClass('on');
  } else if ($('#' + checkboxId).is(':checked') == true) {
    $(this).removeClass('on');
  }
});

$('.allChk').on('click', function () {
  if ($('.allChk').hasClass('on')) {
    $('.joinChk').trigger('click');
  }
});

$('.auth_content .phone button').on('click', function () {
  $('.formPhoneAuthNum').show();
});

$('.auth_content .phone2 button').on('click', function () {
  $('.submit_area').show();
});

$('.submitId').on('click', function () {
  alert('아이디가 메일로 발송되었습니다. 이메일을 확인해주세요.');
});

$('.submitPw').on('click', function () {
  alert('임시비밀번호가 메일로 발송되었습니다. 비밀번호를 변경해주세요.');
});
// auth

$('.payMem').on('change', function () {
  if ($('.payMem option:selected').val() == "mem02") {
    $('.payWon').text('89,000원');
    $('.payMonth').text('12개월');
  } else if ($('.payMem option:selected').val() == "mem03") {
    $('.payWon').text('250,000원');
    $('.payMonth').text('18개월');
  } else if ($('.payMem option:selected').val() == "mem04") {
    $('.payWon').text('990,000원');
    $('.payMonth').text('24개월');
  }
})

$('.my_tabW ul li').each(function () {
  var myBtn = $(this);
  myBtn.on('click', function (e) {
    e.preventDefault();

    var target = $(this);

    target.addClass('active');
    target.siblings().removeClass('active')
  });
});

$('.btnPhoneN').on('click', function () {
  $('.formPhoneAuthNum').show()
})
// my

$(function () {
  var faqItem = $('.faq_board > ul > li');
  faqItem.addClass('hide');
  faqItem.find('.answer_article').hide();

  $('.faq_board > ul > li > .qusetion_article > a').on('click', function () {
    var onFaqItem = $(this).parents('.faq_board > ul > li:first');
    if (onFaqItem.hasClass('hide')) {
      faqItem.addClass('hide').removeClass('active');
      faqItem.find('.answer_article').slideUp(300);
      onFaqItem.removeClass('hide').addClass('active');
      onFaqItem.find('.answer_article').slideDown(300, function () {
        theOffset = $(this).offset();
        $('body,html').animate({
          scrollTop: theOffset.top - 200
        });
      });
    } else {
      onFaqItem.removeClass('active').addClass('hide');
      onFaqItem.find('.answer_article').slideUp(300);
    }
    return false;
  });
});

$('.faq_tab ul li').each(function () {
  var faqBtn = $(this);
  faqBtn.on('click', function (e) {
    e.preventDefault();

    var target = $(this);

    target.addClass('active');
    target.siblings().removeClass('active')
  });
});

$('#cs_spam').each(function () {
  var tabBtn = $('.cs_tab > li');
  var tabCon = $('.spamCon > div');

  tabCon.eq(0).siblings().hide();
  tabBtn.on('click', function (e) {
    e.preventDefault();

    var target = $(this);
    var index = target.index();

    tabBtn.removeClass('active');
    target.addClass('active');
    tabCon.css({
      display: 'none'
    });
    tabCon.eq(index).css({
      display: 'block'
    });
  });
});
// cs