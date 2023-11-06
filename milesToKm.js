function milesToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const myMiles = 88;
const myKilometer = milesToKilometer(myMiles);
console.log('myKilometer', myKilometer);