/* Табы которые находяться в банере они переключаються автоматически */
$(document).ready(function () {
  var tabTimer;

  function startTimer() {
    tabTimer = setInterval(function () {
      var activeTab = $('.tab-btn.active');
      var nextTab = activeTab.next('.tab-btn').length ? activeTab.next('.tab-btn') : $('.tab-btn:first');
      nextTab.click();
    }, 3000);
  }

  function stopTimer() {
    clearInterval(tabTimer);
  }

  $('.tab-btn').click(function () {
    stopTimer();

    var tab_id = $(this).attr('data-tab');

    $('.tab-btn').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $('[data-tab="' + tab_id + '"]').addClass('active');

    startTimer();
  });

  startTimer();
});
/* ------------------------------------------------------------------ */


/* Табы которые находяться во второй секции, при адаптиве добавляеться кнопка дальше и назад */
$(document).ready(function () {
  var tabsBtn = $(".tab-btn2");
  var tabsContent = $(".tab-content2");
  var currentTab = 0;

  tabsContent.not(":first").hide();
  tabsBtn.on("click", function () {
    var activeTab = $(this).data("tab");
    $('.tab-content2:not([data-tab="' + activeTab + '"])').hide();
    $('.tab-content2[data-tab="' + activeTab + '"]').show();
    tabsBtn.removeClass("active");
    $(this).addClass("active");
    currentTab = $(this).index();
    console.log(activeTab);
  });

  const nextBtn = $('.next-btn');
  const backBtn = $('.back-btn');

  nextBtn.on('click', () => {
    if (currentTab < tabsContent.length - 1) {
      tabsContent.eq(currentTab).hide();
      tabsContent.eq(++currentTab).show();
      tabsBtn.removeClass('active').eq(currentTab).addClass('active');
    }
  });

  backBtn.on('click', () => {
    if (currentTab > 0) {
      tabsContent.eq(currentTab).hide();
      tabsContent.eq(--currentTab).show();
      tabsBtn.removeClass('active').eq(currentTab).addClass('active');
    }
  });
});
/* ------------------------------------------------------------------ */


/* Табы которые находяться в 4 секции, тут находяться табы в табах */
$(document).ready(function () {
  var tabsBtn = $(".tab-btn-img");
  var tabsContentImg = $(".tab-img-content");

  var activeContent = tabsContentImg.filter(".active");

  tabsContentImg.not(":first").hide();

  tabsBtn.on("click", function () {
    var activeTab = $(this).attr("data-tab");
    var prevContent = tabsContentImg.filter(".active");
    var newContent = $("[data-tab='" + activeTab + "']");

    tabsContentImg.hide();
    prevContent.removeClass("active");

    if (newContent.hasClass("tab-img-content") && !newContent.hasClass("active")) {
      newContent.find(".tab-img-content:first-child").addClass("active").show();
    }

    newContent.show().addClass("active");
    tabsBtn.removeClass("active");
    $(this).addClass("active");

    activeContent = newContent;
  });

  $('.choiceTabsBtn').click(function () {
    var tab_id = $(this).attr('data-tab');
    var prevContent = activeContent; // сохраняем предыдущий активный контент
  
    if (!$(this).hasClass('active')) { // проверяем, не является ли новый таб уже активным
      $('.choiceTabsBtn').removeClass('active');
      $('.choiceTabsContent').removeClass('active');
      $('.tab-img-content').eq(0).addClass('active');
  
      $(this).addClass('active');
      var newContent = $('[data-tab="' + tab_id + '"]');
      var newTabImgContent = newContent.find(".tab-img-content:first-child");
  
      if (newTabImgContent.length) {
        newTabImgContent.show().addClass("active");
      }
  
      newContent.addClass('active').show();
  
      if (prevContent.get(0) !== newContent.get(0)) { // проверяем, не является ли новый контент уже активным
        prevContent.removeClass('active');
        activeContent = newContent;
      }
    }
  });
  
});
/* ------------------------------------------------------------------ */


/* Слайдер Статьи */
$(document).ready(function () {
  $('.articleSlider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow: $('.articlePrev'),
    nextArrow: $('.articleNext'),
    appendDots: $('.articleDots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  });
});
/* ------------------------------------------------------------------ */


/* Слайдер Отзывы */
$(document).ready(function () {
  $('.reviewsSlider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: $('.reviewsPrev'),
    nextArrow: $('.reviewsNext'),
    appendDots: $('.reviewsDots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  });
});
/* ------------------------------------------------------------------ */


/* Бургер */
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('.navBurger').classList.toggle('open');
    document.querySelector('.body').classList.toggle('active');
  });
}

const openBurger = document.querySelector('.burger.open');
if (openBurger) {
  openBurger.addEventListener('click', function () {
    document.querySelector('.body').classList.remove('active');
  });
}
/* ------------------------------------------------------------------ */


/* Анимация руки которая выезжает */
$(document).ready(function () {
  var animation = $('.whyChooseAnimation');
  var animationOffset = animation.offset().top;
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    if (window.innerWidth >= 768) {
      var scroll = $(window).scrollTop();
      var whyChooseOffset = $('.wrapperAnimation').offset().top;
      var animationPosition = (whyChooseOffset - windowHeight) + 700;

      if (scroll > animationPosition) {
        $('.wrapperAnimation').addClass('animation-slide');
      } else {
        $('.wrapperAnimation').removeClass('animation-slide');
      }
    }
  });
});
/* ------------------------------------------------------------------ */


/* Логика для хуков которые завиксированы*/
$(document).ready(function () {
  var contentHeight = $('.window-content').outerHeight();

  $('.toggle-btn').click(function () {
    $('.fixed-window').toggleClass('hide');

    if ($('.fixed-window').hasClass('hide')) {
      $('.fixed-window').animate({ height: 'auto' }, 300);
    } else {
      $('.fixed-window').animate({ height: 'auto' }, 300);
    }
  });
});

/* ------------------------------------------------------------------ */




$(document).ready(function () {
  var openModalBtn = $(".open-modal");
  var modal = $(".modalWindows");
  var closeModalBtn = $(".close-modal");
  var body1 = $(".body");
  openModalBtn.on("click", function () {
    modal.addClass("active");
    body1.addClass("active");
  });
  closeModalBtn.on("click", function () {
    modal.removeClass("active");
    body1.removeClass("active");
  });
});




$(document).ready(function () {
  var openModalBtn = $(".banner-center-btn2");
  var modal2 = $(".modalWindowsInfo");
  var closeModalBtn = $(".modalWindowsInfoClose");
  var closeModalBtn2 = $(".modalClose2");
  var body1 = $(".body");
  openModalBtn.on("click", function () {
    modal2.addClass("active");
    body1.addClass("active");
  });
  closeModalBtn.on("click", function () {
    modal2.removeClass("active");
    body1.removeClass("active");
  });
  closeModalBtn2.on("click", function () {
    modal2.removeClass("active");
    body1.removeClass("active");
  });
});

