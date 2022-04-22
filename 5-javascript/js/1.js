//function that we use all time
let showOriginal = document.getElementById("show-original");
let show = document.getElementById("showhere");
function showOriginalData(e){
    showOriginal.innerHTML = e;
}
document.getElementById("clear-output").onclick = function(){
    showhere.innerHTML = ""
}
document.getElementById("clear-original").onclick = function(){
    showOriginal.innerHTML = ""
}
// btn functions
document.getElementById("btn-1").onclick = function () {
    alert(0);
    show.innerHTML = 0;
    showOriginalData(`
    alert(0); <br>
    show.innerHTML = 0;`)
}
document.getElementById("btn-2").onclick = function () {
    let name = "Danish Sajjad";
    alert(name);
    show.innerHTML = name;
    showOriginalData(`
    let name = "Danish Sajjad";<br>
    alert(name); <br>
    show.innerHTML = name;`)
}
document.getElementById("btn-3").onclick = function () {
    let a = +prompt("Sum, Enter first number ")
    let b = +prompt("Sum, Enter second number ")
    let x = a + b;
    alert(x);
    show.innerHTML = x;
    showOriginalData(`
    let a = +prompt("Sum, Enter first number ")<br>
    let b = +prompt("Sum, Enter second number ")<br>
    let x = a + b;<br>
    alert(x);<br>
    show.innerHTML = x;`)
}
document.getElementById("btn-4").onclick = function () {
    let a = prompt("Subtract, Enter first number ")
    let b = prompt("Subtract, Enter second number ")
    let x = a - b;
    alert(x);
    show.innerHTML = x;
    showOriginalData(`
    let a = prompt("Subtract, Enter first number ")<br>
    let b = prompt("Subtract, Enter second number ")<br>
    let x = a - b;<br>
    alert(x);<br>
    show.innerHTML = x;`)
}
document.getElementById("btn-5").onclick = function () {
    let a = prompt("Multiply, Enter first number ")
    let b = prompt("Multiply, Enter second number ")
    let x = a * b;
    alert(x);
    show.innerHTML = x;
    showOriginalData(`
    let a = prompt("Multiply, Enter first number ")<br>
    let b = prompt("Multiply, Enter second number ")<br>
    let x = a * b;<br>
    alert(x);<br>
    show.innerHTML = x;`)
}
document.getElementById("btn-6").onclick = function () {
    let a = prompt("Divide, Enter first number ")
    let b = prompt("Divide, Enter second number ")
    let x = a / b;
    alert(x);
    show.innerHTML = x;
    showOriginalData(`
    let a = prompt("Divide, Enter first number ")<br>
    let b = prompt("Divide, Enter second number ")<br>
    let x = a / b;<br>
    alert(x);<br>
    show.innerHTML = x;`)
}
document.getElementById("btn-7").onclick = function () {
    let a = prompt("Concatenate, Enter first Name ")
    let b = prompt("Concatenate, Enter second Name ")
    let x = a + " " + b;
    alert(x);
    show.innerHTML = x;
    showOriginalData(`
    let a = prompt("Concatenate, Enter first Name ")<br>
    let b = prompt("Concatenate, Enter second Name ")<br>
    let x = a + " " + b;<br>
    alert(x);<br>
    show.innerHTML = x;`)
}
document.getElementById("btn-8").onclick = function () {
    let a = 69 - 5 * 2 + 2 / 3
    alert("total is " + a)
    show.innerHTML = a;
    showOriginalData(`
    let a = 69 - 5 * 2 + 2 / 3<br>
    alert("total is " + a)<br>
    show.innerHTML = a;`)
}
document.getElementById("btn-9").onclick = function () {
    let a = prompt("Enter number for increment");
    let b = ++a;
    alert(b);
    show.innerHTML = b;
    showOriginalData(`
    let a = prompt("Enter number for increment");<br>
    let b = ++a;<br>
    alert(b);<br>
    show.innerHTML = b;`)
}
document.getElementById("btn-10").onclick = function () {
    let a = prompt("Enter number for decrement");
    let b = --a;
    alert(b);
    show.innerHTML = b;
    showOriginalData(`
    let a = prompt("Enter number for decrement");<br>
    let b = --a;<br>
    alert(b);<br>
    show.innerHTML = b;`)
}
document.getElementById("btn-11").onclick = function () {
    let a = prompt("Enter your full first Name")
    alert(a);
    show.innerHTML = "Your Full Name is " + 1;
    showOriginalData(`
    let a = prompt("Enter your full first Name")<br>
    alert(a);<br>
    show.innerHTML = "Your Full Name is " + x;`)
}
document.getElementById("btn-12").onclick = function () {
    let b = prompt("Enter your age")
    let x = b;
    alert(x);
    show.innerHTML = "Your age is " + x;
    showOriginalData(`
    let b = prompt("Enter your age");<br>
    let x = b;<br>
    alert(x);<br>
    show.innerHTML = "Your age is " + x;`)
}
document.getElementById("btn-13").onclick = function () {
    let a = prompt("Enter first number ")
    alert(a);
    show.innerHTML ="Your input number is " + a;
    showOriginalData(`
    let a = prompt("Enter first number ")<br>
    alert(a);<br>
    show.innerHTML ="Your input number is " + a;`)
}