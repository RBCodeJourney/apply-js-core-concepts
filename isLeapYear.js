/*
 function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);


const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year', isHerYearLeapYear);
 */


function findLeapYear(year){
    const remainder =  year%4;
    if(remainder === 0){
        return true;
    }

    else{
        return false;
    }
}

const isMyYearLeapYear = findLeapYear(1999);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = findLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);