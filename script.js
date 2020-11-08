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
var score = 0;
var questionAnswered = false;

startBtn.addEventListener("click", function (event) {
    //remove starting elements from dom once start button is clicked
    title.remove();
    instructions.remove();
    startBtn.remove();

    //show question elements in dom
    //if question is answered correctly, add to score
    //once question is answered remove that question from the dom. render next question

    questions.forEach(function (question) { questionLogic(question) });


})

//renders the question on the page and checks if the answer is correct
function questionLogic(questionObj) {
    //create and display question element
    var currentQuestion = document.createElement("h3");
    currentQuestion.textContent = questionObj.question;
    document.body.appendChild(currentQuestion);

    //create an unordered list to hold answers
    var answerListEl = document.createElement("ul");
    var ansEl; //will hold list items
    var buttonEl = document.createElement("button");

    //add ul to dom
    document.body.appendChild(answerListEl);

    questionObj.answers.forEach(function (answer) {
        //create buttons and add to dom
        questionAnswered = false;
        ansEl = document.createElement("li");
        buttonEl = document.createElement("button");
        buttonEl.textContent = answer;
        ansEl.appendChild(buttonEl);
        answerListEl.appendChild(ansEl);


        // if button is pressed, isCorrect checks to see if the answer is correct

        buttonEl.addEventListener("click", function () {
            while (!questionAnswered) {
                if (answer === questionObj.correct) {
                    score++;
                }
                console.log(score);
                // console.log(questionAnswered);
                questionAnswered = true;
                // console.log(questionAnswered);
                if (questionAnswered) {
                    answerListEl.remove();
                    currentQuestion.remove();
                }
            }
        });
    });
}

//check to see if the selected answer is correct
function isCorrect(questionObj, selectedAnswer) {
    if (selectedAnswer === questionObj.correct) {
        alert("correct answer");
        score++;
    }
    else { alert("WRONG") }
    console.log(score);
}
