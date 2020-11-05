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
    {
        question: "",
        answers: ["", "", "", ""],
        correct: ""
    },
    // {
    //     question: "",
    //     answers: ["", "", "", ""],
    //     correct: ""
    // }
];
var title = document.getElementById("starting-h1");
var instructions = document.getElementById("instructions")
var startBtn = document.getElementById("start-button");
var score = 0;

startBtn.addEventListener("click", function (event) {
    title.remove();
    instructions.remove();
    startBtn.remove();
    // var newEl = document.createElement("h3");
    // newEl.textContent = "Hello world!";
    // document.body.appendChild(newEl);

    renderQuestion(questions[1]);
})

function renderQuestion(questionObj) {
    var currentQuestion = document.createElement("h3");
    currentQuestion.textContent = questionObj.question;
    document.body.appendChild(currentQuestion);

    var answerList = document.createElement("ul");
    questionObj.answers.forEach(function(answer){
        var ansEl = document.createElement("li");
        ansEl.textContent = answer;
        document.answerList.appendChild(ansEl);
    })
}

