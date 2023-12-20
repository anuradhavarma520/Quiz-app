{/*  */}
var quizApp = document.getElementById("quiz-app");
var correctAnswers = [] 

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz" , function(response){
 var quizData =  response
 console.log(quizData);
 for( var i = 0 ; i < quizData.length ; i++ ){
    quizApp.innerHTML += `<h3> ${quizData[i].question} </h3>`
    correctAnswers.push(quizData[i].answer  )
    var options = quizData[i].options;
    for( var j = 0 ; j < options.length ; j++ ){
        quizApp.innerHTML += `
        <div class="option-wrapper" >
    <label>
    <input type="radio"  name = "q${quizData[i].id}" value = ${j + 1} />
    <span> ${options[j]} </span>
    </label>
    </div>
        `
    }
 }
 console.log(correctAnswers)
})

function calculateScore(){
   var answerElement =  $("input:checked");
   var score = 0
   for( var i = 0 ; i < answerElement.length ; i++ ){
    if( answerElement[i].value == correctAnswers[i] ){
        score++;
    }
   }
   console.log(score)
 }


