// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '#', '$', '&', '%'];
var result = "";

var userChoices = {
}

var userChoicesArr = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}

generateBtn.addEventListener("click", writePassword)

function confirmPasswordLength() {
  passwordLength = prompt('Choose a password length of at least 8 characters but no more than 128 charaters')
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('Invalid Input')
    confirmPasswordLength()
  }
}
function confirmUpper() {
  userChoices.upperChoice = confirm('Do you want upper case letters in your password?')
  if (userChoices.upperChoice) {
    userChoicesArr.push("upper")
  }
  console.log(userChoices.upperChoice);

}
function confirmNumeric() {
  userChoices.numericChoice = confirm('Do you want numbers in your password?')
  if (userChoices.numericChoice) {
    userChoicesArr.push("numeric")
  }
  console.log(userChoices.numericChoice);

}
function confirmLower() {
  userChoices.lowerChoice = confirm('Do you want lower case letters in your password?')
  if (userChoices.lowerChoice) {
    userChoicesArr.push("lower")
  }
  console.log(userChoices.lowerChoice);

}
function confirmSpecial() {
  userChoices.specialChoice = confirm('Do you want special charaters in your password?')
  if (userChoices.specialChoice) {
    userChoicesArr.push("special")
  }
  console.log(userChoices.specialChoice);

}
function generatePassword() {
  confirmPasswordLength()
  confirmUpper()
  confirmLower()
  confirmNumeric()
  confirmSpecial()

  if (!upper && !lower && !numeric && !special) {
    alert("You must choose a criteria");
  }

  /*userChoices = {
    upperChoice: true,
    lowerChoice: true,
    numericChoice: true,
    specialChoice: true
  }

  userChoicesArr = [
    "upper",
    "lower",
    "numeric",
    "speciaChoice"
  ]
  */
 console.log(userChoicesArr)
  for (var i = 0; i < passwordLength; i++) {
    //result += userChoices(Math.floor(Math.random() * userChoices.passwordLength));

    switch (userChoicesArr[Math.floor(Math.random() * userChoicesArr.length)]) {
      case "upper":
        var upperIndex = Math.floor(Math.random() * upper.length);
        var upperResult = upper[upperIndex];
        result += upperResult;
        console.log(result);
        break;

      case "lower":
        var lowerIndex = Math.floor(Math.random() * lower.length);
        var lowerResult = lower[lowerIndex];
        result += lowerResult;
        console.log(result);
        break;

      case "numeric":
        var numericIndex = Math.floor(Math.random() * numeric.length);
        var numericResult = numeric[numericIndex];
        result += numericResult;
        console.log(result);
        break;

      case "special":
        var specialIndex = Math.floor(Math.random() * special.length);
        var specialResult = special[specialIndex];
        result += specialResult;
        console.log(result);
        break;


      default:
        break;
    }

    // if (userChoices.upperChoice) {
    //   var upperIndex = Math.floor(Math.random() * upper.length);
    //   var upperResult = upper[upperIndex];
    //   result += upperResult;
    //   console.log(result);
    // }
    // if (userChoices.lowerChoice) {
    //   var lowerIndex = Math.floor(Math.random() * lower.length);
    //   var lowerResult = lower[lowerIndex];
    //   result += lowerResult;
    //   console.log(result);
    // }

    // if (userChoices.numericChoice) {
    //   var numericIndex = Math.floor(Math.random() * numeric.length);
    //   var numericResult = numeric[numericIndex];
    //   result += numericResult;
    //   console.log(result);
    // }

    // if (userChoices.specialChoice) {
    //   var specialIndex = Math.floor(Math.random() * special.length);
    //   var specialResult = special[specialIndex];
    //   result += specialResult;
    //   console.log(result);
    // }

  }
  return result
}



