import React from 'react';

import DriverCard from "./components/DriverCard"

import './App.css';
import './screen.css';




class App extends React.Component {
  render() {
    const { driver } = this.props;
    
    return (
      <div className="App">
        
        <DriverCard
          driverPhotoUrl={driver.driverPhotoUrl}
          name={driver.driverName}
          riskLvl={driver.riskLvl}
          passengerName={driver.passengerName}
          currSpeed={driver.currSpeed}
          numActiveHours={driver.numActiveHours} />

        <DriverCard
          driverPhotoUrl={driver.driverPhotoUrl}
          name={driver.driverName}
          riskLvl= "4"
          passengerName={driver.passengerName}
          currSpeed={driver.currSpeed}
          numActiveHours={driver.numActiveHours} />
      </div>

    );
  }

}

export default App;
