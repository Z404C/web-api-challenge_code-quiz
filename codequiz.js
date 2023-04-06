//GOAL: Create timed quiz that stores high scores.

//variables
var questions;
var timer; 
var isCorrect;
var highscores;
var timerCount;

//create variables for elements 
var startButton = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var endScreenEl = document.querySelector("#end-screen");
var quizAreaEl = document.querySelector(".quiz-area");
var highscoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");






//functions





function clock(){
    
    timer=setInterval(function(){
        timerCount--;
        timerEl.textContent=timerCount;
        if(timerCount>=0){
            if(isCorrect && timerCount> 0){
                clearInterval(timer);
            }
        }

        if (timerCount===0){
            clearInterval(timer);
        }

    },1000)
};

//When start button clicked, timer starts, and a question shows
startButton.addEventListener("click", startGame);


function startGame(){
    timerCount=60
    clock();
    

}


//get id "questions" element to insert questions into it.







//When a question is answered, a different question shows 

//if A question is answered wrong, then time is subtracted from timer

//When all questions are answered OR when the time reaches 0, show game over screen and score.

//With game over screen, an option to write intitals should show and submit score should show.  questions: 'Here is a question',
        questions ={
            questionsEl: "what is 1+7?",
            answer:[
                {text:"8", isCorrect:true},
                {text:"5", isCorrect:false},
                {text:"3", isCorrect:false},
                {text:"2", isCorrect:false}

            ]
        }