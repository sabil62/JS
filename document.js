let first = document.querySelector('li');
console.log(first);

//FOR SINGLE
document.querySelector('li').textContent="SEATTLE";

//FOR MULTIPLE not using forEach loop which doesnt work 
document.querySelectorAll('li').textContent="redda";
console.log(document.querySelectorAll('li'));

//DOING MULTIPLE USING FOR EACH LOOP
let list=document.querySelectorAll('li');
list.forEach(function(lister)
                {
                    lister.style.color="green";
                });

//FOR ODD AND EVEN BACKGROUND COLOR USING NTH PROPERTY OF CSS      
//FOR ODD         
let oddList = document.querySelectorAll('li:nth-child(odd)');
oddList.forEach(function(odd)
                {
                    odd.style.background="lightgreen";
                }
                );

//FOR EVEN
let evenList = document.querySelectorAll('li:nth-child(even)');
evenList.forEach(function(even)
                    {
                        even.style.background="azure";
                    }
                );

let unordered=document.querySelectorAll('ul');
unordered.forEach(function(unli)
                    {unli.style.border='3px solid black';}
                    );
