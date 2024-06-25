function leap(year){
    //three condition to find the leap year
    if((0==year%4) && (0!=year%100) || (0==year%400)  ){
        console.log(year + 'is leap Year');
    }
    else{
        console.log(year + 'is not leap year');
    }

}
//take a input
var leapyear = prompt("Enter a Year");
leap(leapyear);
// year(2016);