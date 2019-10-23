let lister= document.querySelector('ul');

let printer= lister.children;
printer= lister.children[3];
//changing the html by using children instead of using innerHTML
lister.children[4].textContent="THIS IS CHANGED";

lister.children[0].style.color="red";  //document.queryselector('ul').children[0].style.color="red";

let rock=lister.firstElementChild;
rock=lister.childElementCount;
rock=lister.parentElement.parentElement;
lister.firstElementChild.style.background="lightgreen";


console.log(printer);
console.log(rock);

//for li     named as items
let item=document.querySelector('li');





//trying to add new file egg in html by using JS without using innerHTML
//Here in appendChild append means attach

let li= document.createElement('li');
li.className="item";
li.appendChild(document.createTextNode('EAGLE'));
//to add ahref
li.appendChild(document.createTextNode('kingkong hongkong'));
document.querySelector('ul').appendChild(li);
//document.querySelector('ul').appendChild(li);



const a=document.createElement('a');
a.href="#";
a.className="yes";
a.appendChild(document.createTextNode('seattle'));
document.querySelector('ul').appendChild(a);
console.log(a);

//Now Event Listeners
let event=document.querySelector('li.item.li-decor').addEventListener('click',onclick);
function onclick(e)
{
    console.log('hello sing');
    var value=e;
   // console.log(value);

    //for specific events
    let value1=e.target;
    value1=e.target.className;
    value1=e.target.classList;
    value1=e.timeStamp;
    value1=e.offsetX;
    value1=e.clientY;
    console.log(value1);


}

console.log(event);

