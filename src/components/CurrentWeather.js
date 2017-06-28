import React, { Component } from 'react';

class CurrentWeather extends Component {
    render() {
        const temp = this.props.temp.temp;
        const weather = this.props.weather.main;
        const icon = this.props.icon;

        return(
            <div>
                <h2><span class="temp">It is currently {temp}</span>&deg;</h2>
                <p>{weather}</p>
                <p><i className={icon}></i></p>
            </div>
        )
    }
}

export default CurrentWeather;