var inche = 144;
var feet = inche/12;
console.log(feet);

function inchesToFeet (inches){
    var feet = inches/12;
    return feet;
}
var cal = inchesToFeet(156);
console.log("My calculation result",  cal);

function convertMileToKm (miles){
    var km = miles*0.621371;
    return km;
}
var convert = convertMileToKm(500);
console.log('MY miles to km cal is', convert);