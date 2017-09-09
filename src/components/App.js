import React, { Component } from 'react';
import axios from 'axios';

import icons from '../icons.json';

import Greeting from './Greeting';
import CurrentWeather from './CurrentWeather';
import LocationForm from './LocationForm';

class App extends Component {
  constructor() {
    super();

    this.getWeather = this.getWeather.bind(this);
    this.toggleScale = this.toggleScale.bind(this);

    this.state = {
        coords: [],
        tempData: {},
        weatherData: {},
        scale: 'F',
        currentTemp: '',
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
      const units = "imperial";

      axios.get(base_url, {
          params: {
              lat: coords[0],
              lon: coords[1],
              units: units,
              APPID: appId
          }
      }).then(response => {
          const tempData = response.data.main;
          const weatherData = response.data.weather[0];

          this.setState({
            weatherData,
            tempData,
            currentTemp: tempData.temp
          });

          const icon = this.getIcon(weatherData);
          this.setState({ icon });
      });
  }
  toggleScale(temp) {
    let currentTemp;
    if (this.state.scale === 'C') {
      currentTemp = (this.state.currentTemp * 1.8) + 32;
      this.setState({
        scale: 'F',
        currentTemp: currentTemp
      });
    }
    else {
      currentTemp = (this.state.currentTemp - 32) / 1.8;
      this.setState({
        scale: 'C',
        currentTemp: currentTemp
      });
    }
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
      <div className="app">
        <div>
          <Greeting coords={this.state.coords} />
        </div>
        <CurrentWeather toggleScale={this.toggleScale} {...this.state} />
      </div>
    );
  }
}

export default App;
