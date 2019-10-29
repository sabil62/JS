let UImin=document.querySelector('.min'),
    UImax=document.querySelector('.max'),
    UIinput=document.querySelector('.guessInput');
    UIsubmit=document.querySelector('.submiter');
    UImessage=document.querySelector('.message');
    UIsecmessage=document.querySelector('.secmessage');

let min=1;
    max=10;
    correctValue=5;
    guessleft=3;

//for playagain
let UIcard=document.querySelector('.card');
UIcard.addEventListener('mousedown',playagain);// this clicks whereever in the card
function playagain(e)
{
    if(e.target.className==='submiterplay-Again')
    {
        window.location.reload();
    }
    
       // window.location.reload();
    
}


UIsubmit.addEventListener('click',displayNumber);

function displayNumber(e)
{
    e.preventDefault();
    let writtenNumber=parseInt(UIinput.value);

    if(writtenNumber>max || writtenNumber <min || isNaN(writtenNumber))
    {
        writeMessage('please enter valid numbers','brown');
       
    }
    else{
              

                if(parseInt(correctValue)=== writtenNumber)
                {
                    console.log('success');
                    
                    gameOver('won',writtenNumber);
                    
                }
                else{
                    guessleft=guessleft-1;
                    UIsecmessage.textContent=`${guessleft} guess left`;
                    if(guessleft=== 0)
                    {
                        gameOver('lost',writtenNumber);
                    }
                   else{ writeMessage(`${writtenNumber} is Wrong Number! Type Again`,"red");}
                }
}
}

function gameOver(result,numberObtained)
{
    UIinput.disabled=true;
    if(result=== "won" )
    {
        UIinput.style.borderColor="green";
        writeMessage(`Congratulations! Correct Number is ${numberObtained}`,"green");
    }
    else
    {
        UIinput.style.borderColor="red";
        writeMessage(`GAME OVER!! ${numberObtained} is not correct ${correctValue} is`,"red");        
    }
    //for playagain command
    UIsubmit.value="Play Again";
    UIsubmit.className += 'play-Again';
    
}


function writeMessage(msg,colour)
{
    UImessage.textContent=`${msg}`;
    UImessage.style.color=colour;
    UIinput.style.borderColor=colour;
    
   // setTimeout(invisible,3000);
}
