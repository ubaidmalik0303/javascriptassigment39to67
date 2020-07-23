//Events

//Q no 1

function kk(){
    alert("Hello World");
}



//Q no 2

function phones(){
    alert("Thanks For Purchasing");
}



//Q no 3


function deleteBtn1(){
    document.getElementById('dlt-btn1').parentElement.parentElement.remove();
}
function deleteBtn2(){
    document.getElementById('dlt-btn2').parentElement.parentElement.remove();
}
function deleteBtn3(){
    document.getElementById('dlt-btn3').parentElement.parentElement.remove();
}
function deleteBtn4(){
    document.getElementById('dlt-btn4').parentElement.parentElement.remove();
}



//Q no 4

function changeImage(){
    var a = document.getElementById('imgforchange');
    a.src = '../img/2.jpg';
}

function changeImageBefore(){
    var a = document.getElementById('imgforchange');
    a.src = '../img/1.jpg';
}



//Q no 5

function increase(){
    var a = document.getElementById('counter');
    a.value++;
}

function decrease(){
    var a = document.getElementById('counter');
    a.value--;
}


