'use strict';

var isShown = true;
$('.hamburger-button').click(function() {
  if (isShown) {
    $('#mobile-menu').fadeOut('fast');
    isShown = false;
  } else {
    $('#mobile-menu').fadeIn('fast');
  }
});

$('.team-logo').click(function() {
  $('.team-logo').hide();
})
