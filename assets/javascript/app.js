

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

//========= GLOBAL VARIABLES ====================


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

}






//=========== CALLS =============================



