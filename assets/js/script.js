// Directed by Morteza Ali Soleimani
// github page : https://github.com/Coderboy2008


// Form elements defintion
let chk = document.querySelector(".chk-box");
let usernameInput = document.querySelector(".username-inpt");
let passwordInput = document.querySelector(".pass-inpt");
let submit = document.querySelector(".submit");

// Error elements defintion
let error = document.querySelector(".error");
let errorText = document.querySelector(".error-text");
let timeBar = document.querySelector(".timebar");

// warning elements defintion
let usernameWarning = document.querySelector(".warning-user");
let passwordWarning = document.querySelector(".warning-pass");

// Show/hide password
chk.addEventListener("click", ()=>{
    chk.classList.toggle("active");
    if (passwordInput.type == "password"){
        passwordInput.type = "text"
    }
    else{
        passwordInput.type = "password"
    }
})

// Submit click events
submit.addEventListener("click", ()=>{
    if (usernameInput.value.length < 6 || passwordInput.value.length < 8) {
        // Showing error login(incorrect values)
        error.style.opacity = 1;
        error.style.background = 'rgb(221 34 34 / 90%)';
        errorText.innerHTML = "Login failed. retry...";
        timeBar.style.width = '0px';
        timeBar.style.background = '#e900004f';
        timeBar.style.visibility = 'visible';
        timeBar.style.transition = "all 3s linear";
    } else {
        // "Successful" message for login 
        error.style.opacity = 1;
        errorText.innerHTML = "Login succesfuly"
        error.style.background = 'rgb(29 129 37 / 70%)';
        timeBar.style.width = '0px';
        timeBar.style.background = '#e900004f';
        timeBar.style.visibility = 'visible';
        timeBar.style.transition = "all 3s linear";
    }
    // Reseting error & time bar
    setTimeout(()=>{
        error.style.opacity = 0;
        timeBar.style.transition = "all 0s linear";
        timeBar.style.visibility = 'hidden';
        timeBar.style.width = '250px';
    },3000)
})

// Username input warning & validation
usernameInput.addEventListener("keyup", ()=>{
    if (usernameInput.value.length < 6) {
        // Username warning
        usernameWarning.style.opacity = 1;
        usernameWarning.style.display = 'block';
        usernameWarning.style.color = 'red';
        usernameWarning.innerHTML = 'Username to low! (min : 6 ch)';
    } else {
        // Username validation
        usernameWarning.style.opacity = 1;
        usernameWarning.style.display = 'block';
        usernameWarning.style.color = 'green';
        usernameWarning.innerHTML = 'Username valid!';
    }
})

// Password input warning & validation
passwordInput.addEventListener("keyup", ()=>{
    if (passwordInput.value.length < 8) {
        // Password warning
        passwordWarning.style.opacity = 1;
        passwordWarning.style.display = 'block';
        passwordWarning.style.color = 'red';
        passwordWarning.innerHTML = 'Password to low! (min : 8 ch)';
    } else {
        // Password validation
        passwordWarning.style.opacity = 1;
        passwordWarning.style.display = 'block';
        passwordWarning.style.color = 'green';
        passwordWarning.innerHTML = 'Password valid!';
    }
})