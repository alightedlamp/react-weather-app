import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './css/App.css';
import './css/weather-icons-wind.min.css';
import './css/weather-icons.min.css';

const Root = () => {
    return(
        <App />
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
