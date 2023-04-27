const divContainer = document.createElement("div");
divContainer.className = "container";

const textatea = document.createElement("textarea");
textatea.className = "textatea";

const h1 = document.createElement("h1");
h1.innerText = "RSS Virtual Keyboard";

const key = document.createElement("div");
key.className = "key";

const letter = document.createElement("div");
letter.className = "letter";
letter.innerText = "A";

const p = document.createElement("p");
p.innerText = "The keyboard was created in the Windows operating system";

document.querySelector("body").appendChild(divContainer);
document.querySelector(".container").appendChild(h1);
document.querySelector(".container").appendChild(textatea);
document.querySelector(".container").appendChild(key);
document.querySelector(".key").appendChild(letter);
document.querySelector(".container").appendChild(p);

/* {
    id: "",
    ruTitle: "",
    enTitle: "",
    color: "",
    width: ""
}*/
function createButton(obj) {}
