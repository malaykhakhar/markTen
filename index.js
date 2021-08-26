const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error");

checkButton.addEventListener("click", validateBillAndCash);

function validateBillAndCash() {

  hideMessage();
  if (billAmount.value >= 0) {

    if (cashGiven.value >= billAmount.value) {
      console.log("asdas");
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