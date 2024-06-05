import TemperatureInput from "./TemperatureInput";
import { useState } from "react";
import BoilingVerdict
 from "./BoilingVerdict";
export default function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('C');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('C');
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('F');
    };

    const celsius = scale === 'F' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'C' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <>
            <TemperatureInput scale="C" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="F" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </>
    );
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
