class book{
    constructor(bookname,author)
    {
        this.bookname=bookname;
        this.author=author;
    }
}
//UI class has all functions and the book class is just passed to UI class
class UI{
    constructor(){}

    displayInTable(passed)
    {
        let tableInsert=document.createElement('tr');
        tableInsert.innerHTML=`<td>${passed.bookname}</td>
                               <td>${passed.author}</td>
                               <td><a href="#" class="delete"> X </a><td>`;
        
        let tbodyValue=document.querySelector('.enter-in-table');

        tbodyValue.appendChild(tableInsert);
    }

    //SHOW MESSAGES        //classes of these region are already specified in CSS
    showMessage(message,colour)
    {
        let msg=document.createElement('h2');
        msg.className="alert-pop";
        msg.appendChild(document.createTextNode(message));

        let card=document.querySelector('.card');
        let heading=document.querySelector('.head');

        card.insertBefore(msg,heading);

        //decorate the alert message
        document.querySelector('.alert-pop').style.background=colour;

        //invisible it after few secs
        setTimeout(invisible,3000);
        function invisible()
        {
            document.querySelector('.alert-pop').remove();
        }
    }
}
//for display addlistener
document.addEventListener('DOMContentLoaded',go);
function go()
{
    store.displayFromLS();
}

class store{
    constructor(){}

    static CheckAndGetLS()
    {
        let insert;
        if(localStorage.getItem('tableData')=== null)
        {
            insert=[];
        }
        else{
            insert=JSON.parse(localStorage.getItem('tableData'));
        }
        return insert;
    }

    static storeToLS(bookLS)
    {
        let insert=store.CheckAndGetLS();

        insert.push(bookLS);
        localStorage.setItem('tableData',JSON.stringify(insert));

    }
    static displayFromLS()
    {
        let insert=store.CheckAndGetLS();
        insert.forEach(function(current)
        {
        let LStbody=document.createElement('tr');
        LStbody.innerHTML=`<td>${current.bookname}</td>
                           <td>${current.author}</td>
                           <td><a href="#" class="delete"> X  </a></td>`;

        let tableList=document.querySelector('.enter-in-table');
        tableList.appendChild(LStbody);
        }
        );
    }
    static removeFromLS(del)
    {
        let insert=store.CheckAndGetLS();
       
        console.log(del);
        insert.forEach(function(current,index)
        {
            if(current.author === del)
            {
                insert.splice(index,1);
            }
        });
        localStorage.setItem('tableData',JSON.stringify(insert));

    }
}

let form= document.querySelector('.form-1');

form.addEventListener('submit',displayValue);
    function displayValue(e)
{
    const bookValue= document.getElementById('bookname').value;
    const AuthorName= document.querySelector('#author').value;
    e.preventDefault();
    const book1= new book(bookValue,AuthorName);
    const UserInterface= new UI();

    if(bookValue=== '' || AuthorName==='')
    {
        UserInterface.showMessage('Please enter values','red');
    }
   else
   {
    UserInterface.displayInTable(book1);
    store.storeToLS(book1);
   }

    document.getElementById('bookname').value='';
    document.querySelector('#author').value='';
}

document.querySelector('.card').addEventListener('click',remove);
function remove(e)
{
    if(e.target.className === "delete")
    {
        e.target.parentElement.parentElement.remove();
        store.removeFromLS(e.target.parentElement.previousElementSibling.textContent);
    }
}