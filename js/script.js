document.addEventListener('DOMContentLoaded', function () {
	
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
	

}, false);