document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "" && password == "") {
        alert("Please fill username and password");
        document.querySelector("#form").reset();
        return false;
        
    } else {
        window.location.href = "student.html";
        return true;
        
    }

}


