import React from 'react';


import DriverCard from "./components/DriverCard";

import './App.css';
import './screen.css';


const firebase = require('firebase');
require('dotenv').config({
  path: '../.env'
});


class App extends React.Component {
  getIncidentData() {
    let ref = this.Firebase.database().ref('dangers/');
    ref.on('value', snapshot => {
      const data = snapshot.val();
      this.setState(data);
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
          val[1].is_valid ? <DriverCard
            key={index}
            driverPhotoUrl="values"
            name={val[1].driver_name}
            riskLvl={val[1].alert_level}
            passengerName="Jennifer"
            currSpeed="120km/h"
            numActiveHours="6 hours"

          />
            : null
        ))}


      </div>

    );
  }
}
export default App;
