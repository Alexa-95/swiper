// (function () {

//     if (!document.getElementsByClassName('swiper-slide').length) return;

//     var customOffset;

//     if (window.innerWidth < 769) {
//          customOffset = 99;
//         } else {
//           customOffset = 100;
//         }
//         var animationTime = 800,

//     //-------------------------------------------------------

//         initSlug = document.location.pathname.split("/").pop(),

//         activeSlug = initSlug,

//         $sections = $('.swiper-slide'),

//         /* Przewijanie do sekcji slug jeżeli w URL jest ustawiony jakiś slug */
//         scrollOnStart = function () {

//             $('html,body').animate({
//                 scrollTop: $('#' + initSlug).offset().top - customOffset
//             }, animationTime, 'easeOutExpo');

//             var art_title = $(String(initSlug)).parent().data('id');
//             sendStats('progress', 'start', initSlug);

//             changeActiveSlug(initSlug);


//         },

//         changeActiveSlug = function(slug) {

//             activeSlug = slug;

//             console.log("SLUG!!!  " + slug)

//             // if ( getActiveSlugIndex()==0 ) {
//             //     slug = "/";
//             //     $('.header--nav ul').attr('class', 'order_'+ 1);// == 0;
//             // }

//             $('.header--nav [data-slug]').removeClass("__active");
//             $('.header--nav [data-slug='+activeSlug+']').addClass("__active");


//             $('.header--nav ul').attr('class', 'order_'+ (getActiveSlugIndex() + 1));
//             history.pushState({
//                 id: slug
//             }, $(this).attr('title'), slug );

//         },

//         /* Sprawdza index sluga, domyślnie aktualnego */
//         getActiveSlugIndex = function(slug){
//             if (!slug) slug = activeSlug;
//             return $('.header--nav [data-slug='+slug+']').parent().parent().index();
//         },

//         /* Sprawdzanie czy user zescrollował do sekcji. Jeżeli tak to ustawia pozycję w nawigacji */
//         sectionScrollCheck = function(){

//             sectionScrollCheckTS = setTimeout(sectionScrollCheck, 200);

//             var $W = $(window),
//                 topScroll = $W.scrollTop(),
//                 wHeight = $W.height();

//             //wymuszenie strony głównej
//             if (topScroll <= customOffset) {
//                 changeActiveSlug($sections.eq(0).attr('id'));
//                 return;
//             }

//             for (var i=0; i<$sections.length; i++) {
//                 var $section = $sections.eq(i),
//                     sectionOffset = $section.offset().top,
//                     sectionHeight = $section.height();

//                 //console.info(i, topScroll, sectionOffset, sectionOffset + sectionHeight)

//                 if (activeSlug != $section.attr('id') &&
//                     topScroll > sectionOffset - customOffset - 10 &&
//                     topScroll < sectionOffset + sectionHeight - customOffset - 10 ) {

//                         changeActiveSlug($section.attr('id'));
//                         break;
//                 }

//             }
//         },
//         sectionScrollCheckTS = null,



//         /* Inicjalizacja metod dla obsługi nawigacji - clików i sprawdzanie scrolla */
//         initNavigation = function () {

//             sectionScrollCheckTS = setTimeout(sectionScrollCheck, animationTime + 25 );

//             $('.header--nav [data-slug]').on('click', function (e) {

//                 if (sectionScrollCheckTS) clearTimeout(sectionScrollCheckTS);

//                 e.preventDefault();
//                 var $this = $(this),
//                     slug = $(this).data('slug');
//                 if (!slug.length) slug = "/";


//                 changeActiveSlug(slug);

//                 $('html,body').animate({
//                     scrollTop: getActiveSlugIndex()>0?$('#' + slug).offset().top - customOffset : 0
//                 }, animationTime, 'easeInOutExpo');
//                 sectionScrollCheckTS = setTimeout(sectionScrollCheck, animationTime + 25);
//             });
//         };

//     if (initSlug.length > 1 ) {
//         setTimeout(scrollOnStart, 600);
//     }

//     initNavigation();

// })();

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



  //   for (var i = 0; i < active.length; i++) {
  //    var bounding = active[i].getBoundingClientRect();
  //     // console.log(bounding)      
  //     if (
  //       bounding.top >= 0 &&
  //       bounding.left >= 0 &&
  //       bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
  //       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  //     ) {
  //       var link = swiperV[i].history.paths.value
  //       $(active[i]).addClass("__js_onScreen");  
  //       window.history.pushState(link, link, link);
  //       console.log(link);
  //     } else {
  //       $(this).removeClass("__js_onScreen");
  //     }
  //   }
  };
  