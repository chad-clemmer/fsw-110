var newHeader1 = document.createElement("h1")
newHeader1.textContent = 'Welcome to my JS site'
document.body.appendChild(newHeader1)

var newParagraph = document.createElement('p')
newParagraph.textContent = 'All of this was created with Javascript'
document.body.appendChild(newParagraph)

var newOrderedList = document.createElement('ol')
document.body.appendChild(newOrderedList)

var listItem1 = document.createElement('li')
listItem1.textContent = 'This is list item 1'
document.querySelector('ol').appendChild(listItem1)

var listItem2 = document.createElement('li')
listItem2.textContent = 'This is list item 2'
document.querySelector('ol').appendChild(listItem2)

var listItem3 = document.createElement('li')
listItem3.textContent = 'This is list item 3'
document.querySelector('ol').appendChild(listItem3)