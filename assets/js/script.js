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



// Get the HTML Elements by their Tag Name and assigned to variable
// Start Quiz Section

const startQuiz = document.getElementById('start-quiz-home');
const userNameInput = document.getElementById("user-name-input");
const nextBtn = document.getElementById("next-btn");
const errorMsg = document.getElementById("error-message");
let playerName  =  userNameInput.value;
const playerNameElement = document.getElementById("player-name");

// Quiz Rule Box Section
const ruleBox = document.getElementById('rule-box');
const startBtn = document.getElementById('start-quiz-btn');
const goHome = document.getElementById("go-home-btn");

// Select Level of Difficulty Section
const selection = document.getElementById("selection-area");
const selectedLevel = document.getElementsByClassName("difficulty");
const level1 = document.getElementById("difficulty-level1");
const level2 = document.getElementById("difficulty-level2");
const level3 = document.getElementById("difficulty-level3");

// Questions Section
const questionBox = document.getElementById("question-box-area");
const questionsCounter = document.getElementById("questions-counter");
const questionsText = document.getElementById("questions-txt");
const timeCounter = document.getElementById("time-counter");
const scores = document.getElementById("score");

// Answer options Section
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const optionBtn = document.getElementsByClassName("option-btn");

// Next question button
const nextQueBtn = document.getElementById("next-ques-btn");

// Result Section
const quizResult = document.getElementById("quiz-result");
const resultText = document.getElementById("result-text");
const replayQuiz = document.getElementById("replay");
const quitQuiz = document.getElementById("quit");



// User name display when the next button is clicked 
window.addEventListener('DOMContentLoaded', () => { 
nextBtn.addEventListener("click", function() {

    // playerName = userNameInput.value;
    // selection.innerHTML = userNameInput.value;
    // questionsArea.innerHTML = userNameInput.value;
    playerNameElement.innerHTML = userNameInput.value;

    // console.log(userNameInput.value, "dhjdhvfhve");
});

// let errorMsg = '';

// // if no user input is inserted
// if (user == '') {
//     errorMsg = "Please enter a Username";

// // if user input is less than 8 characters 
// } else if (user.length <= Number(6)) {
//     errorMsg = "Username must have maximunm of 8 characters";
// } 
// // if errorMsg is not empty
// if (errorMsg != '') {
//     // display errorMsg on username home page
//     // error-message.innerHTML = errorMsg;
//     // return false;
// };

// return true;
// };

    if (nextBtn== "click"){
            ruleBox.innerHTML == window.onload;
        }else {
            nextBtn;
        }
 
});


// nextBtn.addEventListener("click", displayName)
 
// function displayName() {
//     console.log(userNameInput.value, "")
//     userNameInput.innerText = userNameInput.value;

//     selection.innerHTML = userNameInput.value;
//     questionBox.innerText = userNameInput.value;
//     if (nextBtn == "click"){
//         ruleBox.innerHTML == window.onload;
//     }else {
//         nextBtn;
//     }
    
//     // window.addEventListener('DOMContentLoaded', (event) => { }
// }



// document.getElementById('rule-box').innerHTML = nextBtn.onload; 
// startBtn.addEventListener("click", startQuiz)

// function startQuiz(){
//     startBtn.classList.add('hide')
//     // ruleBox.addEventListener.classList.add('hide')
    
//     selectLevel.classList.remove('hide')

//     startBtn.addEventListener("click", startQuiz)
// }



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
        availableSelections.splice(indexNum, 1);

        // Set the options, loop through options Array and push it into the availabeOptions Array 
        const optionLen = currentQuestion.options.length;
        for(let i = 0; i < optionLen; i++){
            availableOptions.push(i);
        }
        // Set random Options and Append options container to the available options
        // First loop through the options
        for(let i = 0; i < optionLen; i++){
            const randOption = availableOptions[Math.floor(Math.random() * availableOptions.length)];
            const optionIndex = availableOptions.indexOf(randOption);
        // Remove the OptionIndex from the availableOptions Array, so the option is not repeated
            availableOptions.splice(optionIndex, 1);
            const option = document.getElementsByClassName("option-btn");
            option.innerHTML = currentQuestion.options[randOption];
            // option = currentQuestion.options[i];
            option = i;
            optionsBtn.appendChild(option);
        }
    
        questionsCounterIndex++;
        console.log(indexNum);
    }

    // const nextQ = document.getElementById("next-ques-button")

    // nextQ.addEventListener("click", function() {
    //     if (questionsCounter === quiz.length){
    //         console.log("finish quiz");
    //     }
    //     else{
    //         selectNewQuestions();  
    //     }
    // });

        // function nextQ(){
        //     if (questionsCounter === quiz.length){
        //         console.log("finish quiz");
        //     }
        //     else{
        //         selectNewQuestions();  
        //     }

        // }

    //  window.onload = fuction() {
    // // //    Set all questions in  selectedQuestions Array
    //     availableSelections();

    // // Call the selectNewQuestions function's function
    //     selectNewQuestions();

    //  };

//     // Function to randomly display quiz with level of diffivulty
//     function difficultyL1() {
//         quiz = questionsLevel1;
//         difficultyEasy.addEventListener("click", () =>{
//         selectedLevel = document.getElementsByClassName("difficulty");

// // let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectedLevel);

//         }
//     });




function runQuiz(){};


function showResults(){};