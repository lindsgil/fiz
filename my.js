function showNav() {
  let elem = document.getElementById('mobile-menu');
  console.log('elem', elem);
  if(elem.style.display !== 'none') {
    elem.style.display = 'none';
  } else {
    elem.style.display = 'block';
  }
}
