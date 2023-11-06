// const myInches = 12;
// const mayFeet = myInches /12;
// console.log(mayFeet);




// const dadaInches = 144;
// const dadaFeet = dadaInches /12;
// console.log('dada feet', dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches /12;
// console.log('dadifeet', dadiFeet);

function inchToFeet(inches){
const feet = inches /12;
return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanFeet = inchToFeet(nanaInches);
console.log('nana feet', nanFeet);