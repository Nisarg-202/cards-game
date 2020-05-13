
              // TITLE ANIMATION

$("h3").animate({
  right: "1000"
}, 1);

            // TITLE ANIMATION

            // IMAGE ANIMATION

$("h3").animate({
  left: "0"
}, 1000);

$("#first").animate({
  right: "1000"
}, 1);

$("#first").animate({
  left: "0"
}, 1000);

$("#second").animate({
  bottom: "1000"
}, 1);

$("#second").animate({
  top: "0"
}, 1000);

$("#third").animate({
  left: "1000"
}, 1);

$("#third").animate({
  left: "0"
}, 1000);

$("#fourth").animate({
  top: "1000"
}, 1);

$("#fourth").animate({
  top: "0"
}, 1000);

                  // IMAGE ANIMATION

var count = 0;

var random1 = Math.floor(Math.random() * 4) + 1;

                  // CARDS QUESTION ANIMATION

if(random1 === 1) {
  $("h1").text("Find 8 in this cards");
  $("h1").animate({
    left: "1000"
  }, 1);

  $("h1").animate({
    left: "0"
  }, 1000);
}

if(random1 === 2) {
  $("h1").text("Find A in this cards");
  $("h1").animate({
    left: "1000"
  }, 1);

  $("h1").animate({
    left: "0"
  }, 1000);
}

if(random1 === 3) {
  $("h1").text("Find J in this cards");
  $("h1").animate({
    left: "1000"
  }, 1);

  $("h1").animate({
    left: "0"
  }, 1000);
}

if(random1 === 4) {
  $("h1").text("Find K in this cards");
  $("h1").animate({
    left: "1000"
  }, 1);

  $("h1").animate({
    left: "0"
  }, 1000);
}

                // CARDS QUESTION ANIMATION

                // RANDOM TEXT PORTION

$("#first").click(function(event) {
  count++;
  if (count > 1) {
    $("h4").text("you already clicked !");
  } else {
    var random = Math.floor(Math.random() * 4) + 1;
    if(random === random1) {
        $("h1").text("you won 🎂 !");
    } else {
        $("h1").text("you loss 👎");
    }
      $("h2").text("Refresh Me !");
      $("#first").attr('src', 'images/page' + random + '.png');
  }
});

$("#second").click(function(event) {
  count++;
  if (count > 1) {
      $("h4").text("you already clicked !");
  } else {
    var random = Math.floor(Math.random() * 4) + 1;
    if(random === random1) {
        $("h1").text("you won 🎂!");
    } else {
        $("h1").text("you loss 👎");
    }
      $("h2").text("Refresh Me !");
      $("#second").attr('src', 'images/page' + random + '.png');
  }

});

$("#third").click(function(event) {
  count++;
  if (count > 1) {
        $("h4").text("you already clicked !");
  } else {
    var random = Math.floor(Math.random() * 4) + 1;
    if(random === random1) {
        $("h1").text("you won 🎂 !");
    } else {
        $("h1").text("you loss 👎");
    }
      $("h2").text("Refresh Me !");
      $("#third").attr('src', 'images/page' + random + '.png');
  }
});

$("#fourth").click(function(event) {
  count++;
  if (count > 1) {
    $("h4").text("you already clicked !");
  } else {
    var random = Math.floor(Math.random() * 4) + 1;
    if(random === random1) {
        $("h1").text("you won 🎂 !");
    } else {
        $("h1").text("you loss 👎");
    }
      $("h2").text("Refresh Me !");
      $("#fourth").attr('src', 'images/page' + random + '.png');
  }

});

            // RANDOM TEXT PORTION
