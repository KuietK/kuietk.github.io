function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}

function changE() {
    var x = document.getElementById("helloDIV");
    if (x.innerHTML === "Hello") {
        x.innerHTML = "Goodbye!";
    } else {
        x.innerHTML = "Hello";
    }

}