 // Function for Exercise 1
 function showAlert() {
    alert("Button Clicked!");
}

// Function for Exercise 2
function calculateSum() {
    // Get the input values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Check if the input values are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById("result").textContent = "The sum of " + num1 + " and " + num2 + " is: " + sum;
    } else {
        document.getElementById("result").textContent = "Invalid input. Please enter valid numbers.";
    }
}