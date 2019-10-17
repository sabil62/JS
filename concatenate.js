var char1='Aman';
var char2='Shrestha';
var lists=' elephant, crow, tiger, lion ';
var complete='My name is Marco';


var char3= char1+char2;
var char4= char1+'  '+char2;
var char5= char1[0]; //this is the first letter of character Aman
var char6= char1.charAt(1); //char at means character at this charAt3 prints a becauseamAn

 //this displays character of last N in thiscase here .lenght gives total length and -1 //is the last one
var char7= char1.charAt(char1.length - 1); 
var char8= lists.split(','); //this splits from the specified , then makes array
var char9= complete.replace('Marco','Sabil');

console.log(char3);
console.log(char4);
console.log(char5);
console.log(char6);
console.log(char7);
console.log(char8);
console.log(char9);



//to store data to html from javascript
var name='sabil';
var age=20;
var roll=51;
var html;

html='<ul><li>Name:'+name+'</li>'+
     '<li>Age:' +age +'</li>'+
     '<li>roll:'+ roll +'</li></ul>';

     document.body.innerHTML= html;


     var html2=`
        <ul>
        <li>Yohng: ${char1} </li>
        <li> Age: ${18} </li>
        <li> hong: ${char2} </li>
        <li> add: ${6+5} </li>
        <li> else: ${age>25 ? 'over 25' : 'under 25'}
        </ul>
      `;
      document.body.innerHTML= html2;

    var sendtohtml=
    `
    <ul>
    <li>Name:${name}</li>
    <li>Age:${age}</li>
    </ul>
    `;
    document.body.innerHTML= sendtohtml;