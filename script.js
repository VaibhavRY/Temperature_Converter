function convertTemperature() {
    const celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    
    if (!isNaN(celsiusInput)) {
        const fahrenheitValue = (celsiusInput * 9/5) + 32;
        document.getElementById("fahrenheitInput").value = fahrenheitValue.toFixed(2);
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}

// Attach the convertTemperature function to the form's onsubmit event
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    convertTemperature();
});
