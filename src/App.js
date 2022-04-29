import React, {useState} from 'react'
import './css/index.css'
import './css/normalize.css'
import './css/skeleton.css'

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function colorFromCelsius(celsius) {
  if (celsius < 0) {
    return "blue";
  } else if (celsius > 30) {
    return "red";
  } else {
    return "black";
  }
}

function App() {
  const [celsius, setCelsius] = useState(21)
  const [fahrenheit, setFahrenheit] = useState(toFahrenheit(21))
  const [celsiusFieldHasError, setCelsiusFieldHasError] = useState(false)
  const [fahrenheitFieldHasError, setFahrenheitFieldHasError] = useState(false)
  const [conversion, setConversion] = useState(0)

  var numbers = /^-?[0-9.]+$/;

  function handleCelsiusChange(event) {
    setCelsius(event.target.value);
    setFahrenheitFieldHasError(false);
    if (event.target.value.match(numbers)) {
      setFahrenheit(toFahrenheit(event.target.value));
      setCelsiusFieldHasError(false);
    } else {
      setCelsiusFieldHasError(true);
      setFahrenheit("");
    }
  }

  function handleFahrenheitChange(event) {
    setFahrenheit(event.target.value);
    setCelsiusFieldHasError(false);
    if (event.target.value.match(numbers)) {
      setCelsius(toCelsius(event.target.value));
      setFahrenheitFieldHasError(false);
    } else {
      setFahrenheitFieldHasError(true);
      setCelsius("");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="six columns">
          <h3 className="label">Temperature in Celsius:</h3>
          <div className="celsius-field-wrapper">
            <input className="convertToCelsius"
              value={celsius}
              type="text"
              onChange={handleCelsiusChange}
              style={{
                margin: 0,
                borderColor: celsiusFieldHasError ? "#f30000" : "#D1D1D1",
                color: colorFromCelsius(celsius)
                }} />
            <span>˚C</span>
          </div>
        </div>

        <div className="six columns">
          <h3 className="label">Temperature in Fahrenheit:</h3>
          <div className="fahrenheit-field-wrapper">
            <input className="convertToFahrenheit"
              value={fahrenheit}
              type="text"
              onChange={handleFahrenheitChange}
              style={{
                margin: 0,
                borderColor: fahrenheitFieldHasError ? "#f30000" : "#D1D1D1",
                color: colorFromCelsius(celsius)
                }} />
            <span>˚F</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
