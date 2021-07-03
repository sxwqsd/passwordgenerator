// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength;
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '#', '$', '&', '%'];
var result = "";

var userChoices = {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword)

function confirmPasswordLength(){
   passwordLength = prompt('Choose a password length of at least 8 characters but no more than 128 charaters')
   console.log(passwordLength)
  if (passwordLength <8||passwordLength >128){
    window.alert('Invalid Input')
    confirmPasswordLength()
  }
}
function confirmUpper(){
  userChoices.upperChoice = confirm('Do you want upper case letters in your password?')
  console.log(userChoices.upperChoice)

}
function confirmNumeric(){
  userChoices.numericChoice = confirm('Do you want numbers in your password?')
  console.log(userChoices.numericChoice)

}
function confirmLower(){
  userChoices.lowerChoice = confirm('Do you want lower case letters in your password?')
  console.log(userChoices.lowerChoice)

}
function confirmSpecial(){
  userChoices.specialChoice = confirm('Do you want special charaters in your password?')
  console.log(userChoices.specialChoice)

}
function generatePassword(){
  console.log(userChoices); 
  confirmPasswordLength()
  confirmUpper()
  confirmLower()
  confirmNumeric()
  confirmSpecial()

  console.log(userChoices);

  if(!upper&&!lower&&!numeric&&!special){
    userChoices = alert("You must choose a criteria");
  
  }

  if(userChoices.upperChoice){
    var upperIndex =  Math.floor(Math.random() * upper.length);
    var upperResult = upper[upperIndex];
    result += upperResult;
    console.log(result);
   
  }
  if(lower){
    userChoices += lower
    console.log(userChoices);
  }

  if(numeric) {
    userChoices += numeric
    console.log(userChoices);
  }

  if(special) {
    userChoices += special
    console.log(userChoices);
  }
  
  

  for (var i = 0; 1 < passwordLength; i++){
    result += userChoices.concat(Math.floor(Math.random() * userChoices.passwordLength));
  }
  return result



}















