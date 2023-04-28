$(document).ready(function() {
    var tabTimer;
  
    function startTimer() {
      tabTimer = setInterval(function() {
        var activeTab = $('.tab-btn.active');
        var nextTab = activeTab.next('.tab-btn').length ? activeTab.next('.tab-btn') : $('.tab-btn:first');
        nextTab.click();
      }, 9000);
    }
  
    function stopTimer() {
      clearInterval(tabTimer);
    }
  
    $('.tab-btn').click(function() {
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
  


  $(document).ready(function() {
    var tabsBtn = $(".tab-btn2");
    var tabsContent = $(".tab-content2");
    var currentTab = 0; // определяем текущую вкладку
    
    tabsContent.not(":first").hide();
    tabsBtn.on("click", function() {
      var activeTab = $(this).data("tab");
      $('.tab-content2:not([data-tab="'+activeTab+'"])').hide();
      $('.tab-content2[data-tab="'+activeTab+'"]').show();
      tabsBtn.removeClass("active");
      $(this).addClass("active");
      currentTab = $(this).index(); // при клике на кнопку обновляем текущую вкладку
      console.log(activeTab);
    });
  
    const nextBtn = $('.next-btn'); // используем селектор jQuery
    const backBtn = $('.back-btn'); // используем селектор jQuery
  
    nextBtn.on('click', () => {
      if (currentTab < tabsContent.length - 1) { // проверяем, не достигнут ли конец списка вкладок
        tabsContent.eq(currentTab).hide();
        tabsContent.eq(++currentTab).show();
        tabsBtn.removeClass('active').eq(currentTab).addClass('active');
      }
    });
  
    backBtn.on('click', () => {
      if (currentTab > 0) { // проверяем, не достигнут ли начало списка вкладок
        tabsContent.eq(currentTab).hide();
        tabsContent.eq(--currentTab).show();
        tabsBtn.removeClass('active').eq(currentTab).addClass('active');
      }
    });
  });
  





































  $(document).ready(function() {
    var tabsBtn = $(".tab-btn-img");
    var tabsContentImg = $(".tab-img-content");
  
    var activeContent = tabsContentImg.filter(".active"); // Сохраняем ссылку на последний активный контент
    
    tabsContentImg.not(":first").hide();
  
    tabsBtn.on("click", function() {
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
  
      activeContent = newContent; // Обновляем ссылку на последний активный контент
    });
  
    $('.choiceTabsBtn').click(function() {
      var tab_id = $(this).attr('data-tab');
  
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
      activeContent.removeClass('active'); // Скрываем последний активный контент
      activeContent = newContent; // Обновляем ссылку на последний активный контент
    });
  });
  
  

  $(document).ready(function() {
  $('.articleSlider').slick({
    infinite: true,
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

$(document).ready(function() {
  $('.reviewsSlider').slick({
    infinite: true,
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
