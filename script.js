// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables that store the characters that we can use
var specialChar = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var numberChar = '1234567890';
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRESTUVWXYZ';

//An array holding the character types selected by the user
var activeChar = [];

function generatePassword (){
  //Variables that hold the user's preferences
  var passwordLength = prompt('How many characters de you want? Enter a number between 8 and 128.');

  var isLowercase = confirm('Do you want to add lowercase characters?');

  var isUppercase = confirm('Do you want to add uppercase characters?');

  var isNumber = confirm('Do you want to add numbers?');

  var isSpecial = confirm('Do you want to add special characters?');

  if(passwordLength < 8 || passwordLength > 128){
    
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
