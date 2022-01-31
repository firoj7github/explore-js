function isEven (number){
    if (number%2 ==0){
        return true;
    }
    return false;
}
const myNum = 1431;
const isMyNumEven = isEven(myNum);
console.log('My number is even', isMyNumEven);

const herNum = 1820;
const herNumEven = isEven(herNum);
console.log('Her number is even', herNumEven);
