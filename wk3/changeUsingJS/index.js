for (var i = 0; i < 5; i++) {
    var newHeader2 = document.createElement("h2")
    newHeader2.textContent = 'Hello World'
    document.body.appendChild(newHeader2)
    newHeader2.style.fontSize = '20px'
    newHeader2.style.color = 'cornflowerblue'
    newHeader2.style.fontWeight = 'lighter'
    newHeader2.style.fontFamily = 'sans-serif'
    newHeader2.className = 'newClass'
    newHeader2.classList.add('border')
}
