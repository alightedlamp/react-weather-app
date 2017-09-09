import React, { Component } from 'react';

import compassIcon from '../img/compass.svg';

class CurrentWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 'F',
            temp: {}
        }
        this.temp = this.props.temp;
    }
    swapScale() {

    }
    componentDidMount() {
        this.setState({ temp: this.temp })
    }
    render() {
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
                {Object.keys(this.temp).length > 0 && Object.keys(weather).length > 0 &&
                    <div>
                        <h3>{weather.description}, {this.state.temp.temp}&deg;{this.state.scale}</h3>
                        <ul className="additional-info">
                            <li>Humidity: {this.state.temp.humidity}%</li>
                            <li>Pressure: {this.state.temp.pressure}</li>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default CurrentWeather;