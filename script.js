// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var numberChar = '1234567890';
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRESTUVWXYZ';
var activeChar = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
