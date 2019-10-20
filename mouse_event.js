

let card=   document.querySelector('.card');
let heading=     document.querySelector('.card-h3');
let button= document.querySelector('.button');
//let s=document.querySelector('ul').children[2].style.color="red";
//document.querySelector('li:last-child');


card.addEventListener('click',onclick);
card.addEventListener('dblclick',onclick);
card.addEventListener('mouseenter',onclick);
card.addEventListener('mouseleave',onclick);
//card.addEventListener('mouseover',onclick);
//card.addEventListener('mouseout',onclick);

function onclick(e){
    console.log('the type is');
    console.log(e.type);
}

card.addEventListener('mousemove',showoffset);

function showoffset(e)
{
    heading.textContent=`x-component: ${e.offsetX} y-comp: ${e.offsetY}`;
}

//--------------------------------------------------------------------------------------------------------//
//for keyboard
let keys=document.querySelector('.card-type');
let headkeys =document.querySelector('.card-keyboard-h3');

//keys.addEventListener('keydown',onclick);
//keys.addEventListener('keyup',onclick);
keys.addEventListener('keypress',onclick);


function onclick(e)
{  
    console.log(e.type);

    headkeys.textContent=`${e.target.value}`;
 
}


//--------------------------------------------------------------------------------------------------------//
//for deleting using event bubble delegation

document.body.addEventListener('click',deleter);

function deleter(e)
{
    if(e.target.parentElement.classList.contains('link'))
    {
        console.log('delete item');
    }
    if(e.target.classList.contains('kong')){
        console.log('this is kong');
    }
}
//e.target.classList.contains('question') 

