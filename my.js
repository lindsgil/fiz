'use strict';

var isShown = true;
$('.hamburger-button').click(function() {
  if (isShown) {
    $('.mobile-list').fadeOut('fast');
    isShown = false;
  } else {
    $('.mobile-list').fadeIn('fast');
  }
});

$('.team-logo').click(function() {
  $('.team-logo').hide();
})
