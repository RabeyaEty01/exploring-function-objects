var skyColor = 'white';
var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];
phones[3] = 'walton';
console.log(phones);
//check an element exists in an array

if (phones.indexOf('oppo') == -1) {
    console.log('oops! amir khan oppo is missing');

}
//if lg is available
if (phones.indexOf('lg') != -1) {
    console.log('Lg is available now');
}

//loop
var num=0;
while(num<=10){
    num++;

}
for(var i=0; i<phones.length;i++){
console.log(i);
}

//function
function addThreeNumbers(num1,num2,num3){
    var total=num1+num2+num3;
   console.log(num1,num2,num3);
    return total;
   
}
var result= addThreeNumbers(32,90,78);
console.log(result);
 
//object
var microphone={
    brand: 'blue yeti',
    price: 120,
    color: black
};


