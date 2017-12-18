$(document).ready(function(){
  var mobileMenuVisible = false;
    $('.hamburger-button').click(function () {
        if (mobileMenuVisible) {
          $('.mobile-menu').css({'display':'none'});
          mobileMenuVisible = false;
          return;
        }
        $('.mobile-menu').css({'display':'block'});
        mobileMenuVisible = true;
    });
    $('.mobile-menu').click(function() {
      $(this).css({'display':'none'});
      mobileMenuVisible = false;
    });
});
