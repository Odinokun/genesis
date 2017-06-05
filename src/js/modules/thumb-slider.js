module.exports = function() {

  // begin thumb-slider in index.html
  $(function($){
      $(function(){
          $("#thumb-slider-01").mThumbnailScroller({
            type:"hover",
            axis:"x" //change to "y" for vertical scroller
          });
          $("#thumb-slider-02").mThumbnailScroller({
            type:"hover",
            axis:"x" //change to "y" for vertical scroller
          });
          $("#thumb-slider-03").mThumbnailScroller({
            type:"hover",
            axis:"x" //change to "y" for vertical scroller
          });
          $("#thumb-slider-04").mThumbnailScroller({
            type:"hover",
            axis:"x" //change to "y" for vertical scroller
          });
      });
  });
  // end   thumb-slider in index.html

};