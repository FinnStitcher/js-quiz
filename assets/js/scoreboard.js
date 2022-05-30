var scoreboardEl = document.querySelector("#scoreboard");
var savedScores = localStorage.getItem("quizscores");
var scores;

function loadData() {
    if (!savedScores) {
        scoreboardEl.innerHTML = "<p>There are no past scores to display.</p>";
        return false;
    };
    
    scores = JSON.parse(savedScores);

    for (var i = 0; i < scores.length; i++) {
        var currentScore = scores[i];
        var listItemEl = document.createElement("li");
        listItemEl.textContent = `${currentScore.initials} - ${currentScore.score}`;

        scoreboardEl.appendChild(listItemEl);
    };
};

loadData();