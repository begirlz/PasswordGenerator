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
    var pwdConfirmMsg = "";
    //Check if length is a number; If so continue
    var pwdLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");
    if (isNaN(pwdLength)) {
        alert("Invalid Input! \nPlease enter number between 8 to 128 only");
        return pwdResult;
    } else if (pwdLength.length > 0) {
        //Check if password length is bettwen 8 to 128
        if (pwdLength >= 8 && pwdLength <= 128) {
            pwdConfirmMsg += ('Password Length is: ' + pwdLength + '\n');
            var pwdUppers = confirm("Do you want to include uppercase?");
            if (pwdUppers) {
                pwdCharset += CharSets.uppers;
                pwdConfirmMsg += ('Include Uppercase: ' + pwdUppers + '\n');
            };

            var pwdLowers = confirm("Do you want to include lowercase?");
            if (pwdLowers) {
                pwdCharset += CharSets.lowers;
                pwdConfirmMsg += ('Include Lowercase: ' + pwdLowers + '\n');
            };

            var pwdNumbers = confirm("Do you want to include numeric?");
            if (pwdNumbers) {
                pwdCharset += CharSets.numbers;
                pwdConfirmMsg += ('Include Numberic: ' + pwdNumbers + '\n');
            };

            var pwdSpecials = confirm("Do you want to include special characters?");
            if (pwdSpecials) {
                pwdCharset += CharSets.symbols;
                pwdConfirmMsg += ('Include Special Characters: ' + pwdSpecials + '\n');
            };

            var pwdConfirm = confirm(pwdConfirmMsg);
            if (pwdConfirm) {
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
                return pwdResult;
            }
        } else {
            alert("");
            return pwdResult;
        }
    } else {
        alert("Password length cannot be empty");
        return pwdResult;
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);