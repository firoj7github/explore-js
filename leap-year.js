function leapYear (year){
    if(year%4 ==0){
        return true;
    }
    return false;
}
const numYear = 2042;
var lipYear= leapYear(numYear);
console.log(lipYear);