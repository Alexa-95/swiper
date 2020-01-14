var space = 50;

var swiperV = new Swiper('.swiper-container-v', {
  direction: 'vertical',
  spaceBetween: space,
  mousewheel: {
    sensitivity: 1,
    releaseOnEdges: true,
    eventsTarged: '.swiper-container-v'
  },
  pagination: {
    el: '.swiper-pagination-v',
    clickable: true,
    // dynamicBullets: true,
  },
  history: {
    replaceState: true,
    key: ''
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-v',
    prevEl: '.swiper-button-prev-v',
  },
}
);
var swiperH = new Swiper('.swiper-container-h', {
  spaceBetween: space,
  pagination: {
    el: '.swiper-pagination-h',
    clickable: true,
    // dynamicBullets: true,
  },
  history: {
    replaceState: true,
    key: ''
  },
  keyboard: {
    enabled: true    
  },
  navigation: {
    nextEl: '.swiper-button-prev-h',
    prevEl: '.swiper-button-prev-h',
  },
});

//FUNCJA DLA STAYSTYK

function stats() {
  var $arId = document.querySelector('[data-swiper]').getAttribute('data-swiper'),
  $item = document.location.pathname.split("/").pop();
  console.log("STATS: "+"gallery", "scroll "+ $arId + " / " + $item);
}

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
    windowHeight = window.innerHeight;

  var initSlug = document.location.pathname.split("/").pop();

  window.onpopstate = function() {
  if (!initSlug || document.location.pathname == "") {
    wrapper.style.transform = "translate3d(0, 0, 0)";
    window.history.pushState("start","start",dataHistory[0].dataset.history);
  }

  else {
    for (var i = 0; i < dataHistory.length; i++) {
      if (dataHistory[i].getAttribute('data-history') === initSlug) {        
        current = document.querySelectorAll('[data-history]')[i];
        dataHistory[i].classList.add('swiper-slide-active');
      }
    }
    
    for (var i = 0; i < dataId.length; i++) {
      
      if (isDescendant(dataId[i], current) == true) {

        //TODO
        var marginBulletHorizontal = 8;

        // console.log(isDescendant(dataId[i], current))
        wrapper.style.transform = "translate3d(" + (-i * windowWidth - (i * space)) + "px, 0, 0)";
        
        var sV = document.querySelectorAll('.swiper-pagination-v');
        var sH = document.querySelector('.swiper-pagination-h');
        var bulletActive = document.querySelector(".swiper-pagination-bullet-active");
        var bulletsVertical = document.querySelectorAll(".swiper-pagination-v .swiper-pagination-bullet");
        var containersVertical = document.querySelectorAll(".swiper-container-v");
        var containersHorizontal = document.querySelectorAll(".swiper-container-h");
        var spier_slide = document.querySelectorAll(".swiper-container-v .swiper-slide");
        
        for(var i = 0; i<sV.length; i++){
          sV[i].style.transform = "translateX(" + ((bulletActive.clientWidth * i) + (marginBulletHorizontal * i)) +"px)";      
        }        
      }
    }
  }
  }

window.onload = function (e) {
  var dataHistory = document.querySelectorAll('[data-history]'),
    
    dataId = document.querySelector('[data-id]'),
    navigation = document.querySelectorAll('.navigation'),
    wrapper = document.querySelectorAll('.swiper-wrapper')[0],
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

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


        var navigation_row = document.querySelectorAll(".navigation_row");
        var navigarion_div = document.navigation.appendChild("navigation_row[i]")
        console.log(navigarion_div)
      }
      for(var j = 0; j < spier_slide.length; j++){
        var navigation_btn_div = document.createElement("div").classList.add("navigation_btn");
        // document.navigation_row[i].appendChild(navigation_btn)[j];
      }
    }
  }

  // NAWIGACJA

  for(var i = 0; i<swiperV.length; i++){
    var swiperV_rows = document.querySelectorAll(".swiper-container-v .swiper-wrapper")[i].children;
    // console.log(swiperV_rows);
    var navigation_div = document.querySelector("#navigation");
    var navigation_row_div = document.createElement("div");
    navigation_row_div.classList.add("navigation_row");
    navigation_div.appendChild(navigation_row_div)[i];


    for(var j = 0; j<swiperV_rows.length; j++){
      var navigation_btn_div = document.createElement("div");
      navigation_btn_div.classList.add("navigation_btn");
      navigation_row_div.appendChild(navigation_btn_div);  

      navigation_btn_div.addEventListener("click", function(){
        stats();
        if(document.querySelector(".navigation_btn.__active")){
          document.querySelector(".navigation_btn.__active").classList.remove("__active");
        }
        this.classList.add("__active");
        
        for(var c = 0; c < document.querySelectorAll(".swiper-container-v .swiper-wrapper").length; c++){
          if (isDescendant(document.querySelectorAll("#navigation .navigation_row")[c], document.querySelector(".navigation_btn.__active")) == true) {
            var translateX = (-c * windowWidth - (c * space));
            
            for(var g = 0; g <document.querySelectorAll("#navigation .navigation_row")[c].childElementCount; g++){
              if(document.querySelectorAll("#navigation .navigation_row")[c].children[g] == this){
                
                var translateY = (-g * windowHeight - (g * space));
              }
              // history.pushState("state", "title", "url");
              document.querySelectorAll(".swiper-container-v .swiper-wrapper")[c].style.cssText = "transform: translate3d( 0, "+ translateY + "px, 0); transition-property: transform; transition-duration: 1s;";
            }
          }
        }
        wrapper.style.transform = "translate3d(" + translateX + "px, 0, 0)";
      });
    }
  }
};

document.querySelectorAll('.swiper-wrapper')[0].addEventListener("transitionend", function (event) {
  stats();

  for(var i = 0; i<swiperV.length; i++){
    swiperV[i].mousewheel.enable();
  }
});