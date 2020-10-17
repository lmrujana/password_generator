# Password Generator

## Objective

To create a web app that generates a random password given user specifications. Password must be between 8 and 128 characters long, and it must contain at least one character type (lowercase, uppercase, numbers and/or special).

## Solution

To create this app I used JavaScript. I stored the different character as string in variables correspoding to each character type. This characters would later be added to an "active charaters" array, if the user selected to add them by means of prompts messages. From this custom array, the characters where randomly selected using a for loop. Each character was added to an initial empty string, til the desired password length was achived. The result was then display in the textarea element in the document.

If the character lenght did not match the requirements or no character type was selected, an alert message would be displayed alerting the user and preventing the program from generating a password. 
