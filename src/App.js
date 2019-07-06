import React from 'react';

import DriverCard from "./components/DriverCard"

import './App.css';
import './screen.css';

let driverPhotoUrl = "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/43522912_10205230133270116_181260028051718144_n.jpg?_nc_cat=110&_nc_oc=AQk4u4_YjgGHb1iFp0MuP6CNEieBn2m9BWSo1f2JcgmLXqUsK_JnhYPeZbGqipnGzzg&_nc_ht=scontent-sin6-2.xx&oh=19add1810f487db9e3e80dd06efc0e7f&oe=5DC63E9B"
{/* <img src="./assets/images/driver_1_matthew.jpg" /> */}

function App() {
  return (
    <div className="App">
      <DriverCard driverPhotoUrl={driverPhotoUrl} name="Handsome Matthew" riskLvl="9"  passengerName="Jennifer" currSpeed="120km/h" numActiveHours="6 hours"/> 
    </div>
  );
}

export default App;
