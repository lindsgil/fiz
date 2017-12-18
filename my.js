var mobileMenuVisible = false;
  $('.hamburger-button').on('click', function() {
      if (mobileMenuVisible) {
        $('nav.hamburger-menu-list').fadeOut('fast');
        mobileMenuVisible = false;
        return;
      }
      $('nav.hamburger-menu-list').fadeIn('fast');
      mobileMenuVisible = true;
  });
  $('nav.hamburger-menu-list').on('click', function() {
    $(this).css({'display':'none'});
    mobileMenuVisible = false;
  });
