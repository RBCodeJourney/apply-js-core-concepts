//  practice problem 1


function hourToMinutes(minutes) {
    const hour = minutes * 60;
    return hour;
}

const ramTime = 5;
const time = hourToMinutes(ramTime);
console.log('ramTime', time)