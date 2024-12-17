const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const btn = document.getElementById("login-btn");


const usernameValue = /^admin$/;
const passwordValue = /^admin$/;

btn.addEventListener("click", event=>{
    event.preventDefault();
    if (usernameValue.test(username.value) && passwordValue.test(password.value)) {
        message.textContent = "Login Successful";
        message.style.color="green";
    } else {
        message.textContent = "Invalid username or password. Please try again.";
        message.style.color="red";

    }
})

