const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertButton");

const errorMessage = document.getElementById("error");
const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

function showError(message) {
  errorMessage.textContent = message;
  celsiusResult.textContent = "-- °C";
  fahrenheitResult.textContent = "-- °F";
  kelvinResult.textContent = "-- K";
}

function convertTemperature() {
  const value = Number(temperatureInput.value);
  const unit = unitSelect.value;

  errorMessage.textContent = "";

  if (temperatureInput.value.trim() === "") {
    showError("Please enter a temperature value.");
    return;
  }

  let celsius;

  if (unit === "celsius") {
    celsius = value;
  } else if (unit === "fahrenheit") {
    celsius = (value - 32) * 5 / 9;
  } else {
    celsius = value - 273.15;
  }

  if (celsius < -273.15) {
    showError("Temperature cannot be below absolute zero.");
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
  fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
  kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
}

convertButton.addEventListener("click", convertTemperature);