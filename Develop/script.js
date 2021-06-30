// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var upper;
var lower;
var numeric;
var special;
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
  numeric = confirm('Do you want upper case letters in your password?')
  console.log(numeric)

}
function confirmLower(){
  lower = confirm('Do you want upper case letters in your password?')
  console.log(lower)

}
function confirmSpecial(){
  special = confirm('Do you want upper case letters in your password?')
  console.log(special)

}
function generatePassword(){
  confirmPasswordLength()
  confirmUpper()
  confirmLower()
  confirmNumeric()
  confirmSpecial()
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

