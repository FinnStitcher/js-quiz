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
var quizDivEl = document.querySelector("#answers-submit");
var quizAnswersEl = document.querySelector("#answers");
var quizFeedbackEl = document.querySelector("#feedback-text");


function startGame() {
    timerEl.textContent = `Time: ${timeRemaining}`;
    timerIntervalID = setInterval(countdown, 1000);
    // will run countdown() every second
    // technically i didn't need to move the countdown logic into a different function but this is like, cleaner
    
    displayQuestion();
};

function endGame() {
    clearInterval(timerIntervalID);
    
    quizHeaderEl.textContent = "All done!";
    quizDivEl.innerHTML = `<p>Your final score is ${timeRemaining}.</p>`;

    var submitFormEl = document.createElement("form");
    var submitLabelEl = document.createElement("label");
    var submitInputEl = document.createElement("input");
    var submitButtonEl = document.createElement("button");

    submitLabelEl.setAttribute("for", "initials");
    submitInputEl.setAttribute("id", "initials");
    submitInputEl.setAttribute("name", "initials");
    submitInputEl.setAttribute("type", "text");
    submitInputEl.setAttribute("maxLength", 2);
    submitInputEl.setAttribute("required", true);
    submitButtonEl.setAttribute("type", "submit");
    submitFormEl.classList = "score-submit flex-row";
    submitButtonEl.classList = "btn small-btn";

    submitLabelEl.textContent = "Enter initials:";
    submitButtonEl.textContent = "Submit";

    quizDivEl.appendChild(submitFormEl);
    submitFormEl.appendChild(submitLabelEl);
    submitFormEl.appendChild(submitInputEl);
    submitFormEl.appendChild(submitButtonEl);

    submitFormEl.addEventListener("submit", submitData);
    // might want to pull this logic into a different function, but i'll leave it for now
};

function countdown() {
    timeRemaining--;
    timerEl.textContent = `Time: ${timeRemaining}`;

    if (timeRemaining <= 0) {
        endGame();
    };
};
// decrement time and display the new value
// need to decrement first, or it'll hold 3 for too long and won't display 0
// then check if we've reached zero and stop the clock if so

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var currentAnswers = currentQuestion.answers;
    quizHeaderEl.textContent = currentQuestion.question;

    for (var i = 0; i < currentAnswers.length; i++) {
        var answer = document.querySelector(`#answer${i + 1}`);
        answer.textContent = currentAnswers[i];

        answer.addEventListener("click", isCorrect);
    };
};

function isCorrect(event) {
    var targetId = event.target.getAttribute("id");
    var currentQuestion = questions[currentQuestionIndex];

    if (targetId === currentQuestion.correct) {
        quizFeedbackEl.textContent = "Correct!";
    }
    else {
        timeRemaining -= 10;
        timerEl.textContent = `Time: ${timeRemaining}`;
        quizFeedbackEl.textContent = "Incorrect!";
    };

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    };
};

function submitData(event) {
    event.preventDefault();

    var initialsInput = document.querySelector("#initials");
    var initials = initialsInput.value;

    // checks if the value is actually letters
    // this doesn't account for special characters, not sure how to do that currently
    if (!isNaN(initials)) {
        alert("Please enter initials.");
        return false;
    };

    var score = {
        initials: initials.toUpperCase(),
        score: timeRemaining
    };
    var savedScores = localStorage.getItem("quizscores");
    if (!savedScores) {
        var scores = [];
    } else {
        var scores = JSON.parse(savedScores);
    };
    scores.push(score);
    localStorage.setItem("quizscores", JSON.stringify(scores));

    confirmSubmit();
    initialsInput.value = "";
};

function confirmSubmit() {
    var paragraph = document.querySelector("#answers-submit p");
    paragraph.insertAdjacentHTML("afterend", "<p>Your score has been recorded. <a href='./index.html'>Play again?</a></p>");
};


startGame();
endGame();