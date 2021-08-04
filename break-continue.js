// var i = 0;
// while (i < 15) {
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

// for(var i=0;i<20;i++){
//     console.log(i);
//     if(i>8){
//         break;
//     }
// }


var numbers = [54, 66, 35, 78, 90, 102, 45, 667];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 90) {
//         break;
//     }
// }

for(var i=0; i< numbers.length; i++)
{
    var num=numbers[i];
    if(num>90){
        continue;//etar kaaj hosse ei shorto ta fill korle skip kore jabe ,next step e chole jabe
    }
    console.log(num);
}