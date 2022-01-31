 var partner = ['mojid', 'sajid', 'bajid', 'hajid'];
  console.log(partner.length);
 
function isMoonUp(time){
    if (time>=20 || time<=5){
        return true;
    }
    return false;
}
var moonStart=isMoonUp(21);
console.log(moonStart);