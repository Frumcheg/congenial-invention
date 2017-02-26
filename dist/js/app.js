;(function(global){
  var $ = global.$;

  var init = function(selector, cb) {
    var $el = $(selector);
    if ($el.length > 0) {
      typeof cb === 'function' && cb($el);
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

      init('.js-main-calendar', function($el) {
        var triggers = $el.find('.js-main-calendar-trigger');
        var firstMonth = 'is-show-first';
        var secondMonth = 'is-show-second';

        $(triggers).each(function(index, trigger) {
          $(trigger).click(function() {
            $el.toggleClass(firstMonth);
            $el.toggleClass(secondMonth);
          });
        });
      });

      init('.js-show-card-slider', function($el) {
        var counter = init('.js-show-card-counter', function($el) {
          $el.setValue = function(value) {
            $el.text(value);
          }
        });

        $el.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
          counter.setValue(nextSlide + 1);
        });

        $el.slick({
          fade: true,
          prevArrow: '.js-show-arrow-prev',
          nextArrow: '.js-show-arrow-next',
          swipe: false,
          respondTo: 'slider',
          draggable: false
        });
      });

      init('.js-calendar-info-slider', function($el) {
        var counter = init('.js-calendar-info-slider-counter', function($el) {
          $el.setValue = function(value) {
            $el.text(value);
          }
        });

        $el.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
          counter.setValue(nextSlide + 1);
        });

        $el.slick({
          fade: true,
          prevArrow: '.js-calendar-info-slider-prev',
          nextArrow: '.js-calendar-info-slider-next',
          swipe: false,
          respondTo: 'slider',
          draggable: false
        });
      });

      init('.js-calendar-info-slider2', function($el) {
        var counter = init('.js-calendar-info-slider-counter2', function($el) {
          $el.setValue = function(value) {
            $el.text(value);
          }
        });

        $el.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
          counter.setValue(nextSlide + 1);
        });

        $el.slick({
          fade: true,
          prevArrow: '.js-calendar-info-slider-prev2',
          nextArrow: '.js-calendar-info-slider-next2',
          swipe: false,
          respondTo: 'slider',
          draggable: false
        });
      });

      init('.js-friend-slider', function($el) {
        $el.slick({
          arrows: false,
          fade: true,
          dots: true,
          appendDots: '.js-slider-dots-friends',
          dotsClass: 'c-slider-dots'
        });
      });

      init('.js-filter-collapsed', function($el) {
        var $content = init('.c-filter__content');
        $el.on( 'click', function() {
          $content.toggleClass('c-filter__content_visible', $el.is(':checked'));
        });
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

      init('.js-all-perfomances-slider', function($el) {
        $el.slick({
          prevArrow: '.js-arrow-perf-prev',
          nextArrow: '.js-arrow-perf-next',
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false
        });
      });

      init('.js-perfomnace-schedule-slider', function($el) {
        $el.slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          dotsClass: 'c-slider-dots c-slider-dots_center',
          prevArrow: '.js-arrow-prev-2',
          nextArrow: '.js-arrow-next-2'
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
            $(item).click(function(e, i) {
              $slider.slick('slickGoTo',  $(item).data('slide'));
            });
          });
        });
      });
    })
  }
})(window);
