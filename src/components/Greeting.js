import React, { Component } from 'react';
import moment from 'moment';

class Greeting extends Component {
    getGreeting() {
        // pull out am or pm and return relevant greeting
        let time = moment().format('MMMM Do YYYY, h:mm:ss a');
        let period = time.split(", ")[1].toString();
        period = period.substring(period.length - 2);

        if (period == "am") return "Good morning!"
        else if (period == "pm") return "Good evening!"
        else return "Hello!"
    }

    render() {
        return(
            <div>
                <h2 className="greeting">{this.getGreeting()}</h2>
            </div>
        )
    }
}

export default Greeting;