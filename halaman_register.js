
function register(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPass = document.getElementById("confPassword").value;


    if(password == confirmPass && 
        password !== "" &&
        confirmPass !== "" &&
        username !== "" &&
        email !=="") {
        console.log ([username, email, password]);
        alert("Registrasi berhasil.")
    }
    else{
        alert("Input required.")
    }
}


