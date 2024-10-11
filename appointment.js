let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
}

if (ageInput.value !== "") {
    ageValid = true;
}

if (userValid === false || ageValid === false) {
    e.preventDefault();
}
};

document.getElementsByClassName("submit")[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
    let message = document.getElementsByClassName("mes-green")[0]
    message.style.display = "block"
};
