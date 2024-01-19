let uppercaseLetterTab = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetterTab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numberTab = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbolTab = ["&", "#", "(", ")", "]", "!", "@", "$", "%", "*", "-", "_", "+", "=", "{", "}", "[", ".", "?", "/"];

let generatorTab;
let passwordTab;
let password;

let passwordLength;
let generateBtn = document.querySelector('#generateBtn');
let copyBtn = document.querySelector('#copyBtn');
let passwordArea = document.querySelectorAll('input')[0];

function newTab() {
    generatorTab = [];
    let option1 = document.querySelectorAll('input')[2];
    let option2 = document.querySelectorAll('input')[3];
    let option3 = document.querySelectorAll('input')[4];
    let option4 = document.querySelectorAll('input')[5];

    if (option1.checked) {
        // console.log(option1);
        for (let index = 0; index < uppercaseLetterTab.length; index++) {
            generatorTab.push(uppercaseLetterTab[index]);
        }
    }
    if (option2.checked) {
        // console.log(option2);
        for (let index = 0; index < lowercaseLetterTab.length; index++) {
            generatorTab.push(lowercaseLetterTab[index]);
        }
    }
    if (option3.checked) {
        // console.log(option3);
        for (let index = 0; index < numberTab.length; index++) {
            generatorTab.push(numberTab[index]);
        }
    }
    if (option4.checked) {
        // console.log(option4);
        for (let index = 0; index < symbolTab.length; index++) {
            generatorTab.push(symbolTab[index]);
        }
    }
    
    if (option1.checked == false && option2.checked == false && option3.checked == false && option4.checked == false) {
        // console.log("Error");
        alert('Error: Check at least one checkbox')
    }
    
    // console.log(generatorTab);

}

function generatePassword() {
    passwordTab = [];
    password = "";
    passwordLength = parseInt(document.querySelectorAll('input')[1].value);
    // console.log(passwordLength);

    if (passwordLength < 1 || passwordLength > 30 || isNaN(passwordLength)) {
        // console.log("Error");
        alert('Error: Enter a password length between 1 and 30')
    }
    else {
        for (let index = 0; index < passwordLength; index++) {
            let random = Math.floor(Math.random() * generatorTab.length);
            passwordTab.push(generatorTab[random]);
        }
    }
    // console.log(passwordTab);
    password = passwordTab.join('');
    // console.log(password);
}

function copy() {
    let copyText = password;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copied the text: " + copyText);
        })
}

generateBtn.addEventListener('click', () => {
    newTab();
    generatePassword();
    passwordArea.setAttribute('value', password)
    copyBtn.removeAttribute('disabled');
});

copyBtn.addEventListener('click', () => {
    copy();
});