import React from 'react';

import DriverCard from "./components/DriverCard"

import './App.css';

function App() {
  return (
    <div className="App">
      <DriverCard name="James" riskLvl="9"  hasPassenger="yes" currSpeed="90km/h"/> 
    </div>
  );
}

export default App;
