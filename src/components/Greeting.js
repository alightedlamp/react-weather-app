import React, { Component } from 'react';
import moment from 'moment';

class Greeting extends Component {
    getGreeting(time) {
        // pull out am or pm and return relevant greeting
        let period = time.split(", ")[1].toString();
        period = period.substring(period.length - 2);

        if (period == "am") return "Good morning!"
        else if (period == "pm") return "Good evening!"
        else return "Hello!"
    }

    render() {
        const time = moment().format('MMMM Do YYYY, h:mm:ss a');

        return(
            <div>
                <h1>{this.getGreeting(time)}</h1>
                <h2>{time}</h2>
            </div>
        )
    }
}

export default Greeting;