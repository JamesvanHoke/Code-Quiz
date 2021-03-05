# Code-Quiz

## Goal

The goal of this project is to create a quiz using Javascript that dynamically generates and edits HTML elements and CSS styles based on DOM Traversal and events


## Project Criteria

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz
WHEN I click the start button
[x] a timer starts and I am presented with a question
WHEN I answer a question
[x] I am presented with another question
WHEN I answer a question incorrectly
[x] time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
[x] the game is over
WHEN the game is over
[x] I can save my initials and score

## Preview

![Imgur](https://imgur.com/2hmw6bn.gif)


## Approach

To complete the project, a web interface was created with HTML. This interface was formatted using Bootstrap and custom CSS. The interface is powered by JavaScript. JavaScript was used to hide and display content based on user events, start/stop a timer, manage quiz questions and answers answers, display a score based on the users remaining time, and generate a local file that stores the users initials and score.

Upon load the user is presented with an opening start screen that describes the quiz, displays the time available to take the quiz, and a start button.

When the player presses start they are presented a screen containing a question and answer buttons and the timer will begin to count down from the starting time toward zero. If the timer reaches zero before the player completes the quiz, the quiz will end automatically. When the player answers they are presented with text below the question notifying them if they are in/correct and then they move to the next question. 

Once all questions have been answered the player is shown a score page that displays their final score. Here the user will be able to create a record of their score with their initials or restart the quiz if they wish to try for a better score.

Once the player submits enter, they are taken to the high score screen where their score is displayed.

## Technology

CSS Framework: Bootstrap <br>
Bootstrap Depends on JQuery and JavaScript

## Links
https://github.com/JamesvanHoke/Code-Quiz <br>
https://jamesvanhoke.github.io/Code-Quiz/
