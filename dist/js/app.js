;(function(global){
  var $ = global.$;

  var init = function(selector, cb) {
    var $el = $(selector);
    if ($el.length > 0) {
      cb($el);
      return $el;
    }
  }

  if (typeof $ !== 'undefined') {
    $(function () {
      init('.js-carousel', function($el) {
        $el.slick({
          centerMode: true,
          variableWidth: true,
          dots: true,
          prevArrow: '.js-arrow-prev',
          nextArrow: '.js-arrow-next',
          appendDots: '.js-slider-dots',
          dotsClass: 'c-slider-dots',
          asNavFor: '.js-carousel-info'
        });
      });

      init('.js-carousel-info', function($el) {
        $el.slick({
          fade: true,
          asNavFor: '.js-carousel',
          arrows: false
        });
      });

      var counter = init('.js-show-card-counter', function($el) {
        $el.setValue = function(value) {
          $el.text(value);
        }
      });

      init('.js-show-card-slider', function($el) {
        $el.on('afterChange', function(slick, data) {
          counter.setValue(data.currentSlide + 1);
        });

        $el.slick({
          fade: true,
          prevArrow: '.js-show-arrow-prev',
          nextArrow: '.js-show-arrow-next',
          swipe: false,
          respondTo: 'slider',
          draggable: false
        });
      })
    });
  }
})(window);