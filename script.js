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

    renderQuestion(questions[1]);


})

//renders the question on the page
function renderQuestion(questionObj) {
    //create and display question element
    var currentQuestion = document.createElement("h3");
    currentQuestion.textContent = questionObj.question;
    document.body.appendChild(currentQuestion);

    //create an unordered list to hold answers
    var answerList = document.createElement("ul");
    var ansEl; //will hold list items
    var buttonEl = document.createElement("button");

    //add ul to dom
    document.body.appendChild(answerList);

    questionObj.answers.forEach(function (answer) {
        //create buttons and add to dom
        ansEl = document.createElement("li");
        buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        //add event listeners to the buttons
        ansEl.appendChild(buttonEl);
        answerList.appendChild(ansEl);
        // function (answer) { alert("button is pressed")
        buttonEl.addEventListener("click", function() {isCorrect(questionObj, answer)});
    })
    
}

//check to see if the selected answer is correct
function isCorrect(questionObj, selectedAnswer) {
    if (selectedAnswer === questionObj.correct) {
        alert("correct answer");
        score++;
    }
    else { alert("WRONG") }
}
