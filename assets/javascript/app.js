

// what's needed
//var for number of correct answers and number of total questions (to compare score)
//onclick functions that compare userguess with correct answer 
//timer -- done
//questions -- done  (I think, nope... questions are on the HTML page because they're written in the HTML doc, not because of my attempt at jQuery)
//create onclick events that track the user selection between true/false
//if they guess correct, correctAns++
//after all three questions have been answered or if timer == 0, alert with correctAns/numberQuest


//START GAME MESSAGE
function start(){
	alert("To start playing the SQUIRREL TRUE OR FALSE GAME, PRESS OK.")
};

start();



//TIMER
var startNumber = 3 //change to 60 to give user 1 minute to answer questions

    function run(){
      counter = setInterval(increment, 1000);
    }
    function increment(){
      startNumber--
      document.getElementById('clock').innerHTML = ('<h2>' + startNumber+ " " + "Seconds Left" + '</h2>'); //updates to HTML
      if (startNumber === 0){
        stop();
        alert("Time's Up!")
      }
    }

        function stop(){
      clearInterval(counter);
    }

    run();



//================= VARIABLES ==============================
var numberQuest = 3 //number of questions
var correctAns = 0 //number correct
var userGuess = "" //what the user is guessing on the page
var guesses =[];


//========= MY ATTEMPT AT GETTING js/jQuery to write the questions (they exist in html doc)====================

$("#vrai").value = 0; // set the value of TRUE to 0 to match id's of 0 inside the object with questions
$("#faux").value = 1; // does the same thing for false



//object holding the questions and the answers. the use of the object makes sense, making things interact with it doesn't.
var questions = [
{
   question: "The squirrel invented the airplane.",
 
   answer: [{
       id: 0,
       ans: "True"
   },{
       id: 1,
       ans: "False"
   }],
   correct: 0,

},

   {question: "The first known flying squirrel was a man named Amelia Airheart.",
   answer: [{
       id: 0,
       ans: "True"
   },{
       id: 1,
       ans: "False"
   }],
   correct: 1,
},

   {question: "Squirrels began to fly to intercept nuts before they reached the ground, attempting to avoid needing to use the 5 second rule.",

   answer: [{
       id: 0,
       ans: "True"
   },{
       id: 1,
       ans: "False"
   }],
   correct: 0,
}
]

//===== record clicks ? ========



//=====jQuery to get questions to write using js

function ask(){
$('#question1').append(questions[0].question);
$('#question2').append(questions[1].question);
$('#question3').append(questions[2].question);
}





//======== FUNCTIONS =============================

//????????????????




//=========== CALLS =============================

ask()

