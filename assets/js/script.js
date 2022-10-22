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
const userName = document.getElementById("user-name-input")
const nextBtn = document.getElementById("next-btn")
const selection = document.getElementById("selection-area")
const questionsArea = document.getElementById("question-box-area")


nextBtn.addEventListener("click", function() {

    console.log(userName.value, "dhjdhvfhve")
    userName.innerText = userName.value
    selection.innerText = userName.value;
    questionsArea.innerText = userName.value;
}
);

// const gameRule = document.getElementsByClassName("game-rule-icon");
// const ruleBox = document.getElementById("rule-box");
// gameRule.onclick = function () {
//   if (ruleBox.style.display !== "none") {
//     ruleBox.style.display = "none";
//   } else {
//     ruleBox.style.display = "block";
//   }
// };


