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
    slideh = document.querySelectorAll('.swiper-slide')[0],
    slidev = document.querySelectorAll('.swiper-slide')[1],
    dataHistory = document.querySelectorAll('[data-history]');
    // window.history.pushState('wpisz-cokolwiek-1', 'Title', 'wpisz-cokolwiek-1');
    
    // for(var i=0; i < dataHistory.length; i++){
    //   dataArray.push(
    //     dataHistory[i].getAttribute("data-history")
    //   )
    //   window.history.pushState('wpisz-cokolwiek-4', 'Title', 'wpisz-cokolwiek-4');
    // }
    
    
    var active = document.querySelectorAll('.swiper-slide-active')
    if(document.location.pathname.split("/").pop() == ""){
      window.history.pushState('wpisz-cokolwiek-1', 'Title', 'wpisz-cokolwiek-1');
    }
    else{
      //TO DO
    }




    window.onpopstate = function (event) {
    }
    console.log(active)