
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

function generatePassword() {
    var passwordLength = parseInt(prompt("How long would you like your password?"));
    var optionsArr = []
    var password = ``;

    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
        alert("Pick a number greater than 8 or less than 128")
        return generatePassword()
    }

    var lowerCase = confirm("Do you want lowercase characters?");
    var upperCase = confirm("Do you want uppercase characters?");
    var numeric = confirm("Do you want numeric values?");
    var special = confirm("Do you want special characters?");
    console.log(passwordLength, lowerCase, upperCase, numeric, special);



    if (lowerCase) {
        optionsArr = optionsArr.concat(lowerCasedCharacters);
    }
    if (upperCase) {
        optionsArr = optionsArr.concat(upperCasedCharacters);
    }
    if (numeric) {
        optionsArr = optionsArr.concat(numericCharacters);
    }
    if (special) {
        optionsArr = optionsArr.concat(specialCharacters);
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * optionsArr.length)
        var randomCharacter = optionsArr[randomIndex]
        password += randomCharacter
    }

    return password;

};


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

