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





// Get the HTML Elements by their Tag Name and assigned to variable
const userNameInput = document.getElementById("user-name-input")
const startQuiz = document.getElementById('start-quiz-home')
const errorMsg = document.getElementById("error-message")
const nextBtn = document.getElementById("next-btn")
const questionsCounter = document.getElementById("questions-counter")
const questionsText = document.getElementById("questions-txt")
const selectedLevel = document.getElementsByClassName("difficulty");
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


nextBtn.addEventListener("click", displayName)


function displayName() {
    console.log(userNameInput.value, "dhjdhvfhve")
    userNameInput.innerText = userNameInput.value;

    selection.innerHTML = "Hi " + userNameInput.value;
    questionsArea.innerText = userNameInput.value;
    
    startQuiz.classList.remove('hide')
    
    selection.classList.remove('hide')
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
        questionsCounter.innerHTML = "Question " + (questionsCounterIndex + 1) + " of " +
        quiz.length;
        // Set Question text
        const questionsIndex = availableSelections[Math.floor(Math.random() * availableSelections.length)];
        currentQuestion = questionsIndex;
        questionsText.innerHTML = currentQuestion.question;
        console.log(questionsIndex);

        // Index number of questions in the availableSelections Array
        const indexNum = availableSelections.indexOf(questionsIndex);

        // Remove the questionsIndex from the availableSelections Array, so the question is not repeated
        availableSelections.splice(indexNum)
        questionsCounterIndex++;
        console.log(indexNum);
    }

        function nextQ(){
            if (questionsCounter === quiz.length){
                console.log("finish quiz");
            }
            else{
                selectNewQuestions();  
            }

        }

     window.onload = fuction() {
    // //    Set all questions in  selectedQuestions Array
        availableSelections();

    // Call the selectNewQuestions function's function
        selectNewQuestions();

     };

//     // Function to randomly display quiz with level of diffivulty
//     function difficultyL1() {
//         quiz = questionsLevel1;
//         difficultyEasy.addEventListener("click", () =>{
//         selectedLevel = document.getElementsByClassName("difficulty");

// // let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectedLevel);

//         }
//     });




(function runQuiz(){})();


function showResults(){}