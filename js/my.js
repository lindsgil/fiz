var mobileMenuVisible = false;
  $('.hamburger-button').click(function() {
      if (mobileMenuVisible) {
        $('.hamburger-menu-list').fadeOut('fast');
        mobileMenuVisible = false;
        return;
      }
      $('.hamburger-menu-list').fadeIn('fast');
      mobileMenuVisible = true;
  });
  $('.hamburger-menu-list').click(function() {
    $(this).css({'display':'none'});
    mobileMenuVisible = false;
  });
