import React, { Component } from 'react'

export class DriverCard extends Component {
    render(props) {
        return (
            <div>
                <div className="container driver-card ">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="">
                                
                            </div>
                        </div>
                        <div className="col-md-10">
                            <p className="driver-name">{this.props.name} </p>
                            <p> {this.props.riskLvl} </p>
                            <p>{this.props.hasPassenger}  </p>
                            <p>{this.props.currentSpeed} </p>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DriverCard
