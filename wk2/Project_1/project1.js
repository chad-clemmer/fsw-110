var newNavbar = document.createElement('nav')
document.body.appendChild(newNavbar)

var newUnorderedList = document.createElement('ul')
document.querySelector('nav').appendChild(newUnorderedList)

var linkItem1 = document.createElement('li')
linkItem1.innerHTML = "Home".link("http://www.google.com")
document.querySelector('ul').appendChild(linkItem1)

var linkItem2 = document.createElement('li')
linkItem2.innerHTML = "Another Home".link("http://www.playstation.com")
document.querySelector('ul').appendChild(linkItem2)

var linkItem3 = document.createElement('li')
linkItem3.innerHTML = "Finally, a third home".link("http://www.xbox.com")
document.querySelector('ul').appendChild(linkItem3)

var newHeader1 = document.createElement("h1")
newHeader1.textContent = 'Welcome to my Project 1 site'
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

var newFooter = document.createElement('footer')
document.body.appendChild(newFooter)

var newFooterText = document.createElement('p')
newFooterText.textContent = 'This is my Footer Text'
document.querySelector('footer').appendChild(newFooterText)