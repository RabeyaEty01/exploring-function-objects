//1.variabale 
var fvrtBook = '4 hour work week';

//2. array
var bookList = ['bangla', 'english', 'math', 'physics', 'chemestry', 'biology'];

var physicsIndex =bookList.indexOf('physics');
bookList[1]='Story Brand';

bookList.push('Small Giants');
bookList.pop();

//3. conditionals

if(bookList[1]=='english'){
    console.log('I am good at speaking english');
}
else{
    console.log('I am not so good at speaking english');
}

//4.Loop
// while loop
var i=0;
while(i<15){
    console.log(i);
    console.log('looping looping looping');
    i++;
}

//for loop

for(var i=0; i<15; i++){
    console.log(i);
    console.log("loop loop bloop")
}
