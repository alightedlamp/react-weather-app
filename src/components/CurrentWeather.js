import React, { Component } from 'react';

import compassIcon from '../img/compass.svg';

class CurrentWeather extends Component {
    render() {
        const temp = this.props.temp;
        const tempF = parseInt(this.props.temp.temp);
        const tempC = parseInt((5/9) * (tempF - 32));
        const weather = this.props.weather;
        const icon = this.props.icon;

        return(
            <div>
                {icon.length > 0 ? (
                    <p className="weather-icon"><i className={icon}></i></p>
                ) : (
                    <div>
                        <img className="compass" src={compassIcon} />
                        <p>Locating...</p>
                    </div>
                )
                }
                {Object.keys(temp).length > 0 && Object.keys(weather).length > 0 &&
                    <div>
                        <h3>{weather.description}, {tempF}&deg;F | {tempC}&deg;C</h3>
                        <ul className="additional-info">
                            <li>Humidity: {temp.humidity}%</li>
                            <li>Pressure: {temp.pressure}</li>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default CurrentWeather;