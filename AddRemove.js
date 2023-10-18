//input kaha arha h ? form me , us input ko kaha add karna hai? itemlist(ul)me -> dono ko trace kara
var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

//add event ->submit karne par list me wo item add hojaye
form.addEventListener('submit',addItem)

//event function when submit
function addItem(e){
  e.preventDefault()
  
  //this is input we give
  var input=document.getElementById('item')

  //here we made the li and add the text value  to be add in item list
  var li=document.createElement('li')
  li.className='list-group-item'
  var liText=document.createTextNode(input.value) //li text kya hoga ? jo input ki value 
  li.appendChild(liText)

  //here we are adding the button X to the li
  var button=document.createElement('button')
  button.className='btn btn-danger btn-sm float-right delete'
  var buttonText=document.createTextNode('X')
  button.appendChild(buttonText)

  //we add the button to li
  li.appendChild(button)

  //we add li to item list
  itemList.appendChild(li)
}

//delete the li from itemlist
itemList.addEventListener('click',deleteItem)

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        var input=document.getElementById('item').value
        if(confirm(`are you sure to delete ${input}`)){
            var li=e.target.parentElement // because we want to delete the li and e(event) has li as parent element 
            itemList.removeChild(li) //so we remove that child from the item list i.e stored in li 
        }
    }
}