// CONSTANTS
const letterS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// theme toggle
function darkmodE() {
    var element = document.body;
    element.classList.toggle("eyebleed")
}

// change text
function changE() {
    var x = document.getElementById("helloDIV");
    if (x.innerHTML === "Hello World!") {
        x.innerHTML = "Goodbye!";
    } else {
        x.innerHTML = "Hello World!";
    }

}

//function pasS() {
//    var x = document.getElementById("passDIV");
//    //wtf... just make it random
//    for (let i in letterS) {
//       console.log(i);
// }
// x.innerHTML = "5";
//}

function pasS() {
    var x = document.getElementById("passDIV");
    // targets [passDIV]
    var picK = letterS[Math.floor(Math.random() * letterS.length)];

    x.innerHTML = picK

}