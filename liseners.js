const keys = document.querySelectorAll(".key-all");

keys.forEach(function (hi) {
  hi.addEventListener("click", clicker);
});

function clicker(event) {
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
