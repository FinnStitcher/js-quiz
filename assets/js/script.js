var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "answer3",
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "answer3",
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "answer4",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "answer3",
    },
    {
        question: "A very useful tool used during development and debugging for printing content is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "answer4",
    },
];
var currentQuestionIndex = 0;

var timerEl = document.querySelector("#timer");
var timeRemaining = 75;
var timerIntervalID;
// initializing an empty variable to hold the ID returned by the interval

var quizHeaderEl = document.querySelector("#question");
var quizAnswersEl = document.querySelector("#answers");


function startGame() {
    timerEl.textContent = `Time: ${timeRemaining}`;
    // timerIntervalID = setInterval(countdown, 1000);
    // will run countdown() every second
    // technically i didn't need to move it into a different function but this is like, cleaner
    // temporarily commented out because it bugs me having it in the background, remember to reenable
    
    displayQuestion(currentQuestionIndex);
};

function endGame() {
    console.log("Dummy text! End condition met.");
};

function countdown() {
    timeRemaining--;
    timerEl.textContent = `Time: ${timeRemaining}`;

    if (timeRemaining <= 0) {
        clearInterval(timerIntervalID);
        endGame();
    };
};
// decrement time and display the new value
// need to decrement first, or it'll hold 3 for too long and won't display 0
// then check if we've reached zero and stop the clock if so

function displayQuestion(index) {
    var currentQuestion = questions[index];
    var currentAnswers = currentQuestion.answers;
    quizHeaderEl.textContent = currentQuestion.question;

    for (var i = 0; i < currentAnswers.length; i++) {
        var answer = document.createElement("li");
        answer.textContent = currentAnswers[i];
        answer.setAttribute("id", `answer${i + 1}`);
        
        quizAnswersEl.appendChild(answer);
    };
    // for each object in the questions array:
        // print the question and answers to the page
            // make sure each element has the correct classes
            // make sure each answer as an ID, a1 through a4
        // apply a click event listener to each button/list item/whatever
            // when clicked, read the ID of the event.target
            // compare it to the correct property of the current object
                // if they match, return "Correct!"
                // if they don't, return "Wrong!"
                    // i'll figure out the display stuff later
        // then that iteration ends and we go to the next question
}


startGame();