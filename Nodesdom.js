//parent node
let itemList=document.querySelector('#items')
// itemList.parentNode.style.background='grey'
// console.log(itemList.parentNode.parentNode.parentNode)

//parent element
// itemList.parentElement.style.background='yellow'
// itemList.parentElement.parentElement.style.border='solid 5px red'

// parent node and parent element are the same thing we can use vise versa 


//child node(useless)
// console.log(itemList.childNodes) //this will get output as array but also consider the gap as text in array 

//children
// console.log(itemList.children) //thats why we use children instead of childnodes
// itemList.children[1].style.color='brown'

//first child(useless)
// console.log(itemList.firstChild) //this will give text as first child

//first element child(usefull)
// console.log(itemList.firstElementChild) // this will give the first li which we want
// itemList.firstElementChild.style.fontSize='20px'

//last child(useless)
// console.log(itemList.lastChild)

//last element child(usefull)
// console.log(itemList.lastElementChild)
// itemList.addEventListener('mouseover',(e)=>{
//     itemList.lastElementChild.style.fontSize='20px'
// })

//nextSiblings(useless)
// console.log(itemList.nextSibling)

//nextElementSibling
// console.log(itemList.nextElementSibling)

//previoussibling(useless)
// console.log(itemList.previousSibling)

//previousElementSibling(usefull)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.background='yellow'


//create elements(IMP)
var newDiv=document.createElement('div')
//set class name to div
newDiv.className='newdiv'
//set id for div
newDiv.id='newDivId'
//add attribues ->title,h1,span etc to div
newDiv.setAttribute('title','New div title')
//add text to div 
var newDivText=document.createTextNode('This is the text content of new div')
newDiv.appendChild(newDivText)
//insert this div to our HTML file before the h1 tag
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

container.insertBefore(newDiv,h1)
// console.log(newDiv)

//creating element 2
//steps to follow 
//first make what you want to add ,add class ,id text all
//trace the node after which you want to add the new node and add it
var newLi=document.createElement('li')
newLi.className='list-group-item'
var newLiText=document.createTextNode('Item 5 (this is added by the js)')
newLi.appendChild(newLiText)
console.log(newLi)

var ul=document.querySelector('ul')
var lastLi=document.querySelector('.list-group-item:nth-child(5)')
ul.insertBefore(newLi,lastLi)






