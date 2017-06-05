module.exports = function() {

  // begin thumb-tabs
  $(function() {
    $(".thumb-tabs__list li").click(function() {
      $(".thumb-tabs__list li").removeClass("active");
      $(this).addClass("active");

      var activeTab = $(this).attr("data-slider"); //Найти data атрибут для определения активной вкладки+контента

      $(".thumb-slider").removeClass("active");
      $(activeTab).addClass("active");

      return false;
    });
  });
  // end   thumb-tabs

};
