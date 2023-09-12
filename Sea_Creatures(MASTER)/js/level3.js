$(document).ready(function () {
    let score = 0;
 
    let clearTimer;
    
  
    const lettArr = ["W", "H", "A", "L", "E"];
  
    //SHUFFLES LETTERS IN ARRAY
    lettArr.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  
    //returns an HTML collection (--like an array--)
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
  
      $("#Wdrp").droppable({
        accept: "#W",
        over: Wdrop,
        
  
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
  
      $("#Edrp").droppable({
        accept: "#E",
        over: Edrop,
        
  
        drop: function (e, ui) {
          $(this).append(ui.draggable);
          score++;
          $("#score").text(score);
          chkScore();
         
        }, //END DROP FUNCTION
      }); //END DROPPABLE
    } //END START GAME
  
    function Wdrop(event, ui) {
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Wdrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
     
  
     
    
    } //END handleOutEvent
  
    function Hdrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Hdrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
    
    function Adrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Adrp").css({ border: "green 5px solid"});
     
      
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
  
    
    function Edrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Edrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
  

    function chkScore() {
      if (score === 5) {
        $("#fact_container").fadeIn();
        $("#fact_container").text(
          "Excellent! Did You Know Whales Actually Breathe Air!"
        );
        $("#fact_container").css({ color: "green", "font-size": "20px bold" });
        
        $(".time_out").fadeIn();
        $(".time_out").text("WHALE - COMPLETE");
        $(".time_out").css({ color: "green", "font-size": "50px" });
        $(".time_out").fadeOut(10000);
        stopTimer();
      }

   
    }
  
    function startTimer() {
      let counter = 20;
      clearTimer = setInterval(function () {
        counter--;
        if (counter > 0 || counter === 0) {
          let countdown = document.getElementById("timer");
          countdown.innerHTML = " " + counter;
        }
  
        if (counter < 0) {
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
  