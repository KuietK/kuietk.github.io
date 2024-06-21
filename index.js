function darkMode() {
    var element = document.body;
    element.classList.toggle("eyebleed")
}

function changE() {
    var x = document.getElementById("helloDIV");
    if (x.innerHTML === "Hello World!") {
        x.innerHTML = "Goodbye!";
    } else {
        x.innerHTML = "Hello World!";
    }

}