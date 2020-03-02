/*eslint-env browser*/

window.onload = function() {
  setTimeout(function() {
    document.getElementById("portrait").classList.add("slide");
  }, 0);
  setTimeout(function() {
    document.getElementById("name").classList.add("slide");
  }, 300);
  setTimeout(function() {
    document.getElementById("age").classList.add("slide");
  }, 450);
  setTimeout(function() {
    document.getElementById("location").classList.add("slide");
  }, 600);
  setTimeout(function() {
    document.getElementById("job").classList.add("slide");
  }, 750);
  setTimeout(function() {
    var preloads = document.getElementsByClassName("preload");
    for(var i = 0; i < preloads.length; i++) {
      preloads[i].classList.add("slide");
    }
  }, 900);
}

