
const API_KEY = "f001a794c1009b956170ab094c81a29b";
const axios = require('axios');
const { type } = require('express/lib/response');
const res = require('express/lib/response');

//rooms

class room {

  constructor(room_id, ac_state, location) {
    this.room_id = room_id;
    this.ac_state = ac_state;
    this.location = location;
    this.data;
  }

  getData = () => {
    let lat = this.location.lat;
    let lon = this.location.lon;

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f001a794c1009b956170ab094c81a29b`

    try {

      axios.get(url).then((result) => {
        // console.log(result);
        // console.log(typeof(result));
        this.data = result[0].data;
        // return this.data;
      }).catch((err) => {
        console.log(err);
      });

    } catch (error) {
      console.log(error);
    }
  }

  sendData = () => {
    this.getData();
    console.log(this.data);
    return this.data;
  }


}

CC_1 = new room("CC-1", false, { lat: 21, lon: 34 });
CC_2 = new room("CC-2", true, { lat: 22, lon: 344 });
CC_3 = new room("CC-3", false, { lat: 25, lon: 32 });

const rooms = [CC_1, CC_2, CC_3];

// let a =CC_1.sendData();

// console.log(typeof(a));

// console.log(typeof(a));
// console.log(a);

var daa;

async function getInfo(lat, lon) {

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f001a794c1009b956170ab094c81a29b`

  let data;
  try {

    let result = await axios.get(url)

    const temp = result.data.main.temp;
    const feels_like = result.data.main.feels_like;
    const temp_min = result.data.main.temp_min;
    const pressure = result.data.main.pressure;
    const humidity = result.data.main.humidity;

    daa.push(temp);

  } catch (error) {
    console.log(error);
  }

}


let rr = getInfo(12, 23);
// console.log(rr);
console.log(daa);

module.exports = getInfo;