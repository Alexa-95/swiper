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
