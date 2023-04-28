const divContainer = document.createElement("div");
divContainer.className = "container";

const textatea = document.createElement("textarea");
textatea.className = "textatea";

const h1 = document.createElement("h1");
h1.innerText = "RSS Virtual Keyboard";

//////////////////Create keys//////////////////////////////////////
// const key = document.createElement("div");
// key.className = "key";

// const letter = document.createElement("div");
// letter.className = "letter";
// letter.innerText = "A";
const key = createButton({
  id: "",
  ruLowCase: "S",
  ruUpperCase: "S",
  enLowCase: "S",
  enUpperCase: "S",
});

const keyDouble = document.createElement("div");
keyDouble.className = "key-double";

const letterDouble = document.createElement("div");
letterDouble.className = "letter-double";
letterDouble.innerText = "Shift";

const keyTab = document.createElement("div");
keyTab.className = "key-tab";

const letterTab = document.createElement("div");
letterTab.className = "letter-tab";
letterTab.innerText = "Tab";

const keyBackspace = document.createElement("div");
keyBackspace.className = "key-backspace";

const letterBackspace = document.createElement("div");
letterBackspace.className = "letter-backspace";
letterBackspace.innerText = "Backspace";

const keySpace = document.createElement("div");
keySpace.className = "key-space";

const letterSpace = document.createElement("div");
letterSpace.className = "letter-space";

///////////////////////////////////////////////////////////////////

const p = document.createElement("p");
p.innerText = "The keyboard was created in the Windows operating system";

document.querySelector("body").appendChild(divContainer);
divContainer.appendChild(h1);
divContainer.appendChild(textatea);
divContainer.appendChild(key);
divContainer.appendChild(
  createButton({
    id: "",
    ruLowCase: "F",
    ruUpperCase: "F",
    enLowCase: "F",
    enUpperCase: "F",
  })
);
divContainer.appendChild(keyDouble);
keyDouble.appendChild(letterDouble);

divContainer.appendChild(keyTab);
keyTab.appendChild(letterTab);

divContainer.appendChild(keyBackspace);
keyBackspace.appendChild(letterBackspace);

divContainer.appendChild(keySpace);
keySpace.appendChild(letterSpace);

document.querySelector(".container").appendChild(p);

////////////////////////////////////////////////////////////////
/* {
    id: "",
    ruLowCase: "",
    ruUpperCase: "",
    enLowCase: "",
    enUpperCase: "",

}*/
function createButton(obj) {
  const key = document.createElement("div");
  key.className = "key";

  const letter = document.createElement("div");
  letter.className = "letter";
  letter.innerText = obj.ruLowCase;
  key.appendChild(letter);
  key.setAttribute("data", JSON.stringify(obj));
  return key;
}
