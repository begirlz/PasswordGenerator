// Assignment Code
var generateBtn = document.querySelector("#generate");
var CharSets = {
    uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowers: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: "!@#$%^&*"
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var pwdCharset = "";
    var pwdResult = "";

    //Check if length is a number; If so continue
    var pwdLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
    if (isNaN(pwdLength)) {
        alert("Invalid Input! \nPlease enter number between 8 to 128 only");
        return pwdResult;
    } else {
        //Check if password length is bettwen 8 to 128
        if (pwdLength >= 8 && pwdLength <= 128) {
            var pwdUppers = confirm("Do you want to include uppercase?");
            if (pwdUppers) {
                pwdCharset += CharSets.uppers;
            };

            var pwdLowers = confirm("Do you want to include lowercase?");
            if (pwdLowers) {
                pwdCharset += CharSets.lowers;
            };

            var pwdNumbers = confirm("Do you want to include numeric?");
            if (pwdNumbers) {
                pwdCharset += CharSets.numbers;
            };

            var pwdSpecials = confirm("Do you want to include special characters?");
            if (pwdSpecials) {
                pwdCharset += CharSets.symbols;
            };

            // Validating at least one character type need to be selected
            if (pwdLength && (pwdUppers || pwdLowers || pwdNumbers || pwdSpecials)) {
                for (var i = 0; i <= pwdLength; i++) {
                    pwdResult += pwdCharset[Math.floor(Math.random() * pwdCharset.length)];
                }
                return pwdResult;
            } else {
                alert("At least one character type should be selected");
                return pwdResult;
            }
        } else {
            alert(pwdLength + " is not between 8 to 128\nPlease enter number between 8 to 128 only");
            return pwdResult;
        }
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);