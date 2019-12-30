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
  hashNavigation: {
    watchState: true,
  },
}
);
var swiperH = new Swiper('.swiper-container-h', {
  spaceBetween: space,
  // loop: true,
  pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
  },
  hashNavigation: {
    watchState: true,
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

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

window.onpopstate = function () {

  var dataHistory = document.querySelectorAll('[data-hash]'),
      dataId = document.querySelectorAll('[data-id]'),
      wrapper = document.querySelectorAll('.swiper-wrapper')[0],
      windowWidth = window.innerWidth;
    
      var initSlug = document.location.hash;
      console.log(initSlug);

      if(!initSlug || initSlug === "#"){
        wrapper.style.transform = "translate3d(0, 0, 0)";
        document.location.hash = dataHistory[0].dataset.hash;
      }
      else{
        
        for(var i=0; i < dataHistory.length; i++){
          if('#' + dataHistory[i].getAttribute('data-hash') === initSlug){

            current = document.querySelectorAll('[data-hash]')[i];
            dataHistory[i].classList.add('swiper-slide-active');
          }
        }
        
        for(var i=0; i < dataId.length; i++){
          if(isDescendant(dataId[i], current) == true){
            console.log('Bla ')
              wrapper.style.transform = "translate3d(" + (-i*windowWidth - (i*space)) + "px, 0, 0)";
            }
          }
          
        }
        
    };
