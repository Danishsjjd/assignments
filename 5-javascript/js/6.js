// Golbal variables
const input = document.getElementById("input"),
    output = document.getElementById("output"),
    originalString = document.getElementById("originalString");
    let Weak = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thusday", "Friday", "Staurday"]
    let date = new Date();
    originalString.innerText = date;
    // Golbal Function
let clearInput = () => {
    input.value = "";
}
let clearOutput = () => {
    output.innerHTML = "";
}
function showOutput(pare) {
    output.innerHTML = pare;
}
function tellTime() {
    let dated = new Date();
    let hour = dated.getHours();
    let min = dated.getMinutes();
    let sec = dated.getSeconds();
    showOutput(`You click this button at ${hour}:${min}:${sec}`)
}
let clickDate = new Date();
// first btn 
function todayName() {
    let d = date.getDay();
    showOutput(Weak[d])
}
// second btn
function dayPass() {
    let dob = new Date(input.value);
    let dated = new Date()
    let dobInSec = dob.getTime();
    let datedInSec = dated.getTime();
    let finalDate = datedInSec - dobInSec;
    let fullFinalDate = (finalDate / (1000 * 60 * 60 * 24));
    showOutput(Math.floor(fullFinalDate + 1))
}
// third btn
function nextBHD() {
    let futureDob = new Date(input.value)
    let dated = new Date();
    let finalDate = futureDob.getTime() - dated.getTime();
    let fullFinal = (finalDate / (1000 * 60 * 60 * 24));
    showOutput(Math.floor(fullFinal))
}
// fourth btn
function greetUser() {
    let user = prompt("Enter use name")
    showOutput("Good Morning" + " " + user)
}
// fifth sixth and seven
function tellTime1() {
    tellTime();
}
function tellTime2() {
    tellTime();
}
function tellTime3() {
    tellTime();
}
//last btn 
function askingName() {
    let a = prompt("Enter your name");
    do{
        a = prompt("Enter Your name")
    }while(a === null)
    showOutput(`Welcome ${a}`)
}