var startButton = document.getElementById('startButton')
var buttonContainer = document.getElementById('buttonContainer')
var questionText = document.getElementById('questionText')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')
var printScore = document.getElementById('score')
var scoreForm = document.getElementById('scoreForm')
var scoreList = document.getElementsByTagName('ul')
var timer = document.getElementById("timer")

var questionNumber = 0;
var score = 0;
var countdown = 60;
function setTime() {
  var timerInterval = setInterval(
    function() {
      countdown--;
      timer.innerText = countdown + " seconds left.";
      
      if (countdown === 0) {
        clearInterval(timerInterval)
        timeEl.textContent = ""
        startReading();
      }
    }, 1000);
}


var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which of the following is the correct syntax to display an alert box using JavaScript?",
      choices: ["alertbox()", "msg()", "msgbox()", "alert()"],
      answer: "alert()"
    },
    {
      title: "JavaScript can be used to build: ",
      choices: ["Sorting Algorithm Animations", "Browser-based Cryptocurrency Miners", "Multiple Choice Quizzes", "All of the above!"],
      answer: "All of the above!"
    },
    {
      title: "JavaScript, ________ and ________ are considered the three pillars of web development: ",
      choices: ["HTML/BASIC", "TypeScript/Ruby", "Python/C++", "HTML/CSS"],
      answer: "HTML/CSS"
    },
    
  ];

$("#startButton").on('click', function(){

      startButton.setAttribute("style", "display: none")
      buttonContainer.classList.remove('hide')
      questionText.classList.remove('hide')
      loadQuestion();
      setTime();
      
  })

  //*** TOOK + 1 OUT OF QUESTIONS.LENGTH */
function loadQuestion(){
  if(questionNumber < questions.length){
  questionText.innerText = questions[questionNumber].title;
  button1.innerText = questions[questionNumber].choices[0];
  button2.innerText = questions[questionNumber].choices[1];
  button3.innerText = questions[questionNumber].choices[2];
  button4.innerText = questions[questionNumber].choices[3];

//FIRST OPTION CLICK EVENT
  $("#button1").on('click', function(){
    if(button1.innerText === questions[questionNumber].answer){
      console.log("questions number: " + questionNumber)
      console.log("Correct!")
      score += 20;
      printScore.innerText = "Score: " + score
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  })
//SECOND OPTION CLICK EVENT
  $("#button2").on('click', function(){
    if(button2.innerText === questions[questionNumber].answer){
      score += 20;
      printScore.innerText = "Score: " + score
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  })
//THIRD OPTION CLICK EVENT
  $("#button3").on('click', function(){
    if(button3.innerText === questions[questionNumber].answer){
      score += 20;
      printScore.innerText = "Score: " + score
      console.log("Correct!")
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  })
//FOURTH OPTION CLICK EVENT
  $("#button4").on('click', function(){
    if(button4.innerText === questions[questionNumber].answer){
      score += 20;
      console.log("Correct!")
      printScore.innerText = "Score: " + score
    } else {
      console.log("Incorrect!")
      countdown -= 10
      printScore.innerText = "Score: " + score
  } loadNextQuestion();
  })
} else {
}
}

function loadNextQuestion(){
questionNumber++;
console.log(questionNumber)
if(questionNumber < questions.length){
printScore.innerText = "Score: " + score
questionText.innerText = questions[questionNumber].title;
button1.innerText = questions[questionNumber].choices[0];
button2.innerText = questions[questionNumber].choices[1];
button3.innerText = questions[questionNumber].choices[2];
button4.innerText = questions[questionNumber].choices[3];
} else {
  console.log("GAME OVER")
  buttonContainer.classList.add('hide')
  questionText.classList.add('hide')
  gameOver();
}
}
//Game Over function. This loads the high score form for the user to input their initials and save their score in cli
function gameOver(){
  questionText.classList.remove('hide')
  questionText.innerText = "HIGH SCORES"
  scoreForm.removeAttribute("class", "hide")
  scoreForm.addEventListener('submit', function(event){
    event.preventDefault()
    
  })

}



