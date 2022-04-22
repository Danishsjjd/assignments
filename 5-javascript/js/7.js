// Golbal variables
const output = document.getElementById("output");
let date = new Date();
function showOutput(pare) {
    output.innerHTML = pare;
}
function clearOutput(){
    output.innerText = ""
}
// first btn 
function ifElse(){
    let hours = date.getHours();
    let message;
    if(hours < 19 && hours >= 12){
        message = "Good after noon"
    }
    else if(hours > 6 && hours < 12){
        message = "Good Morning"
    }else{
        message = "Good night"
    }
    output.innerText = message;
}
function Switch(){
    let today = date.getDay()
    switch (today){
        case 0:
        output.innerText = "sunday"
        break;
        case 1:
        output.innerText = "monday"
        break;
        case 2:
        output.innerText = "tuesday"
        break;
        case 3:
        output.innerText ='wednesday'
        break;
        case 4:
        output.innerText = "tuesday"
        break;
        case 5:
        output.innerText = "Friday"
        break;
        case 6:
        output.innerText = "saturday"
        break;
        default: 
        output.innerText = "function is not working properly"
    }
}
function keepAskingName(){
    let a;
    do{
        a = prompt("Enter your name")
    }while(a == null || a == undefined)
    output.innerText = a;
}