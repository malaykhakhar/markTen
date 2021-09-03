const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error");
var noOfNotes = document.querySelectorAll(".no-of-notes");

const nextButton = document.querySelector("#next-btn");
const labelCash = document.querySelector("#label-cash");
const table = document.querySelector("#change-table");
const footer = document.querySelector("#footer");

const availableNotes = ["2000", "500", "100", "20", "10", "5", "1"];


nextButton.addEventListener("click", nextButtonHandler);
checkButton.addEventListener("click", validateBillAndCash);

function nextButtonHandler() {
  hideMessage();
  labelCash.style.display = "none";
  cashGiven.style.display = "none";
  checkButton.style.display = "none";
  footer.style.position = "fixed";
  if (Number(billAmount.value) <= 0) {
    showMessage("Not a valid input. Try again!");
  } else {
    labelCash.style.display = "block";
    cashGiven.style.display = "block";
    checkButton.style.display = "block";
  }
}

function calculate(amount) {
  var notes;
  for (var i = 0; i < availableNotes.length; i++) {
    notes = Math.trunc(amount / availableNotes[i]);
    noOfNotes[i].innerHTML = notes;
    amount %= availableNotes[i];
  }
}

function validateBillAndCash() {
  hideMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      footer.style.position = "static";
      table.style.display = "table";
      calculate(Number(cashGiven.value) - Number(billAmount.value));
    } else {
      footer.style.position = "fixed";
      table.style.display = "none";
      showMessage("Do you want to wash the dishes?");
    }
  } else {
    footer.style.position = "fixed";
    table.style.display = "none";
    showMessage("Bill amount should be greater than 0.");
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerHTML = msg;
}