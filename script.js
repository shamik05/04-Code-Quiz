var startButton = document.querySelector("#btnStart");
var stopButton = document.querySelector("#btnStop");
var highButton = document.querySelector("#btnHigh");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#quizAnswers")
var questionsIndex;
var score;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.setAttribute("style", "display: none");
    highButton.setAttribute("stye", "display: none");
    highButton.classList.add("hide");
    stopButton.classList.remove("hide");
    stopButton.setAttribute("style", "margin-left: 40%;")
    // document.querySelector(".card-header").classList.remove("hide");
    document.querySelector(".card-body").classList.remove("hide");
    document.querySelector(".card-footer").classList.remove("hide");
    questionsIndex = 0;
    // questions[questionsIndex].answers.forEach(element => console.log(element.text))
    nextQuestion();
}

function nextQuestion() {
    resetCard();
    questionsShow(questions[questionsIndex]);
}

function questionsShow(question){
    questionEl.value = questions[questionsIndex].question;
    questions[questionsIndex].answers.forEach(element => {
        var button = document.createElement("button")
        button.innerText = element.text;
        button.classList.add("btn");
        if(element.correct) {
            button.dataset.correct = element.correct;
        }
        button.addEventListener("click", selectAnswer);
        answersEl.appendChild(button);
    })
}

function resetCard(){
    while(answersEl.firstChild){
        answersEl.removeChild;
        (answersEl.firstChild)
    }
}

function selectAnswer(e) {
    var btnClicked = e.target;
    var btnCorrect = btnClicked.dataset.correct;
    setStatusClass(document.body, btnCorrect);
    Array.from(answersEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })

    setTimeout(function(){
        questionsIndex++;
        nextQuestion()
    }, 2000);
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else{
        element.classList.add("incorrect");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
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