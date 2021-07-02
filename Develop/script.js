// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '#', '$', '&', '%'];
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
function confirmPasswordLength(){
   passwordLength = prompt('Choose a password length of at least 8 characters but no more than 128 charaters')
   console.log(passwordLength)
  if (passwordLength <8||passwordLength >128){
    window.alert('Invalid Input')
    confirmPasswordLength()
  }
}
function confirmUpper(){
  upper = confirm('Do you want upper case letters in your password?')
  console.log(upper)

}
function confirmNumeric(){
  numeric = confirm('Do you want numbers in your password?')
  console.log(numeric)

}
function confirmLower(){
  lower = confirm('Do you want lower case letters in your password?')
  console.log(lower)

}
function confirmSpecial(){
  special = confirm('Do you want special charaters in your password?')
  console.log(special)

}
function generatePassword(){
  confirmPasswordLength()
  confirmUpper()
  confirmLower()
  confirmNumeric()
  confirmSpecial()
}

var password = upper.concat(lower, numeric, special)

generateBtn.addEventListener("click", writePassword);





