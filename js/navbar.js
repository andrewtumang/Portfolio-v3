/*eslint-env browser*/

function openCloseMenu() {
  var bars = document.getElementsByClassName("bar");
  for (var i = 0; i < bars.length; i++) {
    var itemClasses = bars.item(i).classList;
    if(itemClasses.contains("open")) {
      itemClasses.remove("open");
    }
    else {
      itemClasses.add("open");
    }
  }
  
  var linksClasses = document.getElementById("links").classList;
  if(linksClasses.contains("open")) {
    linksClasses.remove("open");
    var links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      var itemClasses = links.item(i).classList;
      itemClasses.remove("open");
      itemClasses.add("closed");
    }
  }
  else {
    linksClasses.add("open");
    setTimeout(function() {
      var links = document.getElementsByClassName("link");
      for (var i = 0; i < links.length; i++) {
        var itemClasses = links.item(i).classList;
        itemClasses.add("open");
        itemClasses.remove("closed");
      }
    }, 100)
  }
  
  var overlayClasses = document.getElementById("overlay").classList;
  if(overlayClasses.contains("open")) {
    overlayClasses.remove("open");
  }
  else {
    overlayClasses.add("open");
  }
  
}

var navlinks = document.getElementsByClassName("link");

for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", openCloseMenu, false);
}

document.getElementById("hamburger").addEventListener("click", openCloseMenu, false);

