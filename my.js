'use strict';

var isShown = false;
$('.hamburger-button').click(function() {
  console.log('isShown', isShown);
  if (!isShown) {
    $('.mobile-menu').fadeIn('fast');
    isShown = true;
  } else {
    $('.mobile-menu').fadeOut('fast');
    isShown = false;
  }
});

var isShown = false;
$('.hamburger-button-press').click(function() {
  console.log('isShown', isShown);
  if (!isShown) {
    $('.mobile-menu-press').fadeIn('fast');
    isShown = true;
  } else {
    $('.mobile-menu-press').fadeOut('fast');
    isShown = false;
  }
});
