document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let heightFeet = parseFloat(document.getElementById('heightFeet').value);
    let heightInches = parseFloat(document.getElementById('heightInches').value);
    let weightUnit = document.getElementById('weightUnit').value;
    let heightUnit = document.getElementById('heightUnit').value;

    // Convert height to meters if in feet/inches
    let height;
    if (heightUnit === 'ft') {
        height = (heightFeet * 0.3048) + (heightInches * 0.0254); // Convert feet and inches to meters
    } else {
        height = heightFeet; // Height is already in meters
    }

    // Convert weight to kg if in lbs
    if (weightUnit === 'lbs') {
        weight = weight * 0.453592; // Convert lbs to kg
    }

    // Calculate BMI
    let bmi = weight / (height * height);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display result
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>Your BMI: ${bmi.toFixed(1)}</h2>
        <p>Category: ${category}</p>
    `;
});