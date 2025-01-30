function calculateBMI() {
    // Get the values from the input fields using their IDs
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    // Check if the input values are valid
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    // If the inputs are invalid, show an error message
    document.getElementById('result').innerHTML = "Please enter valid height and weight."
    return; // Exit the function
    }
    // Calculate BMI: weight (kg) / (height (m) * height (m))
    const bmi = weight / (height * height);
    // Display the BMI result in the HTML element with id="result"
    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)}.`;
    // Check the BMI category
    let status;
    if (bmi < 18.5) {
    status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
    status = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
    status = "Overweight";
    } else {
    status = "Obesity";
    }
    // Display the BMI classification status
    document.getElementById('result').innerHTML += ` You are classified as: ${status}.`;
   }
console.log(result)