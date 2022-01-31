var factorial = 1;
for(i=1 ; i<=7 ; i++){
  
    factorial = factorial * i;
}
console.log(factorial);


function factNum (number){
    let fact = 1;
    for (let i=1; i<=number; i++){
       fact= fact*i ; 
    }
    return fact;
}
let factorialNum = 5;
var factAns= factNum(factorialNum);
console.log(factAns);