const containerEl = document.querySelector(".container")
const btnEl = document.querySelector(".btn")

const popupContainerEl = document.querySelector(".popup")

const closeIconEl = document.querySelector(".close-icon")

//adding eventlister method to button, to popup window and blurr the background

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");


})
closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
})

function join() {
    document.location.href = "file:///C:/Users/renuk/Desktop/javascriptProject/Home/website/shop.html";
}

/* login and register*/

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    localStorage.setItem("setName", name);
    localStorage.setItem("setEmail", email);
    localStorage.setItem("setPass", pass);
    if (email === "" || pass === "") {
        alert("email and password can not be empty")
    } else {
        alert("Account created");
       // window.location.replace('login.html');
       window.open('login.html ')
    }

}

//login function
function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let getEmail = localStorage.getItem("setEmail");
    let getPass = localStorage.getItem("setPass");

    if (email === getEmail && pass === getPass) {
        window.open('website/shop.html ')
        // window.location.replace('./website/shop.html');
    } else { alert("email and password are wrong!") }
}
