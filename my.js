var mobileMenuVisible = false;
  $('button').on('click', function() {
      if (mobileMenuVisible) {
        $('.hamburger-menu-list').fadeOut('fast');
        mobileMenuVisible = false;
        return;
      }
      $('.hamburger-menu-list').fadeIn('fast');
      mobileMenuVisible = true;
  });
  $('.hamburger-menu-list').on('click', function() {
    $(this).css({'display':'none'});
    mobileMenuVisible = false;
  });
