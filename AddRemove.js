//input kaha arha h ? form me , us input ko kaha add karna hai? itemlist(ul)me -> dono ko trace kara
var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

//add event ->submit karne par list me wo item add hojaye
form.addEventListener('submit',addItemWithDesc)

//event function when submit
function addItemWithDesc(e){
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

  //we are desc value to the li
  var Desc=document.getElementById('desc')
  var DescText=document.createTextNode(' : '+Desc.value)
  li.appendChild(DescText)
  console.log(li)

  //we add the button to li
  li.appendChild(button)

  //we add li to item list
  itemList.appendChild(li)

  //we are storing the data in localstorage
  localStorage.setItem('ItemName',`${input.value}`)
  localStorage.setItem('itemDesc',`${Desc.value}`)
 //printing data in local storage
  console.log(localStorage.getItem('ItemName'))
  console.log(localStorage.getItem('itemDesc'))

  //we are storing the object in localstorage as an string
  var inputObj={
    'ItemName':`${input.value}`,
    'itemDesc':`${Desc.value}`
  }
  var inputObj_serialized=JSON.stringify(inputObj)
  localStorage.setItem('input_details',inputObj_serialized)
  localStorage.getItem(inputObj_serialized)

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

//search item by name and desc
var filter=document.getElementById('filter')
filter.addEventListener('keyup',filterItems)

function filterItems(e){
  //we are converting to lowercase everything which search
  var text=e.target.value.toLowerCase()
  //where we have to search this? in li
  var items=itemList.getElementsByTagName('li')
  //console.log(items)
  //gives result in html collection so we have to convert it into array

  //convert in array
  Array.from(items).forEach(function(item){
    //we store the items in itemname
    var itemName=item.firstChild.textContent //first child is item name
    var desc=item.firstChild.nextSibling.textContent //first childs nextsibling is desc
    if(itemName.toLowerCase().indexOf(text)!=-1 || desc.toLowerCase().indexOf(text)!=-1 ){ //if -1 then there is no match 
          item.style.display='block' 
    }
    else{
        // -1(there is no math of text with items)
        item.style.display='none'
    }
  })
  


}

