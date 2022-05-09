
const Rand = (a,b) => {
    return Math.random()*(b-a)+ a;
}

// console.log((Rand(10,100)).toFixed(3));

module.exports = Rand;