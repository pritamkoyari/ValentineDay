$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px"
          },
          "slow"
        );
      })$(document).ready(function () {
  var audio = new Audio('audio.mp3'); 
  
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px"
        },
        "slow"
      );
      audio.play(); 
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0
        },
        "slow"
      );
      audio.pause();
    });
});

      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: 0
          },
          "slow"
        );
      });
  });
  
