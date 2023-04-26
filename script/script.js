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
// Получаем все кнопки вкладок и контент вкладок
var tabsBtn = $(".tab-btn2");
var tabsContent = $(".tab-content2");

// По умолчанию показываем первую вкладку и скрываем остальные
tabsContent.not(":first").hide();

// Обработчик клика на кнопках вкладок
tabsBtn.on("click", function() {
  // Получаем значение атрибута data-tab для выбранной кнопки
  var activeTab = $(this).data("tab");

  // Скрываем все контейнеры, кроме того, который соответствует выбранной вкладке
  $('.tab-content2:not([data-tab="'+activeTab+'"])').hide();

  // Находим контент вкладки, соответствующий выбранной кнопке, и показываем его
  $('.tab-content2[data-tab="'+activeTab+'"]').show();

  // Удаляем класс "active" у всех кнопок вкладок
  tabsBtn.removeClass("active");

  // Добавляем класс "active" к выбранной кнопке вкладки
  $(this).addClass("active");

  // Для отладки можно вывести в консоль значение атрибута data-tab выбранной вкладки
  console.log(activeTab);
});

// Обработчик клика на кнопке "Назад"
$('.back-btn').click(function(){
  // Получаем родительский элемент контейнера
  var parent = $(this).parent();
  // Получаем предыдущий контейнер
  var prevTab = parent.prev('.tab-content2');
  // Скрываем текущий контейнер и показываем предыдущий
  parent.hide();
  prevTab.show();
});

// Обработчик клика на кнопке "Далее"
$('.next-btn').click(function(){
  // Получаем родительский элемент контейнера
  var parent = $(this).parent();
  // Получаем следующий контейнер
  var nextTab = parent.next('.tab-content2');
  // Скрываем текущий контейнер и показываем следующий
  parent.hide();
  nextTab.show();
});

// Скрываем все вкладки, кроме первой
$('.tab-content2:not(:first)').hide();


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
  
  

