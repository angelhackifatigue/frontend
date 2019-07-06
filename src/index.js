import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';


import App from './App';
import Driver from './models/Driver'

const driver = Driver.create({
    driverPhotoUrl : "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/43522912_10205230133270116_181260028051718144_n.jpg?_nc_cat=110&_nc_oc=AQk4u4_YjgGHb1iFp0MuP6CNEieBn2m9BWSo1f2JcgmLXqUsK_JnhYPeZbGqipnGzzg&_nc_ht=scontent-sin6-2.xx&oh=19add1810f487db9e3e80dd06efc0e7f&oe=5DC63E9B" ,
    driverName : "Matthew", 
    passengerName: "Jeniffer",
    currSpeed : 60,
    numActiveHours : 6,
    riskLvl: 3
    
})

ReactDOM.render(<App driver={driver}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();