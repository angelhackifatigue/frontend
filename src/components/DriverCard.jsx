import React, { Component } from 'react'


export class DriverCard extends Component {
    render() {
        return (
            <div>
                {
                    this.props.riskLvl>2 ?
                        <div>
                            <div className="container driver-card ">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="driver-photo-container">
                                            <img alt="driver" src={this.props.driverPhotoUrl} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Driver name: {this.props.name} </p>
                                        <p> Ferrying Passenger: {this.props.passengerName}  </p>
                                        <p>Current Speed: {this.props.currSpeed} </p>
                                    </div>
                                    <div className="col-md-4">
                                       <p>Number of active hours: {this.props.numActiveHours} </p>
                                    </div>
                                    <div className="col-md-2">
                                        <p> Risk Level: {this.props.riskLvl} </p>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        :
                        null
                }
            </div>

        )
    }
}

export default DriverCard
