import React, { Component } from 'react';

class Icon extends Component {
    render() {
        const icon = this.props.icon;
        const compass = "compass";

        return(
            <p className="weather-icon"><i className={icon != "" ? icon : compass}></i></p>
        )
    }
}

export default Icon;