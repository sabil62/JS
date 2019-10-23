/*let submits= document.querySelector('.submiter');

submits.addEventListener('click',addlocal)
function addlocal(e)
{   let text_in_form =document.querySelector('.text').value;
    localStorage.setItem('infos',text_in_form);
}
*/

document.querySelector('.submiter').addEventListener('click',addinlocal);
function addinlocal(e)
{
    const text=document.querySelector('.text').value;

    let insert;

    if(localStorage.getItem('info') === null)
    {
        insert=[];
    }
    else
    {
        insert= JSON.parse(localStorage.getItem('info'));
    }

    insert.push(text);

    localStorage.setItem('info',JSON.stringify(insert));

    alert('success');

    e.preventDefault();
}

//to display the arrays in console
let displaylocal=JSON.parse(localStorage.getItem('info'));

displaylocal.forEach(function(current)
                        {
                            console.log(current);
                        });

//display it in heading

let heading=document.querySelector('.card-h3');

let disp=JSON.parse(localStorage.getItem('info'));

disp.forEach(function(current)
                {
                    document.querySelector('.card-h3').textContent=`${current}`;
                }
);

//once again
document.querySelector('.submiter').addEventListener('click',adds);
function adds(e)
{
    let texts=document.querySelector('.text').value;

    let inserts;

    if(localStorage.getItem('infos')===null)
    {
        inserts=[];
    }
    else
    {
        inserts=JSON.parse(localStorage.getItem('infos'));
    }

    inserts.push(texts);

    localStorage.setItem('infos',JSON.stringify(inserts));
}

    

