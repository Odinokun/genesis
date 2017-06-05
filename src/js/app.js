$(function() {

  // begin require SVG for IE
  require('./modules/svg4everybody')();
  // end   require SVG for IE

  // begin Chrome Smooth Scroll
  require('./modules/smoothScroll')();
  // end   Chrome Smooth Scroll

  // begin Sticky header
  require('./modules/sticky-header')();
  // end   Sticky header

  // begin burger
  require('./modules/burger')();
  // end   burger

  // begin top-slider in index.html
  require('./modules/top-slider')();
  // end   top-slider in index.html

  // begin thumb-slider in index.html
  require('./modules/thumb-slider')();
  // end   thumb-slider in index.html

  // begin worksone-slider
  require('./modules/worksone-slider')();
  // end   worksone-slider

  // begin thumb-tabs
  require('./modules/thumb-tabs')();
  // end   thumb-tabs

});