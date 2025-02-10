const p = document.createElement("p");  // red text
p.style.cssText = "color: red";
p.textContent = "Hey I’m red!";
const h3 = document.createElement("h3");  // blue text
h3.style.cssText = "color: blue";
h3.textContent = "I’m a blue h3!";
const div = document.createElement("div");  // black border, pink background
div.style.cssText = "border-color: black; background: pink";

// elements inside div
const h1 = document.createElement("h1");  // says "I'm in a div"
h1.textContent = "I'm in a div";
const p2 = document.createElement("p");   // says "ME TOO!"
p2.textContent = "ME TOO!";

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

div.appendChild(h1);
div.appendChild(p2);

let container = document.querySelector("#container");

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
