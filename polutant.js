let rand = require("./random_number_generator.js");

class Polutant {

    constructor(name, density, range) {
        this.name = name;
        this.density = density;
    }

}

class range {
    constructor(low, high) {
        this.low = low;
        this.high = high;
    }
}

let no2_range = [new range(0, 49), new range(50, 99), new range(100, 199), new range(200, 399), new range(400, 500)];
let o3_range = [new range(0, 59), new range(60, 119), new range(120, 179), new range(180, 239), new range(240, 300)];
let pm10_range = [new range(0, 24), new range(25, 49), new range(50, 89), new range(90, 179), new range(180, 250)];
let pm25_range = [new range(0, 14), new range(15, 29), new range(30, 54), new range(55, 109), new range(110, 160)];


let quality_check = (range, density) => {

    let index = -1;
    for (let i = 0; i < 5; i++) {
        if (density >= range[i].low && density <= range[i].high) {
            index = i;
            break;
        }
    }

    if(index==-1){
        return quality_index[4];
    }
    let quality_index = ["VERY LOW", "LOW", "MIDIUM", "HIGH", "VERY HIGH"];

    return quality_index[index];
}

let collect_data = () => {


    let no2_density = rand(0, 450).toFixed(2);
    let no2 = new Polutant("no2", no2_density);

    let o3_density = rand(0, 260).toFixed(2);
    let o3 = new Polutant("o3", o3_density);

    let pm10_density = rand(0, 200).toFixed(2);
    let pm10 = new Polutant("pm10", pm10_density);

    let pm25_density = rand(0, 130).toFixed(2);
    let pm25 = new Polutant("pm25", pm25_density);

    let no2_q = quality_check(no2_range, no2_density);

    let o3_q = quality_check(o3_range, o3_density);

    let pm10_q = quality_check(pm10_range, pm10_density);

    let pm25_q = quality_check(pm25_range, pm25_density);

    let data = {
        no2 : {
            name : "no2",
            quality : no2_q,
            density : no2_density
        },

        o3 : {
            name : "o3",
            quality : o3_q,
            density : o3_density
        },

        pm10 : {
            name : "pm10",
            quality : pm10_q,
            density : pm10_density
        },

        pm25 : {
            name : "pm25",
            quality : pm25_q,
            density : pm25_density
        }
    }

    return data;

}

module.exports = collect_data;



