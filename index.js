const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error");

const availableNotes = ["2000", "500", "100", "20", "10", "5", "1"];

var noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", validateBillAndCash);

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
  if (billAmount.value >= 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      calculate(Number(cashGiven.value) - Number(billAmount.value));
    } else {
      showMessage("Do you want to wash the dishes?");
    }
  } else {
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