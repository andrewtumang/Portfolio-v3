/*eslint-env browser*/

window.onload = function() {
  setTimeout(function() {
    document.getElementById("jumbo-mockup").classList.add("slide");
    document.getElementById("jumbo-text").classList.add("slide");
  }, 500);
  setTimeout(function() {
    document.getElementById("arrow-link").classList.add("arrow-animate");
  }, 2000);
}

window.scroll({behavior: 'smooth'});