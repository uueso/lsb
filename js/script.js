
document.getElementById("signup-btnHead").addEventListener("click", function() {

    window.location.href = "../signup/signup.html";
});


const headerBurger = document.getElementById('nav-toggle');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
});

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


const signupButton = document.querySelector(".signup-btn");

signupButton.addEventListener("click", function() {
    const loginInput = document.getElementById("login");
    const loginInputLog = document.getElementById("loginLog");
    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    const passwordInputLog = document.getElementById("passwordLog");

    if (!loginInput.value) {
        loginInput.style.borderBottomColor = "red";
    } else {
        loginInput.style.borderBottomColor = "";
    }

    if (!loginInputLog.value) {
        loginInputLog.style.borderBottomColor = "red";
    } else {
        loginInputLog.style.borderBottomColor = "";
    }

    if (!nameInput.value) {
        nameInput.style.borderBottomColor = "red";
    } else {
        nameInput.style.borderBottomColor = "";
    }

    if (!passwordInput.value) {
        passwordInput.style.borderBottomColor = "red";
    } else {
        passwordInput.style.borderBottomColor = "";
    }

    if (!passwordInputLog.value) {
        passwordInputLog.style.borderBottomColor = "red";
    } else {
        passwordInputLog.style.borderBottomColor = "";
    }

    if (loginInput.value && nameInput.value && passwordInput.value && passwordInputLog.value && loginInputLog.value) {
        openPopUp.click();
    }
});



const openPopUp = document.getElementById("popup-open");

const closePopUp =  document.getElementById("popup-close");
const PopUp = document.getElementById("popup");

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    PopUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    PopUp.classList.remove('active');
});
