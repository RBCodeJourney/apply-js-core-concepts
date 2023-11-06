// console.log(4/2);
// console.log(657564/2);
// console.log(5654/2);
// console.log(6564/2);

// console.log(11/2);
// console.log(657565/2);
// console.log(5657/2);
// console.log(6563/2);

// console.log(4%2);
// console.log(657564%2);
// console.log(5654%2);
// console.log(6564%2);

// console.log(11%2);
// console.log(657565%2);
// console.log(5657%2);
// console.log(6563%2);

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven =isEven(48);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(303);
console.log(herNumberIsEven);
