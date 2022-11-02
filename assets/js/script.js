// Get the HTML Elements by their Tag Name and assigned to variable
// Start Quiz Section
const startQuiz = document.getElementById('start-quiz-home');
const userNameInput = document.getElementById("user-name-input");
const nextBtn = document.getElementById("next-btn");
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
  User name display when the next button is clicked 
  */ 
window.addEventListener('DOMContentLoaded', () => { 
nextBtn.addEventListener("click", function() {

    playerName = userNameInput.value;
    for(let i = 0; i < playerNameTxt.length; i++){
        playerNameTxt[i].innerHTML= userNameInput.value;

    }
    // console.log(playerNameTxt);

    let errorTxt = '';
    // if username input is empty
if (playerName == '') {
    errorTxt = "Please enter a Username";
    // playerName.style.pointerEvent = "none";

// if username input is less than 8 characters 
} else if (playerName.length > 8) {
    errorTxt = "Username must have maximum of 8 characters";
} 
// if errorMsg is not empty
if (errorTxt !== '') {
    // display error message in the errorMsg div on home page
    
    errorMsg.innerHTML = errorTxt;
} else{ 
    startQuiz.classList.add('hide');
}

// Redirect user to rule box when next button is clicked
   if (ruleBox.style.display == "block" && playerName !== "") {
    ruleBox.style.display = "none";
   }else {
    ruleBox.style.display = "block";
  }
 });

 });
// Redirect user to quiz level selection box when start quiz button is clicked
 startBtn.addEventListener("click", function(){
    ruleBox.style.display = "none";
    selection.style.display = "block"; 
 });

    
 // Redirect user to question page for each level when a level is selected 
    let difficultyLevel;
    level1.addEventListener("click", function(){
    selection.style.display = "none";      
    questionBox.style.display = "block"; 
    difficultyLevel = "easy"; 

    interval = setInterval(countDown, 1000);
    displayQuestions();


 });

 level2.addEventListener("click", function(){
    selection.style.display = "none";
    questionBox.style.display = "block"; 
    difficultyLevel = "medium"; 
 });

 level3.addEventListener("click", function(){
    selection.style.display = "none";
    questionBox.style.display = "block"; 
    difficultyLevel = "hard"; 
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

    
    // Question counter varialbe set to 1
    let questionDisplayCounter = 1;
    // questionsCounter = 1;
    questionsCounter.innerHTML = (`Question ${questionDisplayCounter} of 5`);

    // Score varialbe set to 0
    let userScored = 0;
    userScore.innerHTML = (`Score: ${userScored}/5`);
    let questionNum = 0;
    let currentQuestion;

    // Code adapted from jsfiddle.net
    // Conditional statement to execute difficulty Level Questions
    if (difficultyLevel === 'easy') {
                currentQuestion = questionsLevel1;
                
            } else if (difficultyLevel === "medium") {
                currentQuestion= questionsLevel2;
                
            } else {
                difficultyLevel === "hard";
                currentQuestion= questionsLevel3;  
            } 

    //  Set function for time counter
         
    let timer = 0;
    let interval = 0; 

    let countDown = ()=> {
    if (timer === 25) {
      clearInterval(interval);
      nextQueBtn.click();
    } else {
      timer++;
      timeCounter.innerText = timer;
      console.log(timeCounter);
    } 
  }
    // Methods to select and display 5 questions out of 10 everytime player plays. 
    let allQuestions = shuffle(currentQuestion);
    allQuestions = allQuestions.slice(0, 5);


    // questionsText.innerHTML = allQuestions[questionNum].question;


    // option1.innerHTML = allQuestions[questionNum].options[0];
    // option2.innerHTML = allQuestions[questionNum].options[1];
    // option3.innerHTML = allQuestions[questionNum].options[2];
    // option4.innerHTML = allQuestions[questionNum].options[3];


    function displayQuestions(userAnswer) {
        if(userAnswer == allQuestions[questionNum].answer) {
            userScored++;
            userScore.innerHTML = (`Score: ${userScored}/5`);
        }
        questionNum+=1;
        questionsText.innerHTML = allQuestions[questionNum].question;
   
        option1.innerHTML = allQuestions[questionNum].options[0];
        option2.innerHTML = allQuestions[questionNum].options[1];
        option3.innerHTML = allQuestions[questionNum].options[2];
        option4.innerHTML = allQuestions[questionNum].options[3];

        console.log("option");
        timer = 0;
    }

    // Function to randomly display quiz with level of difficulty
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }



    

   








    
//     let quiz;

//     // shuffle(questionsLevel1);
//     // shuffle(questionsLevel2);
//     // shuffle(questionsLevel3);

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

// //Function to enable difficulty level selection 
//         function difficultyL1Questions() {
//             showDifficultyL1Questions()   
//         };
//         function difficultyL2Questions(){};
    
//         function difficultyL3Questions(){};    

//  // Set Questions Counter and display random Questions
//     function makeRandomQuestions(){
//      questionsCounter.innerHTML = (`Question ${questionsCounter} of 10`);

//     let randomQuestions = Math.floor(Math.random() * quiz.length );
//     currentQuestion = quiz[randomQuestions];

//     quiz.splice(randomQuestions, 1);

//     questionsText.innerHTML = currentQuestion.question

// // Credited to youtuber web Dev Simplified
//     currentQuestion.options.sort(() => Math.random() - .5);

//     for(let i = 0; i < currentQuestion.options.length; i++){
//         optionBtn[i].innerHTML = currentQuestion.options[i];
//     //     optionBtn.addEventListener("click", function() { 
//     //  });  
//     }

//     };

  
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


//     function selectOptions(){
//         for (let i = 0; i < 4; i++){
//             optionBtn[i].addEventListener("click", function() { 
//                 if(currentQuestion.answer == currentQuestion.options[i]){
//                     optionBtn[i].id = "correct";
//                     userScore++;
//                     userScore.innerHTML = (`Score: ${userScore}/10`);
//                     questionsText.innerHTML = currentQuestion.question;
//                     correctAnswer();
//                 } else{
//                     questionsText.innerHTML = `Answer: ${currentQuestion.answer}`;
//                     answer[i].id = "wrong";
//                 }
//             });  
//         }

//     }



    
//     function setNextQuestions(){
//         // displayQuestionsLevel(shuffledQuestions[currentQuestion]);
//     };

// // Set variable to Index
//     let index = 0;
//     let userAnswer = undefined;

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

//         // Index number of questions in the availableSelections Array
//         const indexNum = availableQuestions.indexOf(questionsIndex);

//         // Remove the questionsIndex from the availableSelections Array, so the question is not repeated
//         availableQuestions.splice(indexNum, 1);

//         // Set the options, loop through options Array and push it into the availabeOptions Array 
//         const optionLen = currentQuestion.options.length;
//         for(let i = 0; i < optionLen; i++){
//             availableOptions.push(i);
//         }
//         // Set random Options and Append options container to the available options
//         // First loop through the options
//         for(let i = 0; i < optionLen; i++){
//             const randOption = availableOptions[Math.floor(Math.random() * availableOptions.length)];
//             const optionIndex = availableOptions.indexOf(randOption);

//         // Remove the OptionIndex from the availableOptions Array, so the option is not repeated
//             availableOptions.splice(optionIndex, 1);
//             const option = document.getElementsByClassName("option-btn");
//             option.innerHTML = currentQuestion.options[randOption];
//             // option = currentQuestion.options[i];
//             option = i;
//             option.appendChild(option);
//         }
    
//         questionsCounterIndex++;
//         console.log(indexNum);
//     }

//     nextQueBtn.addEventListener("click", function() {
//         if (questionsCounter === quiz.length){
//             console.log("finish quiz");
//         }
//         else{
//             selectNewQuestions();  
//         }
//     });

//       window.onload = ()=> {
//     //     Set all questions in  selectedQuestions Array
//          availableQuestions();

//     // // Call the selectNewQuestions function's function
//          selectNewQuestions();

//      };

//     // Function to randomly display quiz with level of diffivulty
//     function difficultyL1() {
//         quiz = questionsLevel1;
//         difficultyEasy.addEventListener("click", () =>{
//         selectedLevel = document.getElementsByClassName("difficulty");

// // let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectedLevel);

//     });
// }

// // function showResults(){};
// // function runQuiz() {
// //     startQuiz.classList.add('hide');
// //     ruleBox.classList.add.remove('hide');
// //     selection.classList.remove('hide')
// // };
//  // homeBtn.onclick = ()=>{
//     //     window.location.reload(); //reload the current window
    // };