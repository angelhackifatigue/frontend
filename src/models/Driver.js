import { types } from "mobx-state-tree"

const Driver = types.model('Driver', {

    driverPhotoUrl : types.string,
    driverName : types.string, 
    passengerName: types.string,
    currSpeed : types.number,
    numActiveHours : types.number,
    riskLvl: types.number

})


export default Driver;