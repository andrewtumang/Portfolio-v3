$(".fullscreen").click(function(){
  if ($(window).width() < 1000) {
    window.open($(this).attr("src"));
    return;
  }
  
  
  $(".fullscreen-img").attr("src", $(this).attr("src"));   
  $(".fullscreen-container").removeClass("hidden");
});

$(".close-fullscreen").click(function(){
  $(".fullscreen-img").attr("src", ""); 
  $(".fullscreen-container").addClass("hidden");
});






const btnHTML = `
  <a href="index.html#Work">
    <h class="back-btn">Back to Work Page&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></h>
  </a>
`

const btnCSS = `
<style type="text/css">
  .back-btn {
    position: fixed;
    right: 2%;
    bottom: 3%;

    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0px 3px 5px rgb(0,0,0,0.2);

    background-color: var(--gradient1);
    color: white;
  }

  @media screen and (max-width: 500px) {
    .back-btn {
      right: 4%;
      bottom: 2%;
    }
  }
  
</style>
`

$("body").append(btnHTML);
$(".back-btn").append(btnCSS);