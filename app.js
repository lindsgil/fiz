var mobileMenuVisible = false;
$(document).on('touchstart click', '.hamburger-button', function(e) {
  console.log("IS THIS WORKING AT ALL");
  e.stopPropagation();
  if (mobileMenuVisible) {
    $('.hamburger-menu-list').fadeOut('fast');
    mobileMenuVisible = false;
    return;
  }
  $('.hamburger-menu-list').fadeIn('fast');
  mobileMenuVisible = true;
});
$('.hamburger-menu-list').on('touchstart click', function() {
  $(this).css({'display':'none'});
  mobileMenuVisible = false;
});
