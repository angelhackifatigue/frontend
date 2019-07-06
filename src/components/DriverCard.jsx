import React, { Component } from 'react'


export class DriverCard extends Component {
    render(props) {
        return (
            <div>
                <div className="container driver-card ">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="driver-photo-container">
                                <img src={this.props.driverPhotoUrl} />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <p className="driver-name">Driver name: {this.props.name} </p>
                            <p> Ferrying Passenger: {this.props.passengerName}  </p>
                            <p>Current Speed: {this.props.currSpeed} </p>
                        </div>
                        <div className="col-md-5">
                            <p> Risk Level: {this.props.riskLvl} </p>
                            <p>Number of active hours: {this.props.numActiveHours} </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DriverCard
