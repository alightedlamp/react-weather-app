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
    getTime() {
        return moment().format('MMMM Do YYYY, h:mm:ss a');
    }

    render() {

        return(
            <div>
                <h1>{this.getGreeting(this.getTime())}</h1>
            </div>
        )
    }
}

export default Greeting;