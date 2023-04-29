const divContainer = document.createElement("div");
divContainer.className = "container";

const textatea = document.createElement("textarea");
textatea.className = "textatea";

const h1 = document.createElement("h1");
h1.innerText = "RSS Virtual Keyboard";

///////Create div for keys////////////////////

const divRowOne = document.createElement("div");
divRowOne.className = "div-row-one";

const divRowTwo = document.createElement("div");
divRowTwo.className = "div-row-two";

const divRowThree = document.createElement("div");
divRowThree.className = "div-row-three";

const divRowFour = document.createElement("div");
divRowFour.className = "div-row-four";

const divRowFive = document.createElement("div");
divRowFive.className = "div-row-five";

///////////////////////////////////////////////////////////////////

const p = document.createElement("p");
p.innerText = "The keyboard was created in the Windows operating system";

document.querySelector("body").appendChild(divContainer);
divContainer.appendChild(h1);
divContainer.appendChild(textatea);

document.querySelector(".container").appendChild(p);

divContainer.appendChild(divRowOne);
divContainer.appendChild(divRowTwo);
divContainer.appendChild(divRowThree);
divContainer.appendChild(divRowFour);
divContainer.appendChild(divRowFive);

////////////////////////////////////////////////////////////////

function createButton(classes, text, data) {
  const key = document.createElement("div");
  key.className = classes;
  const letter = document.createElement("div");
  letter.className = "letter";
  letter.innerText = text;
  key.appendChild(letter);
  key.setAttribute("data", JSON.stringify(data));
  return key;
}

divOne.forEach((obj) => {
  if (obj.text && obj.text == "Backspace") {
    const btn = createButton("key-backspace", obj.text, obj);
    divRowOne.appendChild(btn);
  } else {
    const btn = createButton("key", obj.ruLowCase, obj);
    divRowOne.appendChild(btn);
  }
});

divTwo.forEach((obj) => {
  if (obj.text && (obj.text == "Tab" || obj.text == "Del")) {
    const btn = createButton("key-tab", obj.text, obj);
    divRowTwo.appendChild(btn);
  } else {
    const btn = createButton("key", obj.ruLowCase, obj);
    divRowTwo.appendChild(btn);
  }
});
divThree.forEach((obj) => {
  if (obj.text && (obj.text == "CapsLock" || obj.text == "Enter")) {
    const btn = createButton("key-double", obj.text, obj);
    divRowThree.appendChild(btn);
  } else {
    const btn = createButton("key", obj.ruLowCase, obj);
    divRowThree.appendChild(btn);
  }
});
divFour.forEach((obj) => {
  if (obj.text && obj.text == "Shift") {
    const btn = createButton("key-double", obj.text, obj);
    divRowFour.appendChild(btn);
  } else {
    const btn = createButton("key", obj.ruLowCase, obj);
    divRowFour.appendChild(btn);
  }
});
divFive.forEach((obj) => {
  if (obj.text && obj.text == "Space") {
    const btn = createButton("key-space", "", obj);
    divRowFive.appendChild(btn);
  } else {
    const btn = createButton("key", obj.text, obj);
    divRowFive.appendChild(btn);
  }
});
