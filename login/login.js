document.getElementById('loginForm').addEventListener("submit", function(e) {
    e.preventDefault();
    if (checkInput()) {
        var name = document.getElementById('name').value.trim();
        localStorage.setItem('username', name);
        window.location.href = 'home.html'; 
    }
});

function checkInput() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var pass = document.getElementById('pass').value.trim();
    var cpass = document.getElementById('conpass').value.trim();
    var nameRegx = /[a-zA-Z]/;
    var emailRegx = /^([a-zA-Z0-9._]+)@([a-z]+)\.com$/;
    var isValid = true;

    if (name === "") {
        setError(document.getElementById('name'), "Name cannot be blank");
        isValid = false;
    } else if (!nameRegx.test(name)) {
        setError(document.getElementById('name'), "Not a valid name");
        isValid = false;
    } else {
        setSuccess(document.getElementById('name'));
    }

    if (email === "") {
        setError(document.getElementById('email'), "Email cannot be blank");
        isValid = false;
    } else if (!emailRegx.test(email)) {
        setError(document.getElementById('email'), "Not a valid email");
        isValid = false;
    } else {
        setSuccess(document.getElementById('email'));
    }

    if (pass === "") {
        setError(document.getElementById('pass'), "Password cannot be blank");
        isValid = false;
    } else if (!/[A-Z]/.test(pass) || !/[a-z]/.test(pass)) {
        setError(document.getElementById('pass'), "Password must contain at least one uppercase and one lowercase letter");
        isValid = false;
    } else {
        setSuccess(document.getElementById('pass'));
    }

    if (cpass === "") {
        setError(document.getElementById('conpass'), "Confirm password cannot be blank");
        isValid = false;
    } else if (pass !== cpass) {
        setError(document.getElementById('conpass'), "Passwords do not match");
        isValid = false;
    } else {
        setSuccess(document.getElementById('conpass'));
    }

    return isValid;
}

function setError(input, message) {
    var formControl = input.parentElement;
    var errorDisplay = formControl.querySelector('.error-message');
    errorDisplay.innerText = message;
    formControl.className = 'inputbox error';
}

function setSuccess(input) {
    var formControl = input.parentElement;
    var errorDisplay = formControl.querySelector('.error-message');
    errorDisplay.innerText = '';
    formControl.className = 'inputbox success';
}
