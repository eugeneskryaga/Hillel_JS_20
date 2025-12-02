let checkSum;
let tipPercentage;
let tipAmount;
let result;

checkSum = prompt("Enter check summ: ");
tipPercentage = prompt("Enter tip percentage: ");

if (checkSum === null || tipPercentage === null) {
  alert("Canceled.");
} else {
  checkSum = Number(checkSum);
  tipPercentage = Number(tipPercentage);
  if (Number.isFinite(checkSum) && checkSum > 0) {
    if (
      Number.isFinite(tipPercentage) &&
      tipPercentage >= 0 &&
      tipPercentage <= 100
    ) {
      tipAmount = (checkSum / 100) * tipPercentage;
      result = checkSum + tipAmount;
      alert(
        `Chek summ: ${checkSum}, tip: ${tipPercentage}, tip amount: ${tipAmount}, total summ to pay: ${result}.`
      );
    } else {
      alert("Invalid data input!");
    }
  } else {
    alert("Invalid data input!");
  }
}
