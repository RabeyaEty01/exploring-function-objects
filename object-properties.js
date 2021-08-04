var computer ={
    price: 29000,
    storage: '156gb',
    color:'silver',
    processor: 'intel i5'
};

//console.log(computer);
console.log(computer.processor); //object er property ta dekhte chassi tai object name then dot diye property er naam dite hobe

//second way of seeing object property value
var computerPrice=computer.price;
//console.log(computerPrice);

//set a object property value
//computer.price=22000;
//console.log(computer);



//different ways to set a value of an object property

computer.price =22000;
computer["price"]=23000; //ek e jinisher value onkbar set korle last jeta set kora hoise oita show korbe
//console.log(computer);


//another example of set a value of an object property

//example-1
var priceProperty="price";

computer.price=22000; //first way
computer["price"]=23000;//second way
computer[priceProperty]=18000;//third way

//example-2
var storageProperty ='storage';
computer[storageProperty]='512gb';//1st way
computer['storage']='1tb';//2nd way
computer.storage='5tb';//3rd way
console.log(computer);