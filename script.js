var startButton = document.querySelector("#btnStart");
var stopButton = document.querySelector("#btnStop");
var highButton = document.querySelector("#btnHigh");
var questionsShuffle, questionsCurrent;
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.setAttribute("style", "display: none");
    highButton.setAttribute("stye", "display: none");
    highButton.classList.add("hide");
    stopButton.classList.remove("hide");
    stopButton.setAttribute("style", "margin-left: 40%;")
    document.querySelector(".card-header").classList.remove("hide");
    document.querySelector(".card-body").classList.remove("hide");
    document.querySelector(".card-footer").classList.remove("hide");
    nextQuestion()
}

function nextQuestion() {
    
}


var questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Compact Style Sheet", correct: false},
            {text: "Computer Screen Sheet", correct: false},
            {text: "Complex Style Sheet", correct: false},
            {text: "Cascading Style Sheet", correct: true}
        ]
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parentheses", correct: true},
            {text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "paranthesis", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "terminal/bash", correct: false},
            {text: "for loops", correct: false},
            {text: "console log", correct: true}
        ]
    }
]