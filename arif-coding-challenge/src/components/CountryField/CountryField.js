import React from 'react'
import Country from '../../containers/Country'
import DevicesList from '../../containers/DevicesList'
import './country.scss';

const CountryFields = () => (

	<section id="tabs">
	    <div className="container">
		    <div className="row">
			    <Country countryName="Europe" countryString="eu" />
			    <Country countryName="US" countryString="us" />
		    </div>
			<div className="row" id="results">
				<DevicesList />
			</div>
	    </div>
	</section>
);

export default CountryFields;

