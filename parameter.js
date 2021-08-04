//function parameter

function bringSingara(taka) {
    console.log('singara er jonno dise:', taka);
    console.log('Mama singara den!! ');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity; //function return
}

//var money = 250;
//bringSingara(money);
var singara = bringSingara(150);
console.log('Ai nen singara' , singara);