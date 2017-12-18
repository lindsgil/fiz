var mobileMenuVisible = false;
  $('.hamburger-button').on('touchstart', function() {
      if (mobileMenuVisible) {
        $('nav.hamburger-menu-list').fadeOut('fast');
        mobileMenuVisible = false;
        return;
      }
      $('nav.hamburger-menu-list').fadeIn('fast');
      mobileMenuVisible = true;
  });
  $('nav.hamburger-menu-list').on('touchstart', function() {
    $(this).css({'display':'none'});
    mobileMenuVisible = false;
  });
