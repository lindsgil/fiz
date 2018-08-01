'use strict';

var menuOpen = false;

function openNav() {
  if (!menuOpen) {
    document.getElementById("menu").style.height = "100%";
    menuOpen = true;
  }
  else {
    document.getElementById("menu").style.height = 0;
    menuOpen = false;
  }
}

var text = "Buy Tickets Now!";

for(var i in text) {
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") );
  } else {
    $(".wavetext").append( $("<span>").text(text[i]) );
  }
}
