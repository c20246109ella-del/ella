console.log("Hello world!");
console.log("From script.js file");

const myName = "Carl";
const address = "canetown";
let number = "09606534539";
let age = 21;

console.log(`Name: ${myName}`)
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings, names = ["Carl", "bal", "tol", "bai", "perd"]) {
    if (Array.isArray(names)) {
        names = names.join(",")
    }
    return `${greetings} sa enyu ${names}`;
}
console.log(greet("Mayung aga", ["Carl", "bal", "tol", "bai", "perd"]));

const heading = document.querySelector("h1");
heading.textContent = "Dennis S. Ella";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("Heading was clicked");
});
const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;
toggleButton.addEventListener("click", function () {
    isOff = !isOff;
    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});

