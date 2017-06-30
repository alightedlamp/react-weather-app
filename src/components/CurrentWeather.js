import React, { Component } from 'react';

class CurrentWeather extends Component {
    getInitialState() {
        return "loading...";
    }
    render() {
        const temp = this.props.temp;
        const tempF = parseInt(this.props.temp.temp);
        const tempC = parseInt((5/9) * (tempF - 32));
        const weather = this.props.weather;
        const icon = this.props.icon;

        return(
            <div>
                <p className="weather-icon"><i className={icon}></i></p>
                <h3>{weather.description}, {tempF}&deg;F | {tempC}&deg;C</h3>
                <ul className="additional-info">
                    <li>Humidity: {temp.humidity}%</li>
                    <li>Pressure: {temp.pressure}</li>
                </ul>
            </div>
        )
    }
}

export default CurrentWeather;