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
