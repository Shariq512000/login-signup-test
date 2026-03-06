let localStrVal = localStorage.getItem("users") // null

let users = []

if(localStrVal){
    users = JSON.parse(localStrVal)
}

function registerUser(){
    let userName = document.getElementById("userName").value
    let userEmail = document.getElementById("userEmail").value
    let userPassword = document.getElementById("userPassword").value

    for(let i = 0; i < users.length; i++){
        if(users[i].email == userEmail){
            alert("Already Register Account on this Email")
            return;
        }
    }

    let userObj = {
        name: userName,
        email: userEmail,
        password: userPassword
    }
    users.push(userObj)

    let convertUserToStr = JSON.stringify(users)

    localStorage.setItem("users", convertUserToStr)
}

console.log(users)

console.log(window.location.pathname)

function loginUser(){
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    let currentUser = null;

    for(let i = 0; i < users.length; i++){
        if(users[i].email == userEmail){
            currentUser = users[i];
            break;
        }
    }

    if(currentUser){

        if(currentUser.password == userPassword){
            // alert("User Logedin")
            window.location.pathname = "/login-signup-test/dashboard.html"
        }else{
            alert("Password did not matched")
        }

    }else{
        alert("Account Not Register with this email")
    }

}
