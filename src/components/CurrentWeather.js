import React, { Component } from 'react';

class CurrentWeather extends Component {
    render() {
        const temp = this.props.temp;
        const weather = this.props.weather;
        const icon = this.props.icon;

        // if (weather.id >= 200 && weather.id <= 299) return "thunderstorm";
        // if (weather.id >= 300 && weather.id <= 299) return "drizzle";
        // if (weather.id >= 500 && weather.id <= 499) return "rain";
        // if (weather.id >= 600 && weather.id <= 699) return "snow";
        // if (weather.id >= 700 && weather.id <= 799) return "atmosphere";
        // if (weather.id == 800) return "clear";
        // if (weather.id >= 801 && weather.id <= 899) return "clouds";
        // if (weather.id >= 900 && weather.id <= 906) return "extreme";
        // if (weather.id >= 951 && weather.id <= 962) return "other";

        return(
            <div>
                <p className="weather-icon"><i className={icon}></i></p>
                <h2>{weather.description}, {temp.temp}&deg;</h2>
                <ul className="additional-info">
                    <li>Humidity: {temp.humidity}</li>
                    <li>Pressure: {temp.pressure}</li>
                </ul>
            </div>
        )
    }
}

export default CurrentWeather;