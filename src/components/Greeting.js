import React, { Component } from 'react';
import moment from 'moment';

class Greeting extends Component {
    render() {
        const time = moment().format('h:mm:ss a');
        const hour = time.split(' ')[0];
        const period = time.split(' ')[1];

        let greeting;
        if (period === 'am') {
            greeting = 'Good morning!';
        }
        else if (period === 'pm' && hour > 12 && hour > 5) {
            greeting = 'Good afternoon!';
        }
        else {
            greeting = 'Good evening!';
        }
        return(
            <div>
                <h2 className="greeting">{greeting}</h2>
            </div>
        )
    }
}

export default Greeting;