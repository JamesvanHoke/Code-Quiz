//////////////////////Variables//////////////////////

//Timer
var timerEl = document.querySelector("#timer");
var timeRemaining = 60;

//Start Page
var startBtn = document.querySelector("#start-btn");
var startPage = document.getElementById("start-page");

//Question Page
var questionPage = document.getElementById("question-page");
var questionText = document.getElementById("question-text");
var questionAnswer = document.getElementById("answers");
var questionResult = document.getElementById("answersResult");

//Score Page
var scorePage = document.getElementById("score-page");

//Question Array + Answers
var questions = [
  {
    questiontext: "Which planet is the hottest in the solar system?",
    answers: ["Venus", "Mercury", "Uranus", "Saturn"],
    correctanswer: "Venus",
  },
  {
    questiontext: "Which body part can you find the femur?",
    answers: ["Arm", "Head", "Spine", "Leg"],
    correctanswer: "Leg",
  },
  {
    questiontext: "Which natural disaster is measured with a Richter scale?",
    answers: ["Hurricanes", "Earthquakes", "Tornados", "Wildfires"],
    correctanswer: "Earthquakes",
  },
  {
    questiontext: "Which element is said to keep bones strong?",
    answers: ["Iron", "Sodium", "Zinc", "Calcium"],
    correctanswer: "Calcium",
  },
];

//Variable to track question index
var currentQuestion = 0;

//////////////////////<<Event Listeners//////////////////////

// Listen for a click event on start button, triggers game start function
startBtn.addEventListener("click", gameStart);
//Listen for a click event on the question page
questionPage.addEventListener("click", userAnswer);

//////////////////////<<Functions//////////////////////

//Game start function
function gameStart() {
  //Hides start-page element
  startPage.style.display = "none";
  //show question-page element
  questionPage.style.display = "block";
  //starts countdown timer function
  setTime();
  //starts question generation function
  questionGeneration();
}

//Timer countdown function
function setTime() {
  var Countdown = setInterval(function () {
    //Updates timer with currewnt time remaining
    timerEl.textContent = "Time: " + timeRemaining;
    // when timer reaches 0 logic
    if (timeRemaining === 0) {
      //Stops timer
      clearInterval(Countdown);
      //Stops game, shifts to scores page
      gameOver();
    }
    //Reduces time remaining by 1
    timeRemaining--;
  }, 1000);
}

function questionGeneration() {


  //variable to pull the question text into. Index is handled by current question
  var Question = questions[currentQuestion];

  //Sets the main text area to value of questiontext within the objection of Question
  questionText.textContent = Question.questiontext;

  //Wipes previous buttons. 
  questionPage.children.innerHTML="";

  //for loop to generate a button/text for each possible answer
  for (var i = 0; i < Question.answers.length; i++) {
    // Creates an answertext variable to store answer text
    var answerText = Question.answers[i];

    //creates a button
    var btn = document.createElement("button");

    //adds the possible answers to the button
    btn.textContent = answerText;

    //adds classes to the buttons to style them
    btn.classList.add("btn", "btn-primary");

    //appends the button w/ text to the question page
    questionPage.appendChild(btn);
  }
}

function userAnswer(e) {
  // Makes sure that the click is on a button since the listener is attached to the div
  if (!e.target.matches("button")) {
    return;
  }

  //Pulls the text content of the users choice as a string and stores it as a variable
  var UsersChoice = e.target.textContent;

  //Pulls current question.
  var Question = questions[currentQuestion];

  //Pulls answer text from above variable
  var Correct = Question.correctanswer;


  // Check if user was correct
  if (UsersChoice === Correct) {
    // if correct: advance to next question
    currentQuestion++;
    //Load next question
    questionGeneration();
  } else {
    //If answer is incorrect, subtract 10 seconds from remaining time
    timeRemaining -= 10;
  }
}

function gameOver() {
  //hides question page
  questionPage.style.display = "none";
  //shows score page
  scorePage.style.display = "inline-block";

  //Check for time < 1, if  less than one, give game over
  //if > 1 display score
  //ask them to record score
}

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
