const stations = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12]
];
function getPowers(x, y) {
    const stationPowers = [];
    for (let i = 0; i < stations.length; i++) {
        let station = stations[i];
        const xDist = x - station[0];
        const yDist = y - station[1];
        const distance = Math.hypot(xDist, yDist);
        let power;
        if (distance > station[2]) {
            power = 0;
        } else {
            power = Math.pow((station[2] - distance), 2);
        }
        const powerObj = {
            x: station[0],
            y: station[1],
            reach: station[2],
            distance: distance,
            power: power
        }
        stationPowers.push(powerObj);
    }
    return stationPowers;
}
function formString(x, y) {
    let answerString;
    const stationPowers = getPowers(x, y);
    const powers = [];
    for (let i = 0; i < stationPowers.length; i++) {
        powers.push(stationPowers[i].power);
    }
    const nearestPower = Math.max(...powers);
    const nearestStation = stationPowers.find(sp => sp.power == nearestPower);
    if (nearestPower != 0) {
        answerString = `Best link station for point ${x},${y} is ${nearestStation.x},${nearestStation.y}`
        + ` with power ${nearestPower}`;
    } else {
        answerString = `No link station within reach for point ${x},${y}`;
    }
    return answerString;
}
console.log(formString(0,0));
console.log(formString(100,100));
console.log(formString(15,10));
console.log(formString(18,18));