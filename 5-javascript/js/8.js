let name = document.getElementById("first-name"),
  lastName = document.getElementById("last-name"),
  dob = document.getElementById("Date"),
  email = document.getElementById("Email"),
  form = document.getElementById("Form"),
  showOutput = document.getElementById("append-table");

let date = new Date();
let dateMonth = date.getMonth() + 1;
dateMonth < 10 ? (dateMonth = "0" + dateMonth) : (dateMonth = dateMonth);
let dateDay = date.getDate();
dateDay < 10 ? (dateDay = "0" + dateDay) : (dateDay = dateDay);
let dateYear = date.getFullYear();
let maxDate = dateYear + "-" + dateMonth + "-" + dateDay;
dob.setAttribute("max", maxDate);

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
    onClick: function () {}, // Callback after click
  }).showToast();
}

class User {
  constructor(firstName, lastName, userEmail, age, dateOfB) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = userEmail;
    this.age = age;
    this.dateOfB = dateOfB;
  }
}
let userArr = [];
form.addEventListener("submit", () => {
  event.preventDefault();
  if (name.value < 2) return error("Please Enter your proper name");
  if (lastName.value < 2) return error("Please Enter your proper name");
  let regx = /^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-z]{0,4}$/;
  if (!regx.test(email.value)) return error("Please Enter valid email");
  if (!dob.value) return error("Please Enter your Date of Birth");
  let newDateOfBirth = new Date(dob.value);
  let todayDate = new Date();
  let age = todayDate - newDateOfBirth;
  age = age / 86400000 / 365;
  let user = new User(
    name.value,
    lastName.value,
    email.value,
    Math.floor(age),
    dob.value
  );
  userArr.push(user);
  form.reset();
});
function showTable() {
  let tableHead = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody id="append-table">
        </tbody>`;
  let tableFoot = `</table>`;
  let html = "";
  userArr.forEach((element, index) => {
    html += `<tr>
        <td>${index + 1}</td>
        <td>${element.firstName}</td>
        <td>${element.lastName}</td>
        <td>${element.email}</td>
        <td>${element.dateOfB}</td>
        <td>${Math.floor(element.age)}</td>
        </tr>`;
  });
  showOutput.innerHTML = tableHead + html + tableFoot
}
function printUser() {
  console.log(userArr);
}

function showImage() {
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

  open("/5.html", "test", params);
}
