import React from 'react'
import { connect } from 'react-redux'
import { filterDevicesCountryWise } from '../../actions'

let Select = ({ filterDevices, country, os }) => (
  
  <div className="buttons">
	  <select onChange={() => { filterDevices(country, os) }}>
		<option val="">Choose OS</option>
		<option val="ANDROID">Android</option>
		<option val="IOS">IOS</option>
	  </select>
</div>
);

const mapStateToProps = (state) => ({
  country: state.country
})

const mapDispatchToProps = {
  filterDevices: filterDevicesCountryWise
}

Select = connect(
  mapStateToProps,
  mapDispatchToProps
)(Select)

export default Select;
