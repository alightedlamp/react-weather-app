import React, { Component } from 'react';
import axios from 'axios';

class CurrentWeather extends Component {
    constructor() {
        super();

        this.getWeather = this.getWeather.bind(this);

        this.state = {
            temp: [],
            weather: []
        };
    }
    getWeather(position) {
        var coords = [];
        coords[0] = position.coords.latitude;
        coords[1] = position.coords.longitude;

        const appId = "77f24c065514660d48a68b8d6a138ce2";
        const cb = "&callback=JSON_CALLBACK";
        const base_url = "http://api.openweathermap.org/data/2.5/weather";
        axios.get(base_url, {
            params: {
                lat: coords[0],
                lon: coords[1],
                units: "imperial",
                APPID: appId
            }
        }).then(response => {
            const temp = response.data.main;
            const weather = response.data.weather;

            this.setState({ weather });
            this.setState({ temp });

            console.log(weather);
            console.log(temp);
        });
    }
    componentDidMount() {
        const geoNotSupported = true;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather);
        }
        else {
            return geoNotSupported;
        }
    }

    render() {
        return(
            <div>
                <h2><span class="temp">{this.state.temp.temp}</span>&deg;</h2>
                <p>more info / graphics here</p>
            </div>
        )
    }
}

export default CurrentWeather;