// Get the HTML Elements by their Tag Name and assigned to variable
// Start Quiz Section
const startQuiz = document.getElementById('start-quiz-home');
const userNameInput = document.getElementById("user-name-input");
const usernameBtn = document.getElementById("next-btn");
const errorMsg = document.getElementById("error");
let playerName  =  userNameInput.value;
const playerNameTxt = document.querySelectorAll("#player-name");

// Quiz Rule Box Section
const ruleBox = document.getElementById('rule-box');
const startBtn = document.getElementById('start-quiz-btn');
const backHome = document.getElementById("back-home-btn");

// Select Level of Difficulty Section
const selection = document.getElementById("selection-area");
const selectLevel = document.getElementsByClassName("difficulty");
const level1 = document.getElementById("difficulty-level1");
const level2 = document.getElementById("difficulty-level2");
const level3 = document.getElementById("difficulty-level3");
const homeBtn = document.getElementById("home-btn");

// Questions Section
const questionBox = document.getElementById("question-box-area");
let questionsCounter = document.getElementById("questions-counter");
const questionsText = document.getElementById("questions-txt");
const timeCounter = document.getElementById("time-counter");
let userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");

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

/** Function to Check UserName input and display error message if invalid or empty
    User name display when the next button is clicked (onload) 
  */ 
window.addEventListener('DOMContentLoaded', () => { 
    usernameBtn.addEventListener("click", function() {

    playerName = userNameInput.value;
    for(let i = 0; i < playerNameTxt.length; i++){
        playerNameTxt[i].innerHTML= userNameInput.value;

    }
    // console.log(playerNameTxt);

    let errorTxt = '';
    // if username input is empty
if (playerName == '') {
    errorTxt = "Please enter a Username";
    ruleBox.style.display = "none";
    // playerName.style.pointerEvent = "none";

// if username input is less than 8 characters 
} else if (playerName.length >= 8) {
    errorTxt = "Username must have maximum of 8 characters";
} 
// if errorMsg is not empty
if (errorTxt !== '') {
    // display error message in the errorMsg div on home page
    errorMsg.innerHTML = errorTxt;
} else{ 
    localStorage.setItem("player", playerName);
    startQuiz.classList.add('hide');
    ruleBox.style.display = "block";
}

// Redirect user to rule box when next button is clicked
//    if (ruleBox.style.display == "block" && playerName !== "") {
//     ruleBox.style.display = "none";
//    }else {
    
//   }
 });

 });
// Redirect user to quiz level selection box when start quiz button is clicked
 startBtn.addEventListener("click", function(){
    ruleBox.style.display = "none";
    selection.style.display = "block"; 
 });


// Redirect user to home page when home button is clicked on the difficulty level page
homeBtn.addEventListener("click", function(){
    selection.style.display = "none";
    startQuiz.style.display = "block";
});

 // Redirect user to home page when home button is clicked on the quiz rule box
backHome.addEventListener("click", function(){
    ruleBox.style.display = "none";
    startQuiz.style.display = "block";
});

nextQueBtn.addEventListener("click", function() {
    nextQuestion();
});

// Redirect user to question page for each level when a level is selected 
let difficultyLevel = "";

playerName = localStorage.getItem("player");

 // Easy level
level1.addEventListener("click", function(){
     selection.style.display = "none";      
     difficultyLevel = "easy"; 
 
     questionStart();
     interval = setInterval(countTime, 1000);
     
});
 // Medium level
level2.addEventListener("click", function(){
     selection.style.display = "none";
     difficultyLevel = "medium"; 
 
     questionStart();
     interval = setInterval(countTime, 1000);
});
 // Hard level
level3.addEventListener("click", function(){
     selection.style.display = "none";
     difficultyLevel = "hard"; 
 
     questionStart();
     interval = setInterval(countTime, 1000);
});
    

//  Set function for time counter     
let timer = 0;
let interval = 0; 

let countTime = ()=> {
    if (timer === 20) {
        clearInterval(interval);
        nextQueBtn.click();
    } else {
        timer++;
        timeCounter.innerText = timer;
    } 
};

// Set the variables for score, question number, current question and all questions
let userScored = 0;
userScore.innerHTML = (`Score: ${userScored}/5`);
let questionNum = 0;

let currentQuestion;


let allQuestions = [];


 // Function to execute each difficulty Level Questions
function questionStart() {
    // Show questions box
    questionBox.style.display = "block"; 

    // Code adapted from jsfiddle.net
   
    if (difficultyLevel == 'easy') {
        currentQuestion = questionsLevel1;
    } else if (difficultyLevel == "medium") {
        currentQuestion= questionsLevel2;        
    } else {    
        currentQuestion= questionsLevel3;  
    }

    renderQuestions();
    
};

// Render first question
function renderQuestions() {
    // Get the difficulity level's set of random questions and options & load the first question.
    allQuestions = shuffle(currentQuestion);
    allQuestions = allQuestions.slice(0, 5);

    questionsText.innerHTML = allQuestions[questionNum].question;

    option1.innerHTML = allQuestions[questionNum].options[0];
    option2.innerHTML = allQuestions[questionNum].options[1];
    option3.innerHTML = allQuestions[questionNum].options[2];
    option4.innerHTML = allQuestions[questionNum].options[3];  
    
};

// Function to check if user answer is coreect, option button changes to green and vice visa
function optionClick(userAnswer) {
    if(userAnswer == allQuestions[questionNum].answer) {
        userScored++;
        userScore.innerHTML = (`Score: ${userScored}/5`);

        checkAnswers(allQuestions[questionNum].answer).style.backgroundColor="Green"
    }
    else {
        checkAnswers(userAnswer).style.backgroundColor="red"
        checkAnswers(allQuestions[questionNum].answer).style.backgroundColor="Green"
    }
};

// Function check and return answer option, if answer is strictly equal to option index
function checkAnswers(answerId) {
    if(answerId === 0)
        return option1
    else if(answerId === 1)
        return option2
    else if(answerId === 2)
        return option3
    else if(answerId === 3)
        return option4
};

// Function to display next question and answer options 
function nextQuestion() {
    questionNum+=1;
    questionsText.innerHTML = allQuestions[questionNum].question;

    option1.innerHTML = allQuestions[questionNum].options[0];
    option2.innerHTML = allQuestions[questionNum].options[1];
    option3.innerHTML = allQuestions[questionNum].options[2];
    option4.innerHTML = allQuestions[questionNum].options[3];

    option1.style.backgroundColor = "#3f13a4";
    option2.style.backgroundColor = "#3f13a4";
    option3.style.backgroundColor = "#3f13a4";
    option4.style.backgroundColor = "#3f13a4";

    // Start timer
    timer = 0;  

    // Increase question count on the click of next button
    questionsCounter.innerText = parseInt(questionsCounter.innerText) + 1;

    if(questionsCounter.innerText == 5 ) {
        quizResult.style.display = "block";  
    }
}

   //Code from jsfiddle.net/gautamz07/zotsc64e/
  // Function to randomly display quiz with level of difficulty
function shuffle(questionsArray) {
    let currentQuestionIndex = questionsArray.length,  randomise;

    // The conditional statement to shuffle the remaininig questions.
    while (currentQuestionIndex != 0) {

        // Pick from the remaining questions.
        randomise = Math.floor(Math.random() * currentQuestionIndex);
        currentQuestionIndex--;

        // And swap it with the current .
        [questionsArray[currentQuestionIndex], questionsArray[randomise]] = [
            questionsArray[randomise], questionsArray[currentQuestionIndex]];
    }

    return questionsArray;
};

// Show result
function showResults(){};
















// function selectOptions(){            
//     optionBtn[i].addEventListener("click", function() { 
//             optionBtn[i].classList.add("active");
//             if(currentQuestion.answer === currentQuestion.options[i]){
//                 options[i].id = "correct";
//                 userScored++;
                
//             } else{
//                 questionsText.innerHTML = `Answer: ${currentQuestion.answer}`;
//                 answer[i].id = "wrong";
//                 userScored += 0;
//             }
//             clearInterval(interval);
//         });  
    

// }


//     // Conditional statement to execute difficulty Level Questions
//     function displayLevelQuestions(selectDifficultyLevel) {
//     let difficulty = ("easy, medium, hard");

//     if (selectDifficultyLevel === 'easy') {
//         quiz = questionsLevel1;
//         showDifficultyL1Questions(difficulty);
//     } else if (selectDifficultyLevel === "medium") {
//         quiz= questionsLevel2;
//         showDifficultyL2Questions(difficulty);
//     } else {
//         selectDifficultyLevel === "hard";
//         quiz= questionsLevel3;
//         showDifficultyL2Questions(difficulty);
//     } 
// }    

//  // Set Questions Counter and display random Questions
//     function makeRandomQuestions(){
//      questionsCounter.innerHTML = (`Question ${questionsCounter} of 10`);

//     let randomQuestions = Math.floor(Math.random() * quiz.length );
//     currentQuestion = quiz[randomQuestions];
//     quiz.splice(randomQuestions, 1);

// // Credited to youtuber web Dev Simplified

// //Function to display random difficulty level selection questions
//     function showDifficultyL1Questions() {
//     quiz = questionsLevel1;
//     level1.addEventListener("click", () =>{
//         displayLevelQuestions();  
//     });
//     makeRandomQuestions();
//     };

//     function showDifficultyL2Questions(){};

//     function showDifficultyL3Questions(){};    
    
//     function setNextQuestions(){
//         // displayQuestionsLevel(shuffledQuestions[currentQuestion]);
//     };

//     // function correctAnswer(){
//     //     const correctBtn = document.createElement("correct-Btn");
//     //     correctBtn.innerText = answer.text;
//     //     correctBtn.classList.add("optionBtn");
//     //     if(answer.correct) {
//     //         correctBtn.dataset.correct = answer.correct;
//     //     }
//     //     questionBox.style.backgroundColor = "green";
//     // }



    //  let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectLevel);
    //  selectLevel = filteredQuestionsByDifficulty;

    // function selectRandomQuestions(){
    //     // Set Question text
    //     const randomQuestions = selectedQuestions[Math.floor(Math.random() * selectedQuestions.length)];
    //     currentQuestion = randomQuestions;
    //     questionsText.innerHTML = currentQuestion.questions-txt;
    //     console.log(randomQuestions);
    // }

//     // Function that loops through questions then Push questions into the selectedQuestions Array
//     function availableQuestions() {
//         // const totalQuestions = quiz.length
//         for(let i = 0; i< quiz.length; i++) {
//             selectedQuestions.push(quiz[i]) 
//         }
//         console.log(selectedQuestions);
//     }

//     // Set Questions Counter and display random Questions
//     function selectRandomQuestions(){
//         // Set Question counter
//         questionsCounter.innerHTML = "Question " + (questionsCounterIndex + 1) + " of " +
//         quiz.length;
//         // Set Question text
//         const questionsIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
//         currentQuestion = questionsIndex;
//         questionsText.innerHTML = currentQuestion.questions-txt;
//         console.log(questionsIndex);


//         // Set the options, loop through options Array and push it into the availabeOptions Array 
//         const optionLen = currentQuestion.options.length;
//         for(let i = 0; i < optionLen; i++){
//             availableOptions.push(i);
//         }


//     nextQueBtn.addEventListener("click", function() {
//         if (questionsCounter === quiz.length){
//             console.log("finish quiz");
//         }
//         else{
//             selectNewQuestions();  
//         }
//     });

//       window.onload = ()=> {
//     // Function to randomly display quiz with level of diffivulty
//     function difficultyL1() {
//         quiz = questionsLevel1;
//         difficultyEasy.addEventListener("click", () =>{
//         selectedLevel = document.getElementsByClassName("difficulty");

// // let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectedLevel);

//     });
// }

// // function runQuiz() {
// //     startQuiz.classList.add('hide');
// //     ruleBox.classList.add.remove('hide');
// //     selection.classList.remove('hide')
// // };
//  // homeBtn.onclick = ()=>{
//     //     window.location.reload(); //reload the current window
    // };