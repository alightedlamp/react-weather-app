import React, { Component } from 'react';

import compassIcon from '../img/compass.svg';

class CurrentWeather extends Component {
    render() {
        const tempData = this.props.tempData;
        const weatherData = this.props.weatherData;
        const currentTemp = this.props.currentTemp;
        const scale = this.props.scale;
        const icon = this.props.icon;
        const toggleScale = this.props.toggleScale;

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
                {Object.keys(tempData).length > 0 && Object.keys(weatherData).length > 0 &&
                    <div>
                        <h3>{weatherData.description}, {currentTemp}&deg;{scale}</h3>
                        <ul className="additional-info">
                            <li>Humidity: {tempData.humidity}%</li>
                            <li>Pressure: {tempData.pressure}</li>
                        </ul>
                        <div>
                            <button className="btn" onClick={() => toggleScale(currentTemp)}>Scale: {scale === 'F' ? 'C' : 'F'}</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CurrentWeather;