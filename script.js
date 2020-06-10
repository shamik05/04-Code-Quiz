var startButton = document.querySelector("#btnStart");
var stopButton = document.querySelector("#btnStop");
var highButton = document.querySelector("#btnHigh");
var questions = [
    {
        question:
    }
]
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