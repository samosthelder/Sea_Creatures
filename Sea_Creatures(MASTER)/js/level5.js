$(document).ready(function () {
    let score = 0;
    let clearTimer;
    
  
    const lettArr = ["O", "C", "T", "O", "P", "U", "S",];
  
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
  
      $("#Cdrp").droppable({
        accept: "#C",
        over: Cdrop,
     
  
        drop: function (e, ui) {
          $(this).append(ui.draggable);
          score++;
          $("#score").text(score);
          chkScore();
        }, //END DROP FUNCTION
      }); //END DROPPABLE
  
      $("#Tdrp").droppable({
        accept: "#T",
        over: Tdrop,
        
  
        drop: function (e, ui) {
          $(this).append(ui.draggable);
          score++;
          $("#score").text(score);
          chkScore();
        }, //END DROP FUNCTION
      }); //END DROPPABLE
  
      $("#Odrp2").droppable({
        accept: "#O",
        over: Odrop2,
        
  
        drop: function (e, ui) {
          $(this).append(ui.draggable);
          score++;
          $("#score").text(score);
          chkScore();
         
        } //END DROP FUNCTION
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
    } //END START GAME
  
    function Ddrop(event, ui) {
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Ddrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
     
  
     
    
    } //END handleOutEvent
  
    function Odrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Odrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
    
    function Cdrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Cdrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
  
    
    function Tdrop(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Tdrp").css({ border: "green 5px solid"});
     
      
      }).mouseout(function () {
          audio.stop();
      })
    }
  
    
    function Odrop2(event, ui) {
  
      let audio = document.getElementById('audio-element');
      $('#dropzone').on('drop', function() {
          audio.play();
  
          $("#Odrp2").css({ border: "green 5px solid"});
     
      
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
      function Udrop(event, ui) {
  
        let audio = document.getElementById('audio-element');
        $('#dropzone').on('drop', function() {
            audio.play();
    
            $("#Udrp").css({ border: "green 5px solid"});
       
        
        }).mouseout(function () {
            audio.stop();
        })
      }

      function Sdrop(event, ui) {
  
        let audio = document.getElementById('audio-element');
        $('#dropzone').on('drop', function() {
            audio.play();
    
            $("#Sdrp").css({ border: "green 5px solid"});
       
        
        }).mouseout(function () {
            audio.stop();
        })
      }
  
    function chkScore() {
      if (score === 7) {
        $("#fact_container").fadeIn();
        $("#fact_container").text(
          "Awesome! Did you Know an Octopus Has 9 Brains!"
        );
        $("#fact_container").css({ color: "green", "font-size": "20px bold" });

        $(".comp_msg").fadeIn(5000);
        $(".comp_msg").text("OCTOPUS - COMPLETE");
        $(".comp_msg").css({ color: "green", "font-size": "50px" });
        $(".comp_msg").fadeOut(1000);
        stopTimer();


        $(".time_out").fadeIn(10000);
        $(".time_out").text("WELL DONE YOU COMPLETED THE GAME!");
        $(".time_out").css({ color: "green", "font-size": "50px" });
        $(".time_out").fadeOut(5000);
      }
     
   
    }
  
    function startTimer() {
      let counter = 15;
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
  