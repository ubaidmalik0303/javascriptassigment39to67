//Q no 1

var i = 10;
function zoomIn(){
    var a = document.getElementById('para');
    i+=10
    a.style.fontSize = i+'px';
}

function zoomOut(){
    var a = document.getElementById('para');
    i+=-10
    a.style.fontSize = i+'px';
}




//Q no 2

function showImage(e){
    var a = document.getElementById('modalimg');
    a.src = e.src;
}