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
const questionsCounter = document.getElementById("questions-counter")
const questionsText = document.getElementById("questions-txt")
const difficultyEasy = document.getElementById("difficulty-level1")
const difficultyMedium = document.getElementById("difficulty-level2")
const difficultyHard = document.getElementById("difficulty-level3")
const questionBox = document.getElementById("question-box-area")
const selection = document.getElementById("selection-area")
const optionsBtn = document.getElementById("option-buttons")
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
    // window.location.assign("rule-box")

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

    // let qCounter = 1;
    // document.getElementById("questions-counter").innerHTML = (`Question ${}`)

    // Set variable to Index and empty Array  
    let questionsCounterIndex = 0;
    let currentQuestion;
    let selectedQuestions = [];
    let quiz;

    // Function that loops through questions then Push questions into the selectedQuestions Array
    function availableSelections() {
        // const totalQuestions = quiz.length
        for(let i = 0; i< quiz.length; i++) {
            selectedQuestions.push(quiz[i]) 
        }
        console.log(selectedQuestions);
    }

    // Set Questions Counter and display random Questions
    function selectNewQuestions(){
        // Set Question counter
        questionsCounter.innerHTML = "Question " + (questionsCounterIndex + 1) + " of "
        quiz.length;

        const questionsIndex = availableSelections[Math.floor(Math.random() * availableSelections.length)];
        currentQuestion = questionsIndex;
        questionsText.innerHTML = currentQuestion.question;
        const firstIdex = availableSelections.indexOf()
        questionsCounterIndex++;
    }


    window.onload = fuction() {
    //    Set all questions in  selectedQuestions Array
        availableSelections();

        // Call the selectNewQuestions function's function
        selectNewQuestions();

    };