'use strict';

var isShown = false;
$('.hamburger-button').click(function() {
  if (!isShown) {
    $('.mobile-menu').fadeIn('fast');
    isShown = true;
  } else {
    $('.mobile-menu').fadeOut('fast');
    isShown = false;
  }
});
