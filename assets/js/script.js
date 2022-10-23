/* The following code was taken from the Code Institute course content.*/
/* Script to run before loading page content */



// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName("button");
//     for (let button of buttons) {
//         button.addEventListener("click", function() {
//             if (this.getAttribute("data-type") === "submit") {
//                 alert("You clicked Submit!");
//             } else {
//                 let gameType = this.getAttribute("data-type");
//                 alert(`You clicked ${gameType}`);
//             }
//         });
//     }
// });


// // User name display when the next button is clicked
// const userName = document.getElementById("user-name-input")
// const nextBtn = document.getElementById("next-btn")
// const selection = document.getElementById("selection-area")
// const questionsArea = document.getElementById("question-box-area")


// nextBtn.addEventListener("click", function() {

//     console.log(userName.value, "dhjdhvfhve")
//     userName.innerText = userName.value
//     selection.innerText = userName.value;
//     questionsArea.innerText = userName.value;
// }
// );

// const gameRule = document.getElementsByClassName("game-rule-icon");
// const ruleBox = document.getElementById("rule-box");
// gameRule.onclick = function () {
//   if (ruleBox.style.display !== "none") {
//     ruleBox.style.display = "none";
//   } else {
//     ruleBox.style.display = "block";
//   }
// };




// Get the HTML Elements by their Tag Name and assigned to variable
let userName = document.getElementById("user-name-input")
const errorMsg = document.getElementById("error-message")
const nextBtn = document.getElementById("next-btn")
const questionsArea = document.getElementById("question-box-area")
const difficultyEasy = document.getElementById("difficulty-level1")
const difficultyMedium = document.getElementById("difficulty-level2")
const difficultyHard = document.getElementById("difficulty-level3")
const questionBox = document.getElementById("question-box-area")
const selection = document.getElementById("selection-area")
const startBtn = document.getElementById('start-quiz-btn')
const goHome = document.getElementById("go-home-btn")
const quizResult = document.getElementById("quiz-result")
const ruleBox = document.getElementById('rule-box')


nextBtn.addEventListener("click", enterName)


function enterName() {
    userName.innerText = userName.value;
    selection.innerHTML = userName.value;
    questionsArea.innerText = userName.value;
    
    nextBtn.addEventListener.classList.add('hide')
   
    startBtn.classList.add('hide')
    // ruleBox.addEventListener.classList.add('hide')
    
    selectLevel.classList.remove('hide')
    window.location.assign("rule-box")

}

// document.getElementById('rule-box').innerHTML = nextBtn.onload; 
// startBtn.addEventListener("click", startQuiz)

// function startQuiz(){
//     startBtn.classList.add('hide')
//     // ruleBox.addEventListener.classList.add('hide')
    
//     selectLevel.classList.remove('hide')

//     startBtn.addEventListener("click", startQuiz)
// }
// console.log("startBtn");

    let qCounter = 1;
    document.getElementById("questions-counter").innerHTML = (`Question ${}`)