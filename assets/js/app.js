// Variables

//Timer
var timerEl = document.querySelector("#timer");
var timeRemaining = 60;

//Start Page
var startBtn = document.querySelector("#start-btn")
var startPage = document.getElementById("start-page")

//Question Array + Answers
var questions = [
  {
    questiontext: "Which planet is the hottest in the solar system?",
    answers:["Venus", "Mercury", "Uranus", "Saturn"],
    correctanswer: "Venus"
  },
  {
    questiontext: "Which body part can you find the femur?",
    answers:["Arm", "Head", "Spine", "Leg"],
    correctanswer: "Leg"
  },
  {
    questiontext: "Which natural disaster is measured with a Richter scale?",
    answers:["Hurricanes", "Earthquakes", "Tornados", "Wildfires"],
    correctanswer: "Earthquakes"
  },
  {
    questiontext: "Which element is said to keep bones strong?",
    answers:["Iron", "Sodium", "Zinc", "Calcium"],
    correctanswer: "Calcium"
  }
]

//Timer countdown function
function setTime() {
  var Countdown = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = "Time: " + timeRemaining;

    // when timer reaches 0 logic
    if (timeRemaining === 0) {
      //Stops timer
      clearInterval(Countdown);
      //Stops game, shifts to scores page
      gameOver()
    }
  }, 1000);
}

// Listen for a click event on start button
startBtn.addEventListener("click", function(){
    //Hides start-page element
    startPage.style.display = "none"
    //show question-page element
    document.getElementById("question-page").style.display = "inline-block"
    //Runs countdown timer
})

startBtn.addEventListener("click", setTime())
















// LOGIC - JS
// click the start button
//     timer starts
//     I am presented with a question

// answer a question
//     presented with another question

// if question incorrect
//     time subtracted

// if no more questions or the timer reaches 0
//     game over
//         ask for user initials
//         save initial and score

// HTML area
// Start Page
//     start button
//     Title with explanation
// Question page
//     timer area
//     Question area
//     Answer area - 4 answer buttons
//         a)
//         b)
//         c)
//         d)
// Score Page

// PROGRAM LOGIC
// start button
//     a timer starts
//     presented with question1 text
//     presented with question1 answer buttons

// click on a question answer button
//     if that was last question
//         game is over
//             diplay game over
//             calculate userScore
//             ask user for initials
//                 save user intials and userScore together
//     if answer incorrect
//         time is subtracted from the clock
//     present next question
//         question[i+1] text
//         question[i+1] answer buttons

// SECTIONS
// Main page
//     Timer area ✅
//     Question area
//     Link to view High Scores
// High Scores Page
