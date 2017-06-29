import React from 'react';
import ReactDOM from 'react-dom';
import Typekit from 'react-typekit';

import App from './components/App';

import './css/weather-icons-wind.min.css';
import './css/weather-icons.min.css';
import './css/App.css';

const Root = () => {
    return(
        <div>
            <App />
            <Typekit kitId="eot1rpm" />
        </div>
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
