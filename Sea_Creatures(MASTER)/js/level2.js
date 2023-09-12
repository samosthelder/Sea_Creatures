$(document).ready(function () {
  let score = 0;

  let clearTimer;

  const lettArr = ["S", "Q", "U", "I", "D"];

  lettArr.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  const letters = document.getElementsByClassName("ltrs");

  for (let i = 0; i < letters.length; i++) {
    //set the letters on the page to displau the letters

    letters[i].innerText = lettArr[i];

    $(letters[i]).attr("id", lettArr[i]);
  } //END FOR LOOP

  $("#btn_start").on("click", startGame);

  function startGame() {
    $(this).hide();
    startTimer();

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

    $("#Qdrp").droppable({
      accept: "#Q",
      over: Qdrop,

      drop: function (e, ui) {
        $(this).append(ui.draggable);
        score++;
        $("#score").text(score);
        chkScore();
      }, //END DROP FUNCTION
    }); //END DROPPABLE

    $("#Udrp").droppable({
      accept: "#U",
      over: Udrop,

      drop: function (e, ui) {
        $(this).append(ui.draggable);
        score++;
        $("#score").text(score);
        chkScore();
      }, //END DROP FUNCTION
    }); //END DROPPABLE

    $("#Idrp").droppable({
      accept: "#I",
      over: Idrop,

      drop: function (e, ui) {
        $(this).append(ui.draggable);
        score++;
        $("#score").text(score);
        chkScore();
      }, //END DROP FUNCTION
    }); //END DROPPABLE

    $("#Ddrp").droppable({
      accept: "#D",
      over: Ddrop,

      drop: function (e, ui) {
        $(this).append(ui.draggable);
        score++;
        $("#score").text(score);
        chkScore();
      }, //END DROP FUNCTION
    }); //END DROPPABLE
  } //END START GAME

  function Sdrop(event, ui) {
    let audio = document.getElementById("audio-element");
    $("#dropzone")
      .on("drop", function () {
        audio.play();

        $("#Sdrp").css({ border: "green 5px solid" });
      })
      .mouseout(function () {
        audio.stop();
      });
  } 

  function Qdrop(event, ui) {
    let audio = document.getElementById("audio-element");
    $("#dropzone")
      .on("drop", function () {
        audio.play();

        $("#Qdrp").css({ border: "green 5px solid" });
      })
      .mouseout(function () {
        audio.stop();
      });
  }

  function Udrop(event, ui) {
    let audio = document.getElementById("audio-element");
    $("#dropzone")
      .on("drop", function () {
        audio.play();

        $("#Udrp").css({ border: "green 5px solid" });
      })
      .mouseout(function () {
        audio.stop();
      });
  }

  function Idrop(event, ui) {
    let audio = document.getElementById("audio-element");
    $("#dropzone")
      .on("drop", function () {
        audio.play();

        $("#Idrp").css({ border: "green 5px solid" });
      })
      .mouseout(function () {
        audio.stop();
      });
  }

  function Ddrop(event, ui) {
    let audio = document.getElementById("audio-element");
    $("#dropzone")
      .on("drop", function () {
        audio.play();

        $("#Ddrp").css({ border: "green 5px solid" });
      })
      .mouseout(function () {
        audio.stop();
      });
  }

  function chkScore() {
    if (score === 5) {
      $("#fact_container").fadeIn();
      $("#fact_container").text("Perfect! Did You Know Squids Are Molluscs!");
      $("#fact_container").css({ color: "green", "font-size": "20px bold" });
      $(".time_out").fadeIn();
      $(".time_out").text("SQUID - COMPLETE");
      $(".time_out").css({ color: "green", "font-size": "50px" });
      $(".time_out").fadeOut(10000);

      stopTimer();
    }

  }

  function startTimer() {
    let counter = 25;
    clearTimer = setInterval(function () {
      counter--;
      if (counter > 0 || counter === 0) {
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

  $("#shuffle_btn").on("click", function () {
    location.reload();
  });

  
}); //END DOC READY FUNCTION
