var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correct: "a3",
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parentheses",
        answer4: "square brackets",
        correct: "a3",
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correct: "a4",
    },
    {
        question:
            "String values must be enclosed within _____ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parentheses",
        correct: "a3",
    },
    {
        question:
            "A very useful tool used during development and debugging for printing content is:",
        answer1: "JavaScript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console.log",
        correct: "a4",
    },
];

var timerEl = document.querySelector("#timer");
var timeRemaining = 3;
var timerIntervalID;
// initializing an empty variable to hold the ID returned by the interval


function startGame() {
    timerEl.textContent = `Time: ${timeRemaining}`;
    timerIntervalID = setInterval(countdown, 1000);
    // will run countdown() every second
    // technically i didn't need to move it into a different function but this is like, cleaner
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


startGame();