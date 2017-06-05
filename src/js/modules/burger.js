module.exports = function() {

  // begin burger
  $('.toggle-mnu').on('click', function() {
    $('.burger').toggleClass('on');
    $(".top-menu").toggleClass('active');
    $('body').toggleClass("fix");
    return false;
  });
  // end   burger

  // begin burger
  $('.aside-open').on('click', function() {
    $('.aside').toggleClass('active');
    return false;
  });
  // end   burger

};