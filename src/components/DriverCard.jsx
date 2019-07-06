import React, { Component } from 'react'


export class DriverCard extends Component {
    render() {
        return (
            <div>
                {
                    this.props.riskLvl > 0 ?
                        <div>
                            <div className="container driver-card ">
                                <div className="row">
                                    <div className="col-md-2 centered-container">
                                        <div className="driver-photo-container">
                                            <img alt="driver" src={this.props.driverPhotoUrl} />
                                        </div>
                                    </div>
                                    <div className="col-md-4 centered-container">
                                        <p>Driver name: {this.props.name} </p>
                                        <p> Ferrying Passenger: {this.props.passengerName}  </p>
                                        <p>Current Speed: {this.props.currSpeed} </p>
                                    </div>
                                    <div className="col-md-4 centered-container">
                                        <p className="text-center"> Risk Level: </p>
                                        <p className="text-center risk-level">{this.props.riskLvl} </p>
                                        <p>Number of active hours: {this.props.numActiveHours} </p>
                                    </div>
                                    <div className="col-md-2 centered-container">

                                        <button className="btn mb-3 btn-primary"> Send Alert </button>



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
