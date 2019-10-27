
//this is basically written in function to look better
let textInForm=document.querySelector('.input-text');
let ul=document.querySelector('ul');
let clearall=document.querySelector('.clear');


allEventListeners();

function allEventListeners()
{
document.querySelector('form').addEventListener('submit',onclick);
ul.addEventListener('click',remve);
clearall.addEventListener('click',clearup);

document.addEventListener('DOMContentLoaded',getValueFromLocalStorage)

}
//---------------------------------------------------------------------

function onclick(e)
{
    
    let list=document.createElement('li');
    list.className='item';
    list.appendChild(document.createTextNode(textInForm.value));

    let a=document.createElement('a');
    a.className='link';
    a.innerHTML="closeIT";
    
    list.appendChild(a);

    ul.appendChild(list);

    //local storage functions
    setValueInLocalStorage(textInForm.value);
    //getValueFromLocalStorage();   //this just copies data so directly in eventlistener add DOMContentLoaded
 

    textInForm.value='';

    e.preventDefault();
}
//------------------------------------------------------

//for removal part the , when we click the ^ then that li item should be completly deleted
//ul.addEventListener('click',remve);
  function remve(e)
{
   if(e.target.parentElement.classList.contains('item'))
   {
    e.target.parentElement.remove();
    removeFromLocalStorage(e.target.parentElement);//or pass e.target.parentElement.textContent
                                            //we need text content of this parentElement which is only          //present in parent element(a doesnt have text)
   }
  
}  
function removeFromLocalStorage(itemText)
{
    //console.log('clicked in remove');

   // console.log(itemText.textContent);
    let insert;
    if(localStorage.getItem('elements')==null)
    {
        insert=[];
    }
    else
    {
        insert=JSON.parse(localStorage.getItem('elements'));
    }
    insert.forEach(function(current,index)
                            {
                               // console.log(current+'CloseIT');
                                if(itemText.textContent === (current+'CloseIT'))
                                {
                                    insert.splice(index,1)
                                }
                            }
    //localStorage.setItem('elements',JSON.stringify(insert)); 
    );
    localStorage.setItem('elements',JSON.stringify(insert));
}

/*
document.body.addEventListener('click',remove);
function remove(e)
{if(e.target.classList.contains('link'))
    {   console.log('deleted');
        e.target.parentElement.remove();
    }                                               }
*/

//--------------------------------------------------------------------------------

//for clearing all
//clearall.addEventListener('click',clearup);
function clearup(e)
{
    //document.querySelector('.clear-area').textContent='';
    let list=document.querySelector('ul.list');
    while(list.firstChild)
    {
        list.firstChild.remove();
    }
    localStorage.clear();
    console.log('clearupped');
}

//-------------------------------------------------------------------
//for search
let searchs=document.querySelector('.search');
searchs.addEventListener('keyup',find);


function find(e)
{let filter=document.querySelectorAll('li.item');
const text=e.target.value.toLowerCase();

filter.forEach(function(current)
                { let  first=current.firstChild.textContent;
                    if(first.toLowerCase().indexOf(text) != -1)
                    {
                        current.style.display="block";
                    }
                    else{
                        current.style.display="none";

                    }
                }

);
}








//================================================================================================== 
//setvalueinlocalstorage(textinform.value)
function setValueInLocalStorage(ValueOfForm)
{   let insert;
    if(localStorage.getItem('elements') == null)
    {
        insert=[];
    }
    else
    {
        insert=JSON.parse(localStorage.getItem('elements'));
    }
    insert.push(ValueOfForm);
    localStorage.setItem('elements',JSON.stringify(insert));
}
function getValueFromLocalStorage()
{
    let insert;
    if(localStorage.getItem('elements') == null)
    {
        insert=[];
    }
    else
    {
        insert=JSON.parse(localStorage.getItem('elements'));// we need this one only TBH
    }

    insert.forEach(function(current)
                    {
                        let list=document.createElement('li');
                        list.className="item";
                        list.appendChild(document.createTextNode(current));

                        let a=document.createElement('a');
                        a.className="link";
                        a.innerHTML="CloseIT";

                        list.appendChild(a);
                        ul.appendChild(list);

                    }
    );
}