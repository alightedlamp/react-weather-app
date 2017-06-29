import React, { Component } from 'react';

class LocationForm extends Component {
	showWeather() {
		const zip = this.locationInput.value;
	}

	render() {
		return(
			<div>
				<form className="location-form" onSubmit={(e) => this.showWeather(e)}>
				  <input type="text" name="zipcode" placeholder="What's it like outside?" defaultValue="City or Zip Code"  ref={(input) => { this.locationInput = input }} />
				  <button type="submit">Show weather</button>
				</form>
			</div>
		)
	}
}

export default LocationForm;