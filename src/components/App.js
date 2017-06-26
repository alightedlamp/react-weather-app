import React, { Component } from 'react';
import logo from '../img/weather-logo.svg';
import CurrentWeather from './CurrentWeather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What's It Like Outside?</h2>
        </div>
        <CurrentWeather />

      </div>
    );
  }
}

export default App;
