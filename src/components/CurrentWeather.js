import React, { Component } from 'react';

class CurrentWeather extends Component {
    // toggleScale(scale, temp) {
    //     if (isFahrenheit) {
    //         scale = "celsius";
    //         temp = (5/9) * (temp - 32);
    //         return temp;
    //     }
    //     else {
    //         scale = "fahrenheit";
    //         temp = (temp * 9/5) + 32
    //         return temp
    //     }
    // }

    render() {
        const temp = this.props.temp;

        let scale = "fahrenheit";

        const isFahrenheit = scale === "fahrenheit";
        const buttonText = isFahrenheit ? "F" : "C";

        const weather = this.props.weather;
        const icon = this.props.icon;

        return(
            <div>
                <p className="weather-icon"><i className={icon}></i></p>
                <h3>{weather.description}, {temp.temp}&deg;</h3>
                <button onClick={() => this.toggleScale(temp.temp)} className="scale-toggle">{buttonText}</button>
                <ul className="additional-info">
                    <li>Humidity: {temp.humidity}%</li>
                    <li>Pressure: {temp.pressure}</li>
                </ul>
            </div>
        )
    }
}

export default CurrentWeather;