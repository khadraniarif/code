import React from 'react'
import { connect } from 'react-redux'
import { fetchDevices } from '../../actions'
import Select from '../Select/Select';
import './Button.scss';

let Button = ({ getDevices, country }) => (
  
  <div className="buttons">
	  <button
		onClick={() => { getDevices(country) }}
		className="btn btn-primary btn-lg btn-block" >
		List Devices
	  </button>
  
	  <Select />
</div>
);

const mapStateToProps = (state) => ({
  country: state.country
})

const mapDispatchToProps = {
  getDevices: fetchDevices
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
