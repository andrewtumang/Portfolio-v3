const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get("q");
const loc = urlParams.get("location");

$(".search-bar1").val(q);
$(".search-bar2").val(loc);
$(".search-title").text(q + " in " + loc);





const resultCard = ({id, title, location, date, desc}) => `
<div class="result-card">
  <div class="result-img">
    <img src="images/events/${id}.png">
  </div>
  <div class="result-info d-flex flex-column justify-content-start">
    <h3>${title}</h3>
    <h4>&nbsp;<i class="fas fa-map-marker-alt"></i> ${location}&nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-calendar-alt"></i> ${date}</h4>
    <p>${desc} <span class="read-more">read more</span></p>
  </div>
  <div class="result-btns">
    <a href="event.html"><button class="btn more-info-btn">More Info</button></a>
    <button class="btn invite-btn">Invite</button>
  </div>
</div>
`;

$.getJSON( "ajax/events.json", function( data ) {
  $.each(data, function(i, val) {
    if(i >= 5) {
      return;
    };
    $(".results").append(resultCard({
      id: val.id,
      title: val.title,
      location: val.location,
      date: val.date,
      desc: val.desc
    }));
  });
});