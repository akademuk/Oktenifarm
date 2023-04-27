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
    // Получаем все кнопки вкладок и контент вкладок
    var tabsBtn = $(".tab-btn-img");
    var tabsContentImg = $(".tab-img-content");
  
    // По умолчанию показываем первую вкладку и скрываем остальные
    tabsContentImg.not(":first").hide();
  
    // Обработчик клика по кнопке вкладки
    tabsBtn.on("click", function() {
      // Получаем значение атрибута data-tab кнопки вкладки
      var activeTab = $(this).attr("data-tab");
  
      // Скрываем все контенты вкладок
      tabsContentImg.hide();
  
      // Удаляем класс "active" у всех кнопок вкладок
      tabsBtn.removeClass("active");
  
      // Находим контент вкладки, соответствующий выбранной кнопке, и показываем его
      $("[data-tab='" + activeTab + "']").show();
  
      // Добавляем класс "active" к выбранной кнопке вкладки
      $(this).addClass("active");
    });
  });
  
  
  $(document).ready(function() {
    var tabTimer;
  
  
  
    function stopTimer() {
      clearInterval(tabTimer);
    }
  
    $('.choiceTabsBtn').click(function() {
      stopTimer();
  
      var tab_id = $(this).attr('data-tab');
  
      $('.choiceTabsBtn').removeClass('active');
      $('.choiceTabsContent').removeClass('active');
  
      $(this).addClass('active');
      $('[data-tab="' + tab_id + '"]').addClass('active');
  
      startTimer();
    });
  
    startTimer();
  });
  
