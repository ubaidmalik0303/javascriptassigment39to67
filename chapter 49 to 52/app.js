//Events


//Q no 1

function formsubmit(){
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var pnumber = document.getElementById('pnumber');
    var password = document.getElementById('password');
    document.write("<h1>First Name: " + fname.value + "</h1>");
    document.write("<h1>Last Name: " + lname.value + "</h1>");
    document.write("<h1>Email: " + email.value + "</h1>");
    document.write("<h1>Phone Number: " + pnumber.value + "</h1>");
    document.write("<h1>Password: " + password.value + "</h1>");
}




//Q no 2

function moreText(){
    var a = document.getElementById('para1');
    var b = document.getElementById('readmorebtn');
    b.style.display = 'none';
    a.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.";
}



//Q no 3


function formSubmit(){
    var a = document.getElementById('stdname');
    var b = document.getElementById('stdclass');
    var c = document.getElementById('stdage');
    var d = document.getElementById('stdlist');
    var i = 0;
    var e = document.createElement('tr');
    var row = "<td>" + a.value + "</td><td>"+ b.value + "</td><td>" + c.value + "</td><td><button id='edit-btn' onclick='editBtn(this)'>Edit</button></td><td><button id='dlt-btn' onclick='deleteBtn(this)'>Delete</button></td>";
    d.appendChild(e).innerHTML = row;
    a.value = "";
    b.value = "";
    c.value = "";
}


function deleteBtn(e){
    e.parentElement.parentElement.remove();
}

function editBtn(f){
    f.parentElement.parentElement.remove();
    var a = document.getElementById('stdname');
    var b = document.getElementById('stdclass');
    var c = document.getElementById('stdage');
    c.value = f.parentNode.previousSibling.innerHTML;
    b.value = f.parentNode.previousSibling.previousSibling.innerHTML;
    a.value = f.parentNode.previousSibling.previousSibling.previousSibling.innerHTML;
}