/*eslint-env browser*/

window.onload = function() {
  setTimeout(function() {
    document.getElementById("portrait").classList.add("slide");
  }, 0);
  setTimeout(function() {
    document.getElementById("name").classList.add("slide");
  }, 400);
  setTimeout(function() {
    document.getElementById("age").classList.add("slide");
  }, 600);
  setTimeout(function() {
    document.getElementById("location").classList.add("slide");
  }, 800);
  setTimeout(function() {
    document.getElementById("job").classList.add("slide");
  }, 1000);
  setTimeout(function() {
    var preloads = document.getElementsByClassName("preload");
    for(var i = 0; i < preloads.length; i++) {
      preloads[i].classList.add("slide");
    }
  }, 1500);
}