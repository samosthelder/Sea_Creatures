//Global Variabl
$(document).ready(function () {
let clearTimer;
let score = 0;

//letter array for SHARK
const lettArr = ["S", "H", "A", "R", "K"];

//Shuffle letter array above
lettArr.sort(function (a, b) {
  return 0.5 - Math.random();
});

//retrieves the html collection named ltrs
const letters = document.getElementsByClassName("ltrs");

//for loop to loop through the letters variable

for (let i = 0; i < letters.length; i++) {
  //set the letters on the page to display the letters
  //in the array each time its shuffled

  letters[i].innerText = lettArr[i];

  $(letters[i]).attr("id", lettArr[i]);
} //End for loop



//on click event to ignite the game
$("#btn_start").on("click", startGame);

function startGame() {
  $(this).hide();
  startTimer();

  //selecting the ltrs in the html to be draggable
  $(".ltrs").draggable({
    revert: "invalid",
    helper: "clone",
    containment: "#gameborder",
  }); //END DRAGGABLE

  $("#Sdrp").droppable({
    accept: "#S",
    over: Sdrop,

    drop: function (e, ui) {
      $(this).append(ui.draggable);

      score++;
      $("#score").text(score);
      chkScore();
    }, //END DROP FUNCTION
  }); //END DROPPABLE

  $("#Hdrp").droppable({
    accept: "#H",
    over: Hdrop,

    drop: function (e, ui) {
      $(this).append(ui.draggable);
      score++;
      $("#score").text(score);
      chkScore();
    }, //END DROP FUNCTION
  }); //END DROPPABLE

  $("#Adrp").droppable({
    accept: "#A",
    over: Adrop,

    drop: function (e, ui) {
      $(this).append(ui.draggable);
      score++;
      $("#score").text(score);
      chkScore();
    }, //END DROP FUNCTION
  }); //END DROPPABLE

  $("#Rdrp").droppable({
    accept: "#R",
    over: Rdrop,

    drop: function (e, ui) {
      $(this).append(ui.draggable);
      score++;
      $("#score").text(score);
      chkScore();
    }, //END DROP FUNCTION
  }); //END DROPPABLE

  $("#Kdrp").droppable({
    accept: "#K",
    over: Kdrop,

    drop: function (e, ui) {
      $(this).append(ui.draggable);
      score++;
      $("#score").text(score);
      chkScore();
    }, //END DROP FUNCTION
  }); //END DROPPABLE
} //END START GAME

function Sdrop(event, ui) {
  //plays audio when correct word is placed
  let audio = document.getElementById("audio-element");
  $("#dropzone")
    .on("drop", function () {
      audio.play();

      //turns border green when correct word is placed
      $("#Sdrp").css({ border: "green 5px solid" });
    })
    .mouseout(function () {
      audio.stop();
    });
} //END handleOutEvent

function Hdrop(event, ui) {
  //plays audio when correct word is placed
  let audio = document.getElementById("audio-element");
  $("#dropzone")
    .on("drop", function () {
      audio.play();

      //turns border green when correct word is placed
      $("#Hdrp").css({ border: "green 5px solid" });
    })
    .mouseout(function () {
      audio.stop();
    });
}

function Adrop(event, ui) {
  let audio = document.getElementById("audio-element");
  $("#dropzone")
    .on("drop", function () {
      audio.play();

      //turns border green when correct word is placed
      $("#Adrp").css({ border: "green 5px solid" });
    })
    .mouseout(function () {
      audio.stop();
    });
}

function Rdrop(event, ui) {
  let audio = document.getElementById("audio-element");
  $("#dropzone")
    .on("drop", function () {
      audio.play();

      //turns border green when correct word is placed
      $("#Rdrp").css({ border: "green 5px solid" });
    })
    .mouseout(function () {
      audio.stop();
    });
}

function Kdrop(event, ui) {
  let audio = document.getElementById("audio-element");
  $("#dropzone")
    .on("drop", function () {
      audio.play();

      //turns border green when correct word is placed
      $("#Kdrp").css({ border: "green 5px solid" });
    })
    .mouseout(function () {
      audio.stop();
    });
}

function chkScore() {
  if (score === 5) {
    $("#fact_container").fadeIn();
    $("#fact_container").text(
      "Amazing! Did You Know Sharks Are 85% Muscle!"
    );
    $("#fact_container").css({ color: "green", "font-size": "20px bold" });

    $(".comp_msg").fadeIn(5000);
    $(".comp_msg").text("SHARK - COMPLETE");
    $(".comp_msg").css({ color: "green", "font-size": "50px" });
    $(".comp_msg").fadeOut(1000);

    stopTimer();


  
  }
 

}

function startTimer() {
  let counter = 15;
  clearTimer = setInterval(function () {
    counter--;
    if (counter >= 0) {
      let countdown = document.getElementById("timer");
      countdown.innerHTML = " " + counter;
    }

    if (counter === 0 || counter < 1) {
      clearInterval(clearTimer);
      $(".ltrs")
        .draggable({
          disabled: true,
        })
        .css("opacity", 0.5);
        $("#fact_container").fadeIn();
        $("#fact_container").text(
          "Almost Try Again!"
        );
        $("#fact_container").css({ color: "red", "font-size": "20px bold" });
      $(".time_out").fadeIn();
      $(".time_out").text("Out of Time!");
      $(".time_out").css({ color: "red", "font-size": "50px" });
      $(".time_out").fadeOut(10000);
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(clearTimer);
}

//reset
$("#shuffle_btn").on("click", function () {
  location.reload();
});


}); //END DOC READY FUNCTION