
const getInfo = require('./sensor.js');

class room{

    constructor(room_id,ac_state,location){
        this.room_id = room_id;
        this.ac_state = ac_state;
        this.location = location;
    }

    getData = ()=>{     
        this.data = getInfo(this.location.lat,this.location.lon);
        return data;
    }    
}

CC_1 = new room("CC-1",false,{lat: 21 , lon: 34});
CC_2 = new room("CC-2",true,{lat: 22 , lon: 344});
CC_3 = new room("CC-3",false,{lat: 25 , lon: 32});

const rooms = [CC_1,CC_2,CC_3];


const get_room_data = ()=>{
    rooms.forEach(room => {
        let lat = room.location.lat;
        let lon = room.location.lon;

        let d = getInfo(lat,lon);
    });

}

module.exports = ()=>{
    let data = [];
    rooms.forEach(room => {
        let lat = room.location.lat;
        let lon = room.location.lon;

        let d = getInfo(lat,lon);
        data.push(d);
    });
    console.log(data);
    return data;
}









