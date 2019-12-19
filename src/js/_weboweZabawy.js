var swiperH = new Swiper('.swiper-container-h', {
  spaceBetween: 50,
  // loop: true,
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
  mousewheelControl: true,
  pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
  },
  history: {
    key:  '',
  }
});


var vertical = document.querySelectorAll(".swiper-container-v"),
    horizontal = document.querySelectorAll(".swiper-container-h")
    slideh = document.querySelectorAll('.swiper-slide')[0];
    slidev = document.querySelectorAll('.swiper-slide')[1];

    // console.log(slide)

if(vertical){
  slidev = slideh;
}