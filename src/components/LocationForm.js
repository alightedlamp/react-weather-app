import React, { Component } from 'react';

class LocationForm extends Component {
	showWeather() {
		const zip = this.locationInput.value;
		console.log("the weather is...");
	}

	render() {
		return(
			<div>
				<form onSubmit={(e) => this.showWeather(e)}>
				  <input type="text" name="zipcode" placeholder="What's it like outside?" defaultValue="City or Zip Code"  ref={(input) => { this.locationInput = input }} /><br />
				  <button type="submit">Show weather</button>
				</form>
			</div>
		)
	}
}

export default LocationForm;