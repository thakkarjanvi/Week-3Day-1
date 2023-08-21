// Script 1: Prompt for the user's name and display a greeting
var userName = prompt("Please enter your name:");
if (userName !== null && userName !== "") {
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    alert("You did not enter a valid name. Please try again.");
}


 // Script 2: Sum of 2 numbers 
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num1) && !isNaN(num2)) {
    var sum = num1 + num2;

    alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
} else {
    alert("Invalid input. Please enter valid numbers.");}