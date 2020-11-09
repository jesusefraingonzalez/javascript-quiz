//global variables
var questions = [
    {
        question: "Commonly used data types do not include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within:",
        answers: ["quotes", "parentheses", "curly brackets", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store: ",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correct: "quotes"
    },
    // {
    //     question: "",
    //     answers: ["", "", "", ""],
    //     correct: ""
    // },
    // {
    //     question: "",
    //     answers: ["", "", "", ""],
    //     correct: ""
    // }
];
var title = document.getElementById("starting-h1");
var instructions = document.getElementById("instructions")
var startBtn = document.getElementById("start-button");
var answerDiv = document.getElementById("answer-template");
var userScore = document.getElementById("user-score");
var score = 0;
var currentQuestion = 0;
var timeLeft = 300; //time in seconds
var timer = document.getElementById("timer");
var minutes = Math.floor(timeLeft / (60));
var seconds = Math.floor(timeLeft % 60);
if (seconds < 10) timer.innerHTML = minutes + ":0" + seconds;
else timer.innerHTML = minutes + ":" + seconds;

// var questionAnswered = false;

startBtn.addEventListener("click", function (event) {
    //remove starting elements from dom once start button is clicked
    var introduction = document.getElementById("introduction");
    introduction.remove();

    //show question elements in dom
    document.getElementById("question-template").className = "card";
    //if question is answered correctly, add to score
    //once question is answered remove that question from the dom. render next question


    // timer
    var intervalId = setInterval(function () {
        minutes = Math.floor(timeLeft / (60));
        seconds = Math.floor(timeLeft % 60);
        if (seconds < 10) {
            timer.innerHTML = minutes + ":0" + seconds;
        }
        else {
            timer.innerHTML = minutes + ":" + seconds;
        }
        timeLeft--;
        console.log(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);



    questionLogic(currentQuestion);

    document.getElementById("input-initials").className = "";
    var inputBox = document.getElementById("input-box");
    var submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        localStorage.setItem(inputBox.value, score);
        document.getElementById("answer-template").className = "hide";
        document.getElementById("high-scores-div").className = "card";
        scoreList = document.getElementById("high-scores");

        showHighScores();

    });


})

var highScoreButton = document.getElementById("hs-link");
highScoreButton.addEventListener("click", function () {
    introduction.className = "hide";
    document.getElementById("question-template").className = "hide";
    answerDiv.className = "hide";
    document.getElementById("high-scores-div").className = "card";
    showHighScores();
});

function showHighScores() {
    var scoreList = document.getElementById("high-scores");
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var newLi = document.createElement("li");
        newLi.innerHTML = key + "    -    " + value;
        scoreList.appendChild(newLi);
    }
}

function questionLogic() {

    //show question in dom

    var questionObj = questions[currentQuestion];
    var currentQuestionTitle = document.getElementById("question-title");
    currentQuestionTitle.textContent = questionObj.question;
    //show available answers in dom
    //create answerListEl ul
    var answerListEl = document.getElementById("answer-list");
    // var ansEl;
    // var buttonEl;
    // document.body.appendChild(answerListEl);
    answerListEl.innerHTML = "";
    // adds each answer to the dom as a button and adds a click handler
    questionObj.answers.forEach(function (element) {
        var ansEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.textContent = element;
        ansEl.appendChild(buttonEl);
        answerListEl.appendChild(ansEl);

        buttonEl.addEventListener("click", function () {
            if (element === questionObj.correct) {
                score++;

            }
            else {
                // todo handle wrong answers decrement time
                if (timeLeft > 10) timeLeft -= 10;
                else timeLeft = 0;
            }

            console.log(score);

            currentQuestion++;
            if (currentQuestion >= questions.length) {
                console.log("questions over");
                timeLeft = 0;
                //hide question template
                document.getElementById("question-template").className = "hide";
                //show submit score
                answerDiv.className = "card";
                userScore.innerHTML = "Your Score: " + score;
            }
            else {
                questionLogic();
            }
        });
    });

    //make first child of ql visible once question is answered
    //when the user answers the question then check if the answer is correct
    //checks if the question has already been answered



    //if the question is answered correctly, add to score
    //when the user clicks on an answer, remove that question from the dom
}