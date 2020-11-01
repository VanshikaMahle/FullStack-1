var x = document.getElementById("container");
//console.log(x);
x.style.width = "200px";
x.style.height = "200px";
x.style.backgroundColor = "red";
x.innerHTML = "Text added dynamically";

var y = document.getElementById("btn");
//console.log(y);
y.onclick = function() {
    alert("Button is clicked");
    x.style.backgroundColor = "blue";
    x.style.textAlign = "center";
    x.style.color = "white";
};