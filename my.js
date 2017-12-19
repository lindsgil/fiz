function showNav() {
  let elem = document.getElementById('hamburger-menu-list');
  if(elem.style.display !== 'none') {
    elem.style.display = 'none';
  } else {
    elem.style.display = 'block';
  }
}
