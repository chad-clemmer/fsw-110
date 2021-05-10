var div1 = document.createElement("div");
div1.setAttribute("class", "div1");
document.body.appendChild(div1);

var hdr = document.createElement("h1");
hdr.textContent = "Interact to change square color";
document.querySelector("div").appendChild(hdr);


var btn = document.createElement("button");
btn.setAttribute("id", "square");
btn.textContent = "BUTTON"
document.querySelector("div").appendChild(btn);


document.getElementById("square").addEventListener("mouseover", function(){
    this.style.backgroundColor = "green";
});

document.getElementById("square").addEventListener("mousedown", function(){
    this.style.backgroundColor = "yellow";
});

document.getElementById("square").addEventListener("mouseup", function(){
    this.style.backgroundColor = "blue";
});

document.getElementById("square").addEventListener("dblclick", function(){
    this.style.backgroundColor = "red";
});

window.addEventListener("scroll", function(){
    document.getElementById("square").style.backgroundColor = "purple";
});

window.addEventListener("load", function(){
    document.getElementById("square").style.backgroundColor = "black";
})

document.addEventListener("keydown", function(event) {
    if (event.which == 82) {
        document.getElementById("square").style.backgroundColor = "red"; 
    }
    else if (event.which == 66) {
        document.getElementById("square").style.backgroundColor = "blue";
    }
    else if (event.which == 71) {
        document.getElementById("square").style.backgroundColor = "green";
    }
    else if (event.which == 80) {
        document.getElementById("square").style.backgroundColor = "purple";
    }
    else if (event.which == 89) {
        document.getElementById("square").style.backgroundColor = "yellow";
    }
    else if (event.which == 87) {
        document.getElementById("square").style.backgroundColor = "white";
    }
})
