/*
function add() {
    var num1, num2, sum;
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);
    sum = num1 + num2;
    document.getElementById("result").value = sum;
}
*/
var test = document.createElement("div")
test.setAttribute("id", "div1")
document.body.append(test)
var text = document.createElement("input")
text.setAttribute("class", "input")
var text2 = document.createElement("input")
text2.setAttribute("class", "input2")
test.append(text)
test.append(text2)
var button1 = document.createElement("button")
button1.setAttribute("id", "button1")
test.append(button1)
button1.textContent = "add"
var text3 = document.createElement("p")
text3.setAttribute("id", "p1")
    test.append(text3)
button1.addEventListener("click", function(){
    text3.textContent = Number(text.value) + Number(text2.value)
})

var test2 = document.createElement("div")
test2.setAttribute("id", "div2")
document.body.append(test2)
var text4 = document.createElement("input")
text4.setAttribute("class", "input")
var text5 = document.createElement("input")
text5.setAttribute("class", "input2")
test2.append(text4)
test2.append(text5)
var button2 = document.createElement("button")
button2.setAttribute("id", "button2")
test2.append(button2)
button2.textContent = "subtract"
var text6 = document.createElement("p")
text6.setAttribute("id", "p2")
    test2.append(text6)
button2.addEventListener("click", function(){
    text6.textContent = Number(text4.value) - Number(text5.value)
})

var test3 = document.createElement("div")
test3.setAttribute("id", "div3")
document.body.append(test3)
var text7 = document.createElement("input")
text7.setAttribute("class", "input")
var text8 = document.createElement("input")
text8.setAttribute("class", "input2")
test3.append(text7)
test3.append(text8)
var button3 = document.createElement("button")
button3.setAttribute("id", "button3")
test3.append(button3)
button3.textContent = "multiply"
var text9 = document.createElement("p")
text9.setAttribute("id", "p3")
    test3.append(text9)
button3.addEventListener("click", function(){
    text9.textContent = Number(text7.value) * Number(text8.value)
})