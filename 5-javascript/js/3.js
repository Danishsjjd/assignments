// Golbal variables
const input = document.getElementById("input"),
output = document.getElementById("output"),
originalString = document.getElementById("originalString");
let cities = ["faisalabad", "lahore", "Islamabad", "karachi"]
cities.forEach((element, index) =>{
    originalString.innerHTML += " " + (index + 1) +") " + element;
})
let outputhere = output.innerText;
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
// btn
function simpleAlert() {
    let inputhere = input.value;
    if (!inputhere) {
        error("Please Enter Some text")
        return;
    }
    alert(inputhere)
    clearInput()
}
function PrintName(){
    let inputhere = input.value;
    if (!inputhere) {
        error("Please Enter Some text")
        return;
    }
    output.innerHTML = inputhere
    clearInput()
}
function printAllCities(){
    output.innerHTML = ""
    cities.forEach((element, index) =>{
        output.innerHTML += (index + 1) + ") " + element + "<br>"
    })
    clearInput()
}
function AddYourCity(){
    let inputhere = input.value;
    if(!inputhere){
        return error("Please Enter city name you want to add");
    }
    cities.push(inputhere)
    clearInput()
    showOutput("Your city array is update")
}
function generateTable(){
    let inputhere = input.value;
    output.innerText = ""
    for(var i = 1; i <= 10; i++){
        output.innerHTML += inputhere + " X " + i + " = " + (i * inputhere) + "<br>";
    }
}