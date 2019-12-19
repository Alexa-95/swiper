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