$(document).ready(function () {
    let score = 0;

    let clearTimer;
   
  
    const lettArr = ["D", "O", "L", "P", "H", "I", "N",];
  
    //SHUFFLES LETTERS IN ARRAY
    lettArr.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  

    const letters = document.getElementsByClassName("ltrs");
  
    //loop over returned elemtents
  
    for (let i = 0; i < letters.length; i++) {
      //set the letters on the page to displau the letters
      //in the array each time its shuffled
  
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
  
      $("#Odrp").droppable({
        accept: "#O",
        over: Odrop,
       
  
        drop: function (e, ui) {
          $(this).append(ui.draggable);
          score++;
          $("#score").text(score);
          chkScore();
        }, //END DROP FUNCTION
      }); //END DROPPABLE
  
      $("#Ldrp").droppable({
        accept: "#L",
        over: Ldrop,
     
  
        drop: function (e, ui) {
          $(this).append(ui.draggable);
          score++;
          $("#score").text(score);
          chkScore();
        }, //END DROP FUNCTION
      }); //END DROPPABLE
  
      $("#Pdrp").droppable({
        accept: "#P",
        over: Pdrop,
        
  
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

      $("#Ndrp").droppable({
        accept: "#N",
        over: Ndrop,
        
  
        drop: function (e, ui) {
          $(this).append(ui.draggable);
          score++;
          $("#score").text(score);
          chkScore();
        }, //END DROP FUNCTION
      }); //END DROPPABLE
   
  
    function Ddrop(event, ui) {
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Ddrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
     
  
     
    
    } //END Ddrop
  
    function Odrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Odrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
    
    function Ldrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Ldrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
  
    
    function Pdrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Pdrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
  
    
    function Hdrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Hdrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }

    function Idrop(event, ui) {
  
        let audio = document.getElementById('audio-element');
        $('#dropzone').on('drop', function() {
            audio.play();
    
            $("#Idrp").css({ border: "green 5px solid"});
       
        
        }).mouseout(function () {
            audio.stop();
        })
      }
      function Ndrop(event, ui) {
  
        let audio = document.getElementById('audio-element');
        $('#dropzone').on('drop', function() {
            audio.play();
    
            $("#Ndrp").css({ border: "green 5px solid"});
       
        
        }).mouseout(function () {
            audio.stop();
        })
      }

    } //END START GAME
  
    function chkScore() {
      if (score === 7) {
        $("#fact_container").fadeIn();
        $("#fact_container").text(
          "Amazing! Did you know Dolphins Have Two Stomachs!"
        );
        $("#fact_container").css({ color: "green", "font-size": "20px bold" });
        $(".time_out").fadeIn();
        $(".time_out").text("DOLPHIN - COMPLETE");
        $(".time_out").css({ color: "green", "font-size": "50px" });
        $(".time_out").fadeOut(10000);
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
  
        if (counter < 0 || counter === 0) {
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
  