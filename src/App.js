import React from 'react';

import DriverCard from "./components/DriverCard"

import './App.css';
import './screen.css';

const firebase = require('firebase');
require('dotenv').config({
  path: '../.env'
});

const driverPhotoUrl = "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/43522912_10205230133270116_181260028051718144_n.jpg?_nc_cat=110&_nc_oc=AQk4u4_YjgGHb1iFp0MuP6CNEieBn2m9BWSo1f2JcgmLXqUsK_JnhYPeZbGqipnGzzg&_nc_ht=scontent-sin6-2.xx&oh=19add1810f487db9e3e80dd06efc0e7f&oe=5DC63E9B"

class App extends React.Component {
  getIncidentData() {
    let ref = this.Firebase.database().ref('dangers/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    })    
  }

  constructor() {
    super();

    this.state = {};
    const firebaseConfig = {
      apiKey: process.env.API_KEY || 'AIzaSyDzuu9Kv6mcE5BfWBh_hSDTQLjJsKkbM3Q',
      authDomain: process.env.AUTH_DOMAIN || 'drowsiness-detector-d7660.firebaseapp.com',
      databaseURL: process.env.DATABASE_URL || 'https://drowsiness-detector-d7660.firebaseio.com',
      projectId: process.env.PROJECT_ID || 'drowsiness-detector-d7660', 
      storageBucket: process.env.STORAGE_BUCKET || '',
      messagingSenderId: process.env.MESSAGING_SENDER_ID || '163673921154',
      appId: process.env.APP_ID || '1:163673921154:web:afec00eed3f9180f'
    };
    

    // Initialize Firebase
    this.Firebase = firebase.initializeApp(firebaseConfig);
    this.getIncidentData();
  }


  render() {
    return (
      <div className="App">
        {Object.entries(this.state).map((val, index) => (
          <DriverCard driverPhotoUrl={driverPhotoUrl} name={val[1].driver_name}  riskLvl={val[1].alert_level}  passengerName="Jennifer" currSpeed="120km/h" numActiveHours="6 hours"/> 
        ))}
      </div>
    );
  }
  
}

export default App;
