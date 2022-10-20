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



// Get the home page box
//let box = document.getElementsByClassName('home-page');

// User name display when the next button is clicked
let userName = document.getElementById("user-name-input")
const nextBtn = document.getElementById("next-btn")
let selection = document.getElementById("selection-area")
let questionsArea = document.getElementById("question-box-area")
// let usernameText = document.getElementById("username-txt")

nextBtn.addEventListener("click", function() {

    console.log(userName.value, "dhjdhvfhve")
    // usernameText.innerText = userName.value
    selection.innerText = userName.value;
    questionsArea.innerText = userName.value;
}
);

const gameRule = document.getElementsByClassName("game-rule-icon");
const ruleBox = document.getElementById("rule-box");
gameRule.onclick = function () {
  if (ruleBox.style.display !== "none") {
    ruleBox.style.display = "none";
  } else {
    ruleBox.style.display = "block";
  }
};

// let userName = document.getElementById('user-name-input');
// userName.addEventListener('submit', userInput);

// function userInput(event){
//   event.preventDefault();
//   console.log('submitting ...');
  
//   let enterName = enterName.input['username'].value;
//   let onInput = document.getElementById('selection-area');
//   // onInput = selection-area.innerHTML
//   onInput.style.display ="block";

//   userName.submit();

//   console.log("userName submitted");
// }

