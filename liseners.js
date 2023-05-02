const keys = document.querySelectorAll(".key-all");

keys.forEach(function (hi) {
  hi.addEventListener("click", clicker);
});

const clickMouse = document.querySelectorAll("textarea");

function clicker(event) {
  event.srcElement.classList.add("key-active");
  setTimeout(() => event.srcElement.classList.remove("key-active"), 70);

  const e = new KeyboardEvent("keydown", { key: event.srcElement.innerHTML });
  console.log(event.srcElement.getAttribute("data"));
}

// /////////////////////////////////////////////
document.addEventListener("keydown", (ev) => {
  const obj =
    ruMap[ev.key.toLowerCase()] ||
    enMap[ev.key.toLowerCase()] ||
    txtMap[ev.code];
  console.log(ev);
  if (obj) {
    obj.HTMLkey.classList.add("key-active");
  }
});

document.addEventListener("keyup", (ev) => {
  const obj =
    ruMap[ev.key.toLowerCase()] ||
    enMap[ev.key.toLowerCase()] ||
    txtMap[ev.code];

  if (obj) {
    obj.HTMLkey.classList.remove("key-active");
  }
});

// document.addEventListener("keydown", (ev) => {
//   if (ev.key == "Shift") {
//     Object.values(ruMap).forEach((i) => {
//       i.HTMLkey.innerText = i.ruUpperCase;
//     });
//   }
// });
