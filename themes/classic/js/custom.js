/*wow animation*/
$(document).ready(function () {
  new WOW().init();
});
/*wow animation end*/


/* headar start -----------------------------------------
---------------------------------------------------------*/
$(function () {
  var header = $(".navbarscroll");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
      header.removeClass("scrollHeader").addClass("fixedHeader");
    } else {
      header.removeClass("fixedHeader").addClass("scrollHeader");
    }
  });
});

var swiper = new Swiper(".epicSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoPlay: true,
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  }
});