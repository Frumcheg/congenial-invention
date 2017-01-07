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

      init('.js-friend-slider', function($el) {
        $el.slick({
          arrows: false,
          fade: true,
          dots: true,
          appendDots: '.js-slider-dots-friends',
          dotsClass: 'c-slider-dots',
        });
      });

      init('.js-filter-collapsed', function($el) {
        $el.on( "click", function() {
          init('.c-filter__content', function ($el1){
            if ($el.is(':checked')){
              $el1.addClass("c-filter__content_visible");
            } else {
              $el1.removeClass("c-filter__content_visible");
            }
          })
        } );
      });

      init('#map', function($el) {
        DG.then(function() {
          var map = DG.map($el.prop('id'), {
            center: [56.8430, 60.6408],
            zoom: 16,
            scrollWheelZoom: false
          });

          DG.marker([56.8430, 60.6408]).addTo(map);
        })
      });

      init('.js-days-slider', function($el) {
        $el.slick({
          prevArrow: '.js-arrow-days-prev',
          nextArrow: '.js-arrow-days-next',
          slidesToShow: 25,
          slidesToScroll: 5,
          infinite: false
        });
      });

      init('.js-all-actors-slider', function($el) {
        $el.slick({
          prevArrow: '.js-arrow-actors-prev',
          nextArrow: '.js-arrow-actors-next',
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false
        });
      });

      init('.js-actor-slider', function($slider) {
        $slider.slick({
          centerMode: true,
          variableWidth: true,
          prevArrow: '.js-arrow-prev',
          nextArrow: '.js-arrow-next',
          appendDots: '.js-slider-dots'
        });

        init('.js-actor-slider-nav', function($el) {
          $el.find('[data-slide]').each(function(index, item) {
            $(item).click(function(i) {
              $slider.slick('slickGoTo',  $(item).data('slide'));
            });
          });
        });
      });
    })
  }
})(window);
