var mobileMenuVisible = false;
  $(".hamburger-button").click(function () {
      if (mobileMenuVisible) {
        $('.mobile-menu').fadeOut('fast');
        mobileMenuVisible = false;
        return;
      }
      $('.mobile-menu').fadeIn('fast');
      mobileMenuVisible = true;
  });
  $('.mobile-menu').click(function() {
    $(this).css({'display':'none'});
    mobileMenuVisible = false;
  });
