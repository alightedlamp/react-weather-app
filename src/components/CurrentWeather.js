import React, { Component } from 'react';
import { HttpClient } from '../helpers';

class CurrentWeather extends Component {
    getWeather() {
        console.log('here');
        const geoNotSupported = true;
        var coords = [];

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                coords[0] = position.coords.latitude;
                coords[1] = position.coords.longitude;

                const client = new HttpClient();
                const base_url = "https://api.darksky.net/forecast/bf8b595964753a2d307f80ffc916bea9/"
                client.get(base_url + coords[0] + "," + coords[1], function(response) {
                    console.log("response is: " + response);
                });
        });
        }
        else {
            return geoNotSupported;
        }
    }

    render() {
        return(
            <div>
                <h2><span class="temp">{this.getWeather()}</span>&deg;</h2>
                <p>more info / graphics here</p>
            </div>
        )
    }
}

export default CurrentWeather;