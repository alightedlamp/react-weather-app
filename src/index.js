import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import LocationForm from './components/LocationForm';

import './css/App.css';
import './css/index.css';

const Root = () => {
    return(
        <App />
    )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
