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
    alert('Invalid password length. Please start over.'); //Length validation
  } else if(!isLowercase && !isUppercase && !isNumber && !isSpecial){
    alert('No characters were selected. Please start over'); //Validates that at least one character type is selected
  } else {
    //The if statements add the characters selected by the user to the activeChar array
    if(isLowercase){
      activeChar.push(lowerChar);
    };

    if(isUppercase){
      activeChar.push(upperChar);
    };

    if(isNumber){
      activeChar.push(numberChar);
    };

    if(isSpecial){
      activeChar.push(specialChar);
    };

    var p_word = "";

    //for loop that randomly selects a character and adds it to p_word
    for(var i = 0; i < passwordLength; i++){
      var charTypeSelector = Math.floor(Math.random()*activeChar.length);
      var charType = activeChar[charTypeSelector];
      var charSelector = Math.floor(Math.random()*charType.length);
      var char = charType[charSelector];
      p_word = p_word + char;
    };
  };
  return p_word;
}

// Write password to the #password input
function writePassword() {
  activeChar = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password){
  passwordText.value = password;
  } else {
  passwordText.value = 'Invalid input. Please enter valid input.';
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
