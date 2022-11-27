function clickHandler() {
  alert("Не тыкай на меня....");
}
function moveHandler(event) {
  console.log("evententer", event);
}
function moveHandlerOut(event) {
  console.log("eventout", event);
}
function changeHandler(event) {
  console.log("event", event);
  let str = document.getElementById("inputObject");
  alert(str.value);
}

setInterval(function () {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  let s = document.getElementById("slider");
  document.getElementById("slider").style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")";
}, 1000);
