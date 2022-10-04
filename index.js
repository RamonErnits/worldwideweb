var mysql = require('mysql');

const loginButton = document.getElementById("login-form-submit");
const registerButton = document.getElementById("register-form-submit");

let Firsname = document.getElementById("firstname");
let Lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;


const fields = [username, password, email, Firsname, Lastname];


class User {
    constructor(username, password, email, firstname, lastname) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}


/* onclick register button add user to database */
registerButton.addEventListener("click", function () {
    let user = new User(username, password, email, Firsname, Lastname);
    addUser(user);

    if(fields == ""){
        alert("Please fill in all fields");
    }
    /* if user already exists show alert */
    else if (userExists(user)) {
        alert("User already exists");
    }
    /* if user does not exist add user to database */
    else {
        addUser(user);
        alert("Registration successful");
    }
});

/* onclick login button check if user exists */
loginButton.addEventListener("click", function () {
    let user = new User(username, password, email, Firsname, Lastname);
    if(fields == ""){
        alert("Please fill in all fields");
    }
    if (userExists(user)) {
        alert("Login successful");
    }
    else {
        alert("User does not exist");
    }
});















