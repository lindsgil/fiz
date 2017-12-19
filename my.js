// function showNav() {
//   let elem = document.getElementById('mobile-menu');
//   console.log('elem', elem);
//   if(elem.style.display !== 'none') {
//     elem.style.display = 'none';
//   } else {
//     elem.style.display = 'block';
//   }
// }

$('#mobile-menu').hide();
$('.hamburger-button').click(function() {
  $('#mobile-menu').fadeIn('fast');
});
