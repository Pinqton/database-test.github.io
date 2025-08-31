const user = "hello";
const pass = "world";

const label = document.getElementById("message");

function showSuccess() {
    label.innerText = "Logged in successfully";
    label.style.backgroundColor = "#3ff374";
}

function showFailure() {
    label.innerText = "Login failed";
    label.style.backgroundColor = "#ed5a5a";
}

function login_clicked() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (label.hidden) label.hidden = false;
    if (username === user && password === pass) showSuccess(); else showFailure();
}
