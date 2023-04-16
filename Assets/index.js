
let quizDiv = document.querySelector("quiz");
let questionButton1 = document.querySelector("#answer1");

//timer needs to be rendered to the page
let timer = 90


let timerId = setInterval(function(){

    timer -= 1
    console.log(timer);

}, 1000)



// insert correct questions render questions to the page
let questions = [{question: "which pokemon does Ash get at the start of pokemon?", answers:["charmander", "susu", "juju", "pikachu"], correctAnswer: "pikachu" },
    {questions: "which pokemon deals ?", answers:["charmander", "jojo", "bobo", "pikachu"], correctAnswer: "pikachu"}
]

let currentQuestion = 0
renderQuestion()

function renderQuestion(){

    console.log(questions[currentQuestion].questions)
    questionButton1.textContent = questions[currentQuestion].answers[0];
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)
}

//display my button id
quizDiv.addEventListener("click", function(event){
    if(event.target.matches("button")){
        console.log("clicked!")
        
        renderQuestion();
        currentQuestion++

    }

})

//needs finish button that makes the game say function gameover

let GameOver = "Game Over";

function sayGameOver() {
    console.log(GameOver);
    
    
    
    return;

};


//needs button that lets you type intials for highscore sheet

//also needs a button that takes to highscore page
