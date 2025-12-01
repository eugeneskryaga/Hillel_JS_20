let isInputValid = false;
let word;

while (isInputValid === false) {
    word = prompt("Enter one word: ");
    if (word === null) {
        alert("Canceled.");
    } else if (word.trim().includes(" ") || word.trim() === "") {
        alert("Invalid data input.");
    } else {
        isInputValid = true;
        word = word.trim();
        if (word.length % 2 === 0) {
            alert(`Word: ${word}, relust: ${word[word.length / 2 - 1]}${word[word.length / 2]}`)
        } else {
            alert(`Word: ${word}, relust: ${word[Math.floor(word.length / 2)]}`)
        }
    }

}
