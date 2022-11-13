const inputName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const warningText = document.getElementById("warningText");
const warningIcon = document.getElementById("warningIcon");
let counterError = 0;
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//check input if it is empty or not
function checkInput(text) {
  if (text.value != "") {
    text.classList.remove("border-red-500");
    text.classList.add("border-Green");
  }
  if (text.value.length > 0) {
    if (text.classList.contains("border-Grey")) {
      text.classList.remove("border-Grey");
      text.classList.add("border-Green");
    }
  } else {
    text.classList.add("border-red-500");
    counterError++;
  }
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput(inputName);
  checkInput(email);
  if (validateEmail(email.value) == false) {
    email.classList.add("border-red-500");
    counterError++;
    warningText.classList.remove("hidden");
    warningIcon.classList.remove("hidden");
  } else {
    email.classList.add("border-Green");
    counterError = 0;
    warningText.classList.add("hidden");
    warningIcon.classList.add("hidden");
  }
  checkInput(message);
  if (counterError == 0) {
    alert("your email has been sent");
  }
});

// name.onkeyup = function (e) { track input
//   name.classList.add("border-Green");
//   name.classList.remove("border-Grey");
//   if (e.target.value.length == 0) {
//     name.classList.add("border-Grey");
//   }
// };
