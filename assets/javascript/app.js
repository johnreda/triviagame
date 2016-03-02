// what's needed
//var for number of correct answers and number of total questions (to compare score)
//onclick functions that compare userguess with correct answer 
//timer -- done
//questions -- done  (i think)



//START GAME MESSAGE
function start(){
	alert("To start playing the SQUIRREL TRUE OR FALSE GAME, PRESS OK.")
};

start();



//TIMER
var startNumber = 61

    function run(){
      counter = setInterval(increment, 1000);
    }
    function increment(){
      startNumber--
      document.getElementById('clock').innerHTML = ('<h2>' + startNumber+ " " + "Seconds Left" + '</h2>');
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
var numberQuest = 3
var correctAns = 0 

//create onclick events that track the user selection between true/false
//if they guess correct, correctAns++
//after all three questions have been answered or if timer == 0, alert with correctAns/numberQuest

//========= MY ATTEMPT AT GETTING js/jQuery to write the questions (they exist in html doc)====================
document.getElementById("vrai").value = 0;
document.getElementById("faux").value = 1;

var questions = [
{
   question: "The squirrel invented the airplane:",
 
   answer: [{
       id: 0,
       ans: "True"
   },{
       id: 1,
       ans: "False"
   }],
   correct: 0,

},

   {question: "The first known flying squirrel was a man named Amelia Airheart:",
   answer: [{
       id: 0,
       ans: "True"
   },{
       id: 1,
       ans: "False"
   }],
   correct: 1,
},

   {question: "Squirrels began to fly to intercept nuts before they reached the ground, attempting to avoid needing to use the 5 second rule:",

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









//======== FUNCTIONS =============================

function ask(){
	$('#question1').append(questions[0]);
	$('#question2').append(questions[1]);
	$('#question3').append(questions[2]);
}
//^^^^not working





//=========== CALLS =============================
ask()



