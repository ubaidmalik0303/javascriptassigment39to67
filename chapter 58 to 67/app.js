//DOM


//Q no 1

// i

var a = document.getElementById('main-content');

//ii

console.log(a.childNodes)

//iii

var b = document.getElementsByClassName('render');

for(var i = 0 ; i < b.length ; i++){
    console.log(b[i].innerHTML);
}

//iv

var c = document.getElementById('first-name');

c.value = "Ubaid";


//v

var d = document.getElementById('last-name');
var e = document.getElementById('email');

d.value = "Malik";
e.value = "ubaidmalik515151@gmail.com";





//Q no 2

//i

var f = document.getElementById('form-content');

console.log(f.nodeType);


//ii

var g = document.getElementById('lastName');

console.log(g.nodeType);
console.log(g.childNodes);


//iii

var h = document.getElementById("lastName");

console.log(h.nodeValue = "Update");


//iv

var j = document.getElementById('main-content');

console.log(j.firstChild);
console.log(j.lastChild);


//v 

var k = document.getElementById('lastName');

console.log(k.nextSibling);
console.log(k.previousSibling);


//vi

var l = document.getElementById('email');

console.log(l.parentNode);
console.log(l.nodeType);

