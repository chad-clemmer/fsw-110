for (var i = 0; i < 10; i++) {
    var newHeader1 = document.createElement("h1")
    newHeader1.textContent = 'Hello World'
    document.body.appendChild(newHeader1)
    newHeader1.style.color = "blue"
}


var names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

var newList = document.createElement('ul')
    document.body.appendChild(newList)

for (var i = 0; i < names.length; i++){
    
    var newName = document.createElement('li')
    newName.textContent = names[i]
    newList.append(newName)
}
