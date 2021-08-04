function addTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;

}

var firstNumber =35;
var secondNumber =47;
var result = addTwoNumbers(secondNumber, firstNumber);
console.log('results: ', result);


//multiplication function

function multiplyNumbers(number1, number2){
    console.log(number1,number2);
    var multiplication = number1*number2;
    return multiplication;
}

var totalMoney =multiplyNumbers(5,100);
console.log('total after multiplication', totalMoney);

//minusTwo number
function minusTwoNumbers(n1,n2){
    console.log(n1,n2);
    var difference = n2-n1;
    return difference;
}

var totalDifference= minusTwoNumbers(80,250);
console.log('Difference is:', totalDifference);
//division of two numbers 
function divisionTwoNumbers(numbers1, numbers2){
    console.log(numbers1,numbers2);
    var totalDivision = numbers1/numbers2;
    return totalDivision;
}

var restTotal = divisionTwoNumbers(80, 4);
console.log('Division is:', restTotal);
