const btnHTML = `
  <a href="../artpass.html#FinalPrototype">
    <h class="back-btn">Back to Case Study&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></h>
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

    background-color: #151721;
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