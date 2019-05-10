import React from 'react'
import { connect } from 'react-redux'
import { getCountry } from '../actions'

let Country = ({ countryName, countryString, onClick, active }) => (
    
	<div  className="tabs-container" onClick={onClick}
            style={{ backgroundColor: active === countryString ? 'orange' : '' }}>
		<h2>{countryName}</h2>
    </div>
)


const mapStateToProps = (state) => ({
    active: state.country
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(getCountry(ownProps.countryString));
    }
})

Country = connect(
    mapStateToProps,
    mapDispatchToProps
)(Country)

export default Country;
