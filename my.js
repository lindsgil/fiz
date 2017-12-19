// function showNav() {
//   let elem = document.getElementById('mobile-menu');
//   console.log('elem', elem);
//   if(elem.style.display !== 'none') {
//     elem.style.display = 'none';
//   } else {
//     elem.style.display = 'block';
//   }
// }

var isShown = true;
$('.hamburger-button').click(function() {
  if (isShown) {
    $('#mobile-menu').fadeOut('fast');
    isShown = false;
  } else {
    $('#mobile-menu').fadeIn('fast');
  }
});
