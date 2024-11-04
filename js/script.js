document.addEventListener('DOMContentLoaded', function () {
	
  // Banner START
  const swiperBanner = new Swiper('.swiper-banner', {
    speed: 700,
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      enabled: true,
      el: '.swiper-banner .swiper-pagination',
      clickable: true
    },
    navigation: {
      enabled: true,
      nextEl: '.swiper-banner .swiper-button-next',
      prevEl: '.swiper-banner .swiper-button-prev',
      clickable: true
    }
  });
  // Banner END

  // Reviews START
  const swiperReviews = new Swiper('.swiper-reviews', {
    speed: 1000,
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      enabled: true,
      el: '.swiper-reviews .swiper-pagination',
      clickable: true
    },
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    // effect: 'cube',
    // effect: 'cards',
    // effect: 'creative',
    // effect: 'flip',
    effect: 'cube',
    cubeEffect: {
      shadow: false
    }
  });
  // Reviews END
  
  // Gallery START
  // masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 20
  });

  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

  // magnificPopup
  $('.grid-item a').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true, 
      duration: 300, 
      easing: 'ease-in-out', 
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    },
    gallery:{
      enabled:true
    }
  });

    // Tabs
    $('.gallery-tabs a').on('click', function(e) {
      e.preventDefault();
      var thHref = $(this).attr('href');
      $('.grid').addClass('hidden');
      $(thHref).removeClass('hidden');
      $('.gallery-tabs a').removeClass('is-active')
      $(this).addClass('is-active');
      var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20
      });
    });
  // Gallery END

}, false);