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

// let userrname = document.getElementById("user-name-input")
// const nextBtn = document.getElementById("next-btn")
// let usernameText = document.getElementById("user-name")

// nextBtn.addEventListener("click", function(){
//     console.log(userrname.value, "dhjdhvfhve")
//     usernameText.innerText = userrname.value
// }
// )


// let userName = document.getElementById('user-input-area');
// userName.addEventListener('submit', userInput);

function userInput(event){
  event.preventDefault();
  console.log('submitting ...');
  
  let enterName = enterName.input['username'].value;
  let onInput = document.getElementById('selection-area');
  // onInput = selection-area.innerHTML
  onInput.style.display ="block";

  userName.submit();

  console.log("userName submitted");
}

