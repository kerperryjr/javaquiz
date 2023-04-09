


let timer = 90


let timerId = setInterval(function(){

    timer -= 1
    console.log(timer);
    clearInterval(timerId)
}, 1000)




let questions = [{question: "which pokemon does Ash get at the start of pokemon?", answers:["charmander", "susu", "juju", "pikachu"], correctAnswer: "pikachu" },
    {questions: "which pokemon deals ?", answers:["charmander", "jojo", "bobo", "pikachu"], correctAnswer: "pikachu"}
]

let currentQuestion = 0


function renderQuestion(){

    console.log(questions[0].questions)
    console.log(questions[0].answers[0])
    console.log(questions[0].answers[1])
    console.log(questions[0].answers[2])
    console.log(questions[0].answers[3])
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)
}