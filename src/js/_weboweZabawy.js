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
  },
  keyboard: {
    enabled: true,
  },
}
);
var swiperH = new Swiper('.swiper-container-h', {
  spaceBetween: space,
  pagination: {
    el: '.swiper-pagination-h',
    clickable: true,
  },
  history: {
    replaceState: true,
    key: ''
  },
  keyboard: {
    enabled: true    
  }
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

  var dataHistory = document.querySelectorAll('[data-history]'),
    dataId = document.querySelectorAll('[data-id]'),
    wrapper = document.querySelectorAll('.swiper-wrapper')[0],
    windowWidth = window.innerWidth;

  var initSlug = document.location.pathname.split("/").pop();
  console.log("qweqweqwe "+initSlug);

  if (!initSlug || initSlug == "") {
    wrapper.style.transform = "translate3d(0, 0, 0)";
    window.history.pushState("","",dataHistory[0].dataset.history);
  }

  else {
    for (var i = 0; i < dataHistory.length; i++) {
      if (dataHistory[i].getAttribute('data-history') === initSlug) {        
        current = document.querySelectorAll('[data-history]')[i];
        dataHistory[i].classList.add('swiper-slide-active');
      }
    }
    
    for (var i = 0; i < dataId.length; i++) {
      console.log(-i * windowWidth)

      if (isDescendant(dataId[i], current) == true) {
        // console.log(isDescendant(dataId[i], current))
        wrapper.style.transform = "translate3d(" + (-i * windowWidth - (i * space)) + "px, 0, 0)";

        var sV = document.querySelectorAll('.swiper-pagination-v');
        var sH = document.querySelector('.swiper-pagination-h');
        // var bullet = document.querySelector('.swiper-pagination-bullet').clientHeight();
        console.log(sV[i].clientHeight);
        sH.style.bottom = sV[i].clientHeight + 10 + "px";
        
      }
    }
  }

window.onload = function (e) {
  var dataHistory = document.querySelectorAll('[data-history]'),
    dataId = document.querySelectorAll('[data-id]'),
    wrapper = document.querySelectorAll('.swiper-wrapper')[0],
    windowWidth = window.innerWidth;

  var initSlug = document.location.pathname.split("/").pop();

  if (initSlug) {

    for (var i = 0; i < dataHistory.length; i++) {
      if (dataHistory[i].getAttribute('data-history') === initSlug) {

        current = document.querySelectorAll('[data-history]')[i];
        dataHistory[i].classList.add('swiper-slide-active');
      }
    }
    
    for (var i = 0; i < dataId.length; i++) {
      if (isDescendant(dataId[i], current) == true) {
        // console.log(isDescendant(dataId[i], current))
        wrapper.style.transform = "translate3d(" + (-i * windowWidth - (i * space)) + "px, 0, 0)";
      }
    }
  }
};

document.querySelectorAll('.swiper-wrapper')[0].addEventListener("transitionend", function (event) {
  var $arId = document.querySelector('[data-swiper]').getAttribute('data-swiper'),
      $item = document.location.pathname.split("/").pop();
  console.log("STATS: "+"gallery", "scroll "+ $arId + " / " + $item);
});

