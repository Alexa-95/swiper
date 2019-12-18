//Akordeon
"use strict";

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

if (!isMobile) {
  $(document).on("mouseenter click", ".accordion__element", function() {
    $(".accordion__element").removeClass("accordion__element--hover");
    $(this).addClass("accordion__element--hover");
  });
} else {
  $(document).on("touchend", ".accordion__element", function() {
    $(".accordion__element").removeClass("accordion__element--hover");
    $(this).addClass("accordion__element--hover");
  });
}

var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
    },
    history: {
        key: '',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 50,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
});