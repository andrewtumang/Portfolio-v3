function setUrl() {
  var qstring = $(".search-bar1").val();
  if(qstring != "") {
    window.location.href = "search.html?q=" + qstring + "&location=" + loc;
  }
}

$('.form-control').keypress(function(e) {
  var qstring = $(".search-bar1").val();
  var loc = $(".search-bar2").val();
  if(e.keyCode == 13 & qstring != "") {
   window.location.href = "search.html?q=" + qstring + "&location=" + loc;
  }
});


var cycle = 0;
window.setInterval(function() {
  $(".images").animate({left:"-=100%"});
  
  var h = $(".text2").height().toString();
  if(cycle == 0) {
    $("#music").css("top","0"); $("#learn").css("top", h);
    $("#music").animate({
      top: "-="+h,
      opacity: 0
    })
    $("#learn").animate({
      top: "-="+h,
      opacity: 1
    })
  }
  else if(cycle == 1) {
    $("#learn").css("top","0"); $("#gallery").css("top", h);
    $("#learn").animate({
      top: "-="+h,
      opacity: 0
    })
    $("#gallery").animate({
      top: "-="+h,
      opacity: 1
    })
  }
  else if(cycle == 2) {
    $("#gallery").css("top","0"); $("#music").css("top", h);
    $("#gallery").animate({
      top: "-="+h,
      opacity: 0
    })
    $("#music").animate({
      top: "-="+h,
      opacity: 1
    })
  }
  
  cycle += 1;
  if(cycle >= 3) {
    cycle = 0;
    $(".images").animate({left:"0%"}, 0);
  }
}, 5000);



const eventCard = ({id, title, date}) => `
<a href="event.html"><div class="card event-card">
  <img class="card-img-top event-img" src="images/events/${id}.png" alt="Card image cap">
  <div class="card-body event-info">
    <p class="card-text event-text-date">${date}</p>
    <p class="card-text event-text">${title}</p>
  </div>
</div></a>
`;

$.getJSON( "ajax/events.json", function( data ) {
  $.each(data, function(i, val) {
    if(i <= 4) {
      $(".events1").append(eventCard({
        id: val.id,
        title: val.title,
        date: val.date
      }));
    }
    else {
      $(".events2").append(eventCard({
        id: val.id,
        title: val.title,
        date: val.date
      }));
    }
  });
});



if($(window).width() < 600) {
  console.log("test");
  $(".search-bar1").attr("placeholder", "Search for an event");
}