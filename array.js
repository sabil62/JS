var alphabet=['sabil','aman','kong'];
var position=[5,8,10,21,3];

//reverse
var rev=position.reverse();
//add to array end
var addtoend=position.push(100);
console.log(position);
//remove from end
var revend=position.pop();
console.log(position);
//add to first
var first=position.unshift(1);
console.log(position);
//remove from first
var revfirst=position.shift();
console.log(position);

console.log('--------------------------------');

//maximum
var max=position.sort();
var mar=alphabet.sort();
console.log(max);
console.log(mar);
console.log(alphabet);

//using functions returning ascending and descending in sort()
var ascending=position.sort(function(x,y)
{return x-y;}
)
console.log(position);
//descending
var descending=position.sort (function(x,y)
{
    return y-x;
}
)
console.log(position);

//prints in console
console.log(rev);

console.log('===================================================');

var people={
                name:'Aman',
                age: 21,
                gender: 'male',
                location: 'jwagal',
                nicknames:{school:'elephant',
                            college:'quinyong'},
                getbirthyear:function()
                {return 1981-this.age;}

            }
console.log(people.name);
console.log(people.nicknames.school);
console.log(people.getbirthyear());

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++');
var place=[
            {name:'Satdobato',
            location:'lalitpur',
            number:19954},
            {name:'Buddhanagar',
            location:'Kathmandu',
            number:14555}
            ];

for(var i=0; i<place.length; i++){
console.log(place[i].name);
}

console.log('=---------------------------------------------------');
const cars=['buggatti','lambo','tesla'];
cars.forEach(function(current)
                { console.log(current); }
                );

cars.forEach(function(current,index)
            { console.log(`${index}:${current}`);
              })

//NEW ITEMS
console.log('---------------------------------------------------');

//let g=document.querySelector('ul');
//g.children(0);
//console.log(g);

//let h=document.querySelectorAll('li:nth-child(2)');
//h.style.color="red";
//console.log(h);

//let j=document.querySelector('ul.hello');
//j.lastElementChild;
//console.log(j);

////let k=document.querySelector('#thisone');
//k.style.color="red";
