var space = 50;

var swiperV = new Swiper('.swiper-container-v', {
  direction: 'vertical',
  spaceBetween: space,
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
  spaceBetween: space,
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

function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
      if (node == parent) {
          return true;
      }
      node = node.parentNode;
  }
  return false;
}

window.onload = function () {

  var vertical = document.querySelectorAll(".swiper-container-v"),
      horizontal = document.querySelectorAll(".swiper-container-h"),
      dataHistory = document.querySelectorAll('[data-history]'),
      dataId = document.querySelectorAll('[data-id]'),
      active = document.querySelectorAll('.swiper-slide-active'),
      allSlides = document.querySelectorAll('.swiper-slide'),
      onScreen = document.querySelectorAll('.__js_onScreen'),
      wrapper = document.querySelectorAll('.swiper-wrapper')[0],
      windowWidth = window.innerWidth;
    
      var initSlug = document.location.pathname.split("/").pop();
      console.log(initSlug);

      if(!initSlug){
        console.log("EMPTY");
      }
      else{
        
        for(var i=0; i < dataHistory.length; i++){
          current = $(document).find("[data-history='" + initSlug + "']")
          current.addClass('swiper-slide-active')
          
          if(dataHistory[i].dataset.history == initSlug){
            console.log(dataHistory[i].dataset.history)
          }
        }
          for(var i=0; i < dataId.length; i++){
            if(current.closest(dataId[i]).length > 0){
              console.log(i)
              wrapper.style.transform = "translate3d(" + (-i*windowWidth - (i*space)) + "px, 0, 0)";
            }
            console.log((current.closest(dataId[i])))
            // if(isDescendant(dataId[i], current) === true){
            //   console.log(windowWidth)
            // }

          }
        
      }
};


