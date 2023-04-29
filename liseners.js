const keys = document.querySelectorAll(".key-all");

keys.forEach(function (hi) {
  hi.addEventListener("click", clicker);
});

function clicker(event) {
  console.log(event.srcElement.getAttribute("data"));
}

// /////////////////////////////////////////////
document.addEventListener("keydown", (ev) => {
  const obj = ruMap[ev.key];
  console.log(obj);
});

const map = {
  f: 1212,
  b: "dfgdfg",
  h: {},
};

map.f;

map["f"];

const keytext = "f";

map[keytext];

function dhjfh(one) {
  map[one];
}

dhjfh("f");

dhjfh("b");

dhjfh("d");
