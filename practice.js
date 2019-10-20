var name='aman';
console.log(name);

var tab={ name:'aman', age:21, grade:3 };
console.table(tab);

var array=[0,1,2,3,5];
console.log(array);

console.log('-------------------------------------------------------------');


// time taken
console.time(1);

console.log('kingkongsan');
console.log('kingkongsan');
console.log('kingkongsan');

console.timeEnd(1);

// date
var today=new Date();
console.log(today);

console.log('-------------------------------------------------------------');


//typeof
var variable=5;
console.log(variable);
console.log(typeof variable);

var variable1='5';
console.log(variable1);
console.log(typeof variable1);

var boolean=true;
console.log(boolean);
console.log(typeof boolean);

//just space
console.log('-------------------------------------------------------------');

//conversion to string
var number= String(56);
console.log(typeof number);

var number1= String(true);
console.log(number1);
console.log(typeof number1);

console.log('-------------------------------------------------------------');

var boolean1=Number(true);  
console.log(boolean1);
console.log(typeof boolean1);

var string=Number('RAM');
console.log(string);    //NaN is displayed and means Not a Number
console.log(typeof string);

console.log('-------------------------------------------------------------');
//length of string
var lengthy='king  kong';
console.log(lengthy.length); //displays 10
console.log(lengthy);

console.log('-------------------------------------------------------------');
//concatenation of string and number by setting a number as a string

var kumbha=String(9+1);
var karna='enterprise';
var kobau=karna+kumbha;
console.log(kobau);





