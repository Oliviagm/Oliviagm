/**
 * script to hide answers when not toggled
 * help from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
 */

let answers = ["Just for testing", "", "", "", "", "", "", ""];

let button = document.getElementById("b1");

button.addEventListener("click", toggle);

let aID = "a";
let bID = "b";
for (i = 1; i < 9; i++) {
  let answerID = aID + i;
  let button = bID + i;
  function toggle() {
    answer = document.getElementById(answerID);
    console.log(answer);
    console.log(answer.style.display);
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  }
  document.getElementById(button).addEventListener("click", toggle);
}
