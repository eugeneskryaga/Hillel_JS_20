let checkSum;
let tipPercentage;
let isInputValid = false;
let tipAmount;
let result;

while (isInputValid === false) {
    checkSum = Number(prompt("Enter check summ: "));
    tipPercentage = Number(prompt("Enter tip percentage: "));

    if (Number.isFinite(checkSum) && checkSum > 0) {
       if (Number.isFinite(tipPercentage) && tipPercentage > 0 && tipPercentage <= 100) {
        isInputValid = true;
        tipAmount = checkSum / 100 * tipPercentage;
        result = checkSum + tipAmount;
        alert(`Chek summ: ${checkSum}, tip: ${tipPercentage}, tip amount: ${tipAmount}, total summ to pay: ${result}.`);
       } else {
        alert("Invalid data input!");
       }
    }  else {
        alert("Invalid data input!");
    }
}

