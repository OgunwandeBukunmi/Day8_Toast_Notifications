const Display = document.querySelector("#display");
const successButton = document.querySelector("#success");
const errorButton = document.querySelector("#error");
const warningButton = document.querySelector("#warning");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    createElement(e.target.id);
  });
});
function createElement(name) {
  let element = document.createElement("div");
  let text = document.createElement("h3");
  let textnode = document.createTextNode(name.toUpperCase());
  text.appendChild(textnode);
  let span = document.createElement("span");
  element.appendChild(text);
  element.appendChild(span);
  element.classList.add(name, "element");
  Display.appendChild(element);
  setTimeout(() => {
    element.remove();
  }, 7000);
}
