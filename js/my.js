$(document).ready(function(){
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
});
//
// $(document).ready(function(){
//   $('.mobile-menu').hide();
//   var mobileMenuVisible = false;
//     $('.hamburger-button').click(function () {
//       if (!mobileMenuVisible) {
//         $('.mobile-menu').fadeIn('fast');
//         mobileMenuVisible = true;
//       }
//     $('.mobile-menu').click(function() {
//       $(this).css({'display':'none'});
//     });
// });
//
// $('.hamburger-menu-list').hide();
// $('.hamburger-button').click(function() {
//   $('div.panel-content').fadeOut('slow');
//   $('.hamburger-menu-list').fadeIn('fast', function() {
//     // $('.hamburger-menu-list').hide();
//   });
// });
