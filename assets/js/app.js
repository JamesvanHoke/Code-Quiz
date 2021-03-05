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
var scorePageText = document.getElementById("score-page-text");
var retryBtn = document.getElementById("retry-btn");
var submitBtn = document.getElementById("submit-btn");

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

//High Score Page

var HiScorePage = document.getElementById("highscore-page");
var UserInitials = document.getElementById("userName")

//////////////////////Event Listeners//////////////////////

// Listen for a click event on start button, triggers game start function
startBtn.addEventListener("click", gameStart);
//Listen for a click event on the question page
questionPage.addEventListener("click", userAnswer);
//Listen for click on the retry button at end of quiz
retryBtn.addEventListener("click", retry);
//Listen for click on the submit button at end of quiz
submitBtn.addEventListener("click", submit);

//////////////////////<<Functions//////////////////////

//Game start function
function gameStart() {
  //Interval prompt for timer
  setTime = setInterval(Countdown, 1000);
  //Hides start-page element
  startPage.style.display = "none";
  //show question-page element
  questionPage.style.display = "block";
  //starts question generation function
  questionGeneration();
}

//Timer countdown function
  function Countdown() {
    if (timeRemaining >= 1) {
      //Reduces time remaining by 1
      timeRemaining--;
    }
    //Updates timer with currewnt time remaining
    timerEl.textContent = "Time: " + timeRemaining;
    // when timer reaches 0 logic
    if (timeRemaining === 0) {
      //Stops game, shifts to scores page
      gameOver();
    }
}

function questionGeneration() {
  //variable to pull the question text into. Index is handled by current question
  var Question = questions[currentQuestion];

  //Wipes previous buttons.
  questionAnswer.innerHTML = "";

  //Sets the main text area to value of questiontext within the objection of Question
  questionText.textContent = Question.questiontext;

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
    questionAnswer.appendChild(btn);
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
  if (UsersChoice !== Correct) {
    //If answer is incorrect, subtract 10 seconds from remaining time
    timeRemaining -= 10;
    questionResult.textContent = "Your answer was: Incorrect!";
  } else {
    questionResult.textContent = "Your answer was: Correct!";
  }
  // advance to next question
  currentQuestion++;

  //Exit to score page if all questions are answered
  if (currentQuestion === questions.length) {
    gameOver();
  } else {
    //Load next question
    questionGeneration();
  }
}

function gameOver() {
  //hides question page
  questionPage.style.display = "none";
  //hides timer
  timerEl.style.display = "none";
  //shows score page
  scorePage.style.display = "block";
  //if timer hit 0
  if (timeRemaining < 1) {
    scorePageText.textContent = "Your score is 0. Better luck next time.";
  } else {
    clearInterval(setTime)
    //if they finished all questions
    scorePageText.textContent =
      "Your score is " + timeRemaining + ". Good Job!";
  }
}

//Reloads the window
function retry() {
  //Used instead of window.location.reload since that wasn't working
  window.location.href = window.location.href;
}

//submits user initials + score to local storage
function submit() {
  // if (userName === "") {
  //   Create function to alert that a blank value is not accepted

  // } else 
  {
    var user = {
      UserInitials: UserInitials.value(),
      score: timeRemaining
    };

      scorePage.style.display = "none";
      HiScorePage.style.display = "block";
      localStorage.setItem("HiScore", user);
    // renderHighScore();
  }
}
//
