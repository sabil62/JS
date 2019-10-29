let UIsubmitPress=document.querySelector('.form-1').addEventListener('submit',onclick);

function onclick(e)
{
    e.preventDefault();
    let UIamount=document.querySelector('.amount-required').value;
    let UItime=document.querySelector('.time').value;
    //for display area
    let UIdisplayArea=document.querySelector('.display-area');

    console.log(UIamount,UItime);

    const Total=parseFloat(UIamount)+0.5 * parseFloat(UIamount) ;
    let Month=Total/(parseFloat(UItime)*12) ;

    console.log(Total,Month);

    let UItotalPayment=document.querySelector('#total');
    let UImonthly=document.querySelector('#monthly');

    //in displayarea
    if(isFinite(Month)){
        UItotalPayment.value=Total;
        UImonthly.value=Month.toFixed(2);
        UIdisplayArea.style.display='block';
    }
    else
    {
        showerror('Please enter numbers');
    }

 

}
function showerror(messageError)
{
    let errorMessage=document.createElement('h3');
    errorMessage.className="errorh3";
    errorMessage.appendChild(document.createTextNode(messageError));

    card=document.querySelector('.card');

   // card.appendChild(errorMessage);
   heading=document.querySelector('.heading');//for insertBefore


   card.insertBefore(errorMessage,heading);
   setTimeout(alerter,3000);
}
function alerter()
{
    document.querySelector('.errorh3').remove();
}
