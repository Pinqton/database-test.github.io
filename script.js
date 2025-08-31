const user = "hello";
const pass = "world";

const label = document.getElementById("message");

function login_clicked() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    label.hidden = false;

    if (username === user && password === pass) {
        label.innerText = "Logged in successfully";
        label.style.backgroundColor = "#3ff374";
        label.style.color = "black";
    } else {
        label.innerText = "Login failed";
        label.style.backgroundColor = "#ed5a5a";
        label.style.color = "black";
    }
}
