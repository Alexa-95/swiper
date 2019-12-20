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
    replaceState: true,
    key: ''
  }
}
);
var swiperH = new Swiper('.swiper-container-h', {
  spaceBetween: 50,
  // loop: true,
  pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
  },
  history: {
    replaceState: true,
    key: ''
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// //Script
// //Check hash on page load
// var hash=document.location.hash.split('#')[1];
// //Your Swiper
// var swiper = $('.swiper-container').swiper({
//   //Update browser hash
//   document.location.hash = $(swiper.activeSlide).data('url')
// });
// //Move swiper on page load if hash exists
// if (hash.length>0) {
//   swiper.swipeTo($('.swiper-slide[data-url="'+hash+'"]').index());
// }

window.onload = function () {

var vertical = document.querySelectorAll(".swiper-container-v"),
    horizontal = document.querySelectorAll(".swiper-container-h"),
    dataHistory = document.querySelectorAll('[data-history]'),
    active = document.querySelectorAll('.swiper-slide-active'),
    allSlides = document.querySelectorAll('.swiper-slide'),
    onScreen = document.querySelectorAll('.__js_onScreen');
    
      var initSlug = document.location.pathname.split("/").pop();
      console.log(initSlug)

      for(var i=0; i < dataHistory.length; i++){
        current = $(document).find("[data-history='" + initSlug + "']")
        current.addClass('swiper-slide-active')
        
        // if(dataHistory[i].dataset.history == initSlug){
        //   console.log(dataHistory[i].dataset.history)
        // }
      }
      console.log(current)



    // for (var i = 0; i < active.length; i++) {
    //  var bounding = active[i].getBoundingClientRect();
    //   // console.log(bounding)      
    //   if (
    //     bounding.top >= 0 &&
    //     bounding.left >= 0 &&
    //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    //   ) {
    //     var link = swiperV[i].history.paths.value
    //     $(active[i]).addClass("__js_onScreen");  
    //     window.history.pushState(link, link, link);
    //     console.log(link);
    //   } else {
    //     $(this).removeClass("__js_onScreen");
    //   }
    // }
  };
  