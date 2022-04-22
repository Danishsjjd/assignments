//function that we use all time
let showOriginal = document.getElementById("showOriginal");
let show = document.getElementById("showhere");

function showOriginalData(e) {
    showOriginal.innerHTML = e;
}
document.getElementById("clear-output").onclick = function () {
    showhere.innerHTML = ""
}
document.getElementById("clear-original").onclick = function () {
    showOriginal.innerHTML = ""
}

// btn functions

function concate() {
    let a = prompt("Enter your First name")
    let b = prompt("Enter your Last name")
    let c = a + " " + b
    show.innerText = c
    showOriginalData(`
    let a = prompt("Enter your First name")<br>
    let b = prompt("Enter your Last name")<br>
    let c = a + " " + b<br>
    show.innerText = c`)
}
function yourName() {
    let a = prompt("Enter your First name")
    show.innerText = a
    showOriginalData(`
    let a = prompt("Enter your name")<br>
    show.innerText = a`)
}
function Comparison() {
    let a = +prompt("Enter your First Number")
    let b = +prompt("Enter your Second Number")
    if (a > b) {
        show.innerText = `${a} is greater than ${b}`
    } else {
        show.innerText = `${a} is less than ${b}`
    }
    showOriginalData(`
    let a = +prompt("Enter your First Number") <br>
    let b = +prompt("Enter your Second Number") <br>
    if(a > b){ <br>
        show.innerText = "$"{a} is greater than $"{b}"<br>
    }else{<br>
        show.innerText = "$"{a} is less than $"{b}"<br>
    }`)
}
function ifElseIf() {
    let a = prompt("Enter your grades")
    let b;
    if (a > 80) {
        b = "Conguratulation! you got A+"
        alert(b)
    }
    else if (a > 60) {
        b = "Conguratulation! you got A"
        alert(b)
    }
    else {
        b = "Your need more practice"
        alert(b)
    }
    show.innerText = b;
    showOriginalData(`
    let a = prompt("Enter your grades")<br>
    let b;<br>
    if(a > 80){<br>
        b = "Conguratulation! you got A+"<br>
        alert(b)<br>
    }<br>
    else if(a > 60){<br>
        b = "Conguratulation! you got A"<br>
        alert(b)<br>
    }<br>
    else{<br>
        b = "Your need more practice"<br>
        alert(b)<br>
    }<br>
    show.innerText = b;<br>
}`)
}
function testing() {
    let a = prompt("Enter your grades")
    let b;
    if (a > 80) {
        b = "Conguratulation! you got A+"
        alert(b)
    }
    else if (a > 60) {
        b = "Conguratulation! you got A"
        alert(b)
    }
    else {
        b = "Your need more practice"
        alert(b)
    }
    show.innerText = b;
    showOriginalData(`
    let a = prompt("Enter your grades")<br>
    let b;<br>
    if(a > 80){<br>
        b = "Conguratulation! you got A+"<br>
        alert(b)<br>
    }<br>
    else if(a > 60){<br>
        b = "Conguratulation! you got A"<br>
        alert(b)<br>
    }<br>
    else{<br>
        b = "Your need more practice"<br>
        alert(b)<br>
    }<br>
    show.innerText = b;<br>
}`)
}
function ifNested(){
    let age = prompt("Enter your age")
    if(age > 18){
        let weight = prompt("Enter your Weith")
        let weightOutput;
        if(weight > 70){
            weightOutput = "You are a Fat guy"
        }
        else{
            weightOutput = "Your are a smart boy"
        }
        show.innerText = weightOutput;
    }
    else{
        show.innerText = "You are a baby"
    }
    showOriginalData(`
    let age = prompt("Enter your age")<br>
    if(age > 18){<br>
        let weight = prompt("Enter your Weith")<br>
        let weightOutput;<br>
        if(weight > 70){<br>
            weightOutput = "You are a Fat guy"<br>
        }<br>
        else{<br>
            weightOutput = "Your are a smart boy"<br>
        }<br>
        show.innerText = weightOutput;<br>
    }<br>
    else{<br>
        show.innerText = "You are a baby"<br>
    }`)
}
function login(){
    let a = "danish"
    let b = prompt("Enter Username")
    let output;
    if(b == "danish"){
        output = "Conguratulation! you are successfuly login"
    }
    else{
        output = "Username is incorrect"
    }
    show.innerText = output
    alert(output)
    showOriginalData(`
    let a = "danish"<br>
    let b = prompt("Enter Username")<br>
    let output;<br>
    if(b == "danish"){<br>
        output = "Conguratulation! you are successfuly login"<br>
    }<br>
    else{<br>
        output = "Username is incorrect"<br>
    }<br>
    show.innerText = output<br>
    alert(output)`)
}