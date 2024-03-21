const body = document.querySelector("body");
console.log(body);
const h1 = document.querySelector("h1");
console.log(h1);
h1.textContent = "hi i DONT love you";
const image = document.querySelector("img");
image.src = "./assets/sad seal.gif";

const h2 = document.createElement("h2");
h2.textContent = "sad seal deserves love";
body.appendChild(h2);

h1.remove();
