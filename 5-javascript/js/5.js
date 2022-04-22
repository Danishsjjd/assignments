// Golbal variables
const input = document.getElementById("input"),
    output = document.getElementById("output"),
    originalString = document.querySelector("#originalString");
let cities = ["faisalabad", "lahore", "Islamabad", "karachi"]
// Golbal Functions
function clearInput() {
    input.value = "";
}
function clearOutput() {
    output.innerHTML = "";
}
function error(innertext) {
    Toastify({
        text: innertext,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #c92f3c, #b32935)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
function showOutput(result) {
    output.innerHTML = result;
}
// other functions
function round() {
    let a = Math.round(originalString.innerHTML)
    showOutput(a)
}
function ceil() {
    let a = Math.ceil(originalString.innerHTML)
    showOutput(a)
}
function floor() {
    let a = Math.floor(originalString.innerHTML)
    showOutput(a)
}
function random() {
    let a = Math.random()
    showOutput(a)
}
function random() {
    let a = Math.random()
    showOutput(a)
}
function dice() {
    let a = Math.floor(Math.random() * 6 + 1)
    showOutput(a)
}
function genPassword() {
    let length = input.value, 
     num = [123456789],
     smallAlphabats = ["abcdefghijklmnopqrstuvwxyz"],
     captilAlphabats = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
     symbols = ["!@#$%^&*()-_+"],
     password = num + smallAlphabats + captilAlphabats + symbols;
     if(!length){
         error("Enter length for password")
         return;
     }
     output.innerHTML = "";
     for (i = 0; i < length;i++){
         output.innerHTML += password.charAt(Math.floor(Math.random() * password.length))
    }
}
function sToN(){
    let inputhere = input.value;
    if(!inputhere){
        error("enter String number to convert it into Number")
        return;
    }
    showOutput(`The type of string is now Number and the Number is ` + Number(inputhere))
}
function fix(){
    let inputhere = Number(input.value);
    if(!inputhere){
        error("Enter Number")
        return;
    }
    showOutput("2 value is set in toFixed function " + inputhere.toFixed(2))
}
function GST(){
    let inputhere = Number(input.value);
    if(!inputhere){
        error("Enter Text for GST")
        return;
    }
    showOutput(`<h1>Net Amount <br> ${(inputhere - (inputhere * (10 / 100))).toFixed(2)}</h1> <h1> GST(10.0%) <br> ${(inputhere * (10 / 100)).toFixed(2)}</h1><h1>Gross Amount <br> ${inputhere}</h1> `)
}