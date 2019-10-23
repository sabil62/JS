let image=document.querySelector('.nepal-map');

image.addEventListener('dblclick',move);
function move(e)
{
    console.log('X='+e.offsetX+'  '+'Y='+e.offsetY);
   

}

image.addEventListener('click',display);
function display(e)
{
    let x=e.offsetX;
    let y=e.offsetY;
    let para=document.querySelector('.information');

    if(x<400 && y<250)
    {
        para.textContent="Western 07"; 
    }
    else if( (x>520 && y>250 && x<672 && y<310) || (x>460 && y>310 && x<672 && y<364) || (x>550 && y>364 && x<655 && y<418) || (x>430 && y>327 && x<490 && y<383))
    {
        para.textContent="Central 03";
    }


    else if(x>695 && y>290 && y<439 || (x>728 && y>439))
    {
       para.textContent="Eastern 01";     
    }
    else{
        para.textContent="other";
    }
}
