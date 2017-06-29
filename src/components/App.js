import React, { Component } from 'react';
import axios from 'axios';

import icons from '../icons.json';

import Greeting from './Greeting';
import CurrentWeather from './CurrentWeather';

class App extends Component {
  constructor() {
    super();

    this.getWeather = this.getWeather.bind(this);

    this.state = {
        coords: [],
        temp: {},
        weather: {},
        icon: ""
    };
  }

  getIcon(weather) {
    const weatherIcons = icons;

    const prefix = 'wi wi-';
    const code = weather.id;
    let icon = weatherIcons[code].icon;

    // If we are not in the ranges mentioned above, add a day/night prefix.
    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = 'day-' + icon;
    }

    return icon = prefix + icon;
  }

  getWeather(position) {
      const coords = [position.coords.latitude, position.coords.longitude];
      this.setState({ coords });

      const appId = "77f24c065514660d48a68b8d6a138ce2";
      const base_url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";

      axios.get(base_url, {
          params: {
              lat: coords[0],
              lon: coords[1],
              units: "imperial",
              APPID: appId
          }
      }).then(response => {
          const temp = response.data.main;
          const weather = response.data.weather[0];

          this.setState({ weather });
          this.setState({ temp });

          const icon = this.getIcon(weather);
          this.setState({ icon });

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
    return (
      <div className="App">
        <div className="App-header">
          <Greeting coords={this.state.coords} />
        </div>
        <CurrentWeather temp={this.state.temp} weather={this.state.weather} location={this.state.coords} icon={this.state.icon}/>

      </div>
    );
  }
}

export default App;
