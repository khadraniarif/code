import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import  RealDevices  from '../components/RealDevices/RealDevices';

let DeviceList = ({ lists, loading }) => {
    let topDevices = "";

    if (lists) {
        topDevices = lists.map((article, index) =>
            (
                <div key={`${index}`} className="row">
                    <RealDevices article={lists[index]} />
                </div>
            )
        )
    } else {
		topDevices = <div className="row error"><p>No Devices found.</p> <p>Please click Country tab. And click on List Devices button.</p></div>
	}
    if (loading) {
        topDevices = <h3 className="loading-indicator">Loading ...</h3>
    }

    return (
        <div>
            {topDevices}
        </div>
    )
}

const mapStateToProps = (state) => ({
    lists: state.json,
    loading: state.loading
})

DeviceList = connect(
    mapStateToProps,
    null
)(DeviceList)

export default DeviceList;