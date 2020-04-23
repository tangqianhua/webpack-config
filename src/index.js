import style from "./style.css";
import Icon from "./image.jpg";

const mPromise = new Promise((resolve) => {
  resolve(123);
});
const btn = document.createElement("button");
btn.innerHTML = "btn";
btn.onclick = function () {
  const div = document.createElement("button");
  div.innerHTML = "div";
  div.classList.add("div");
  document.body.appendChild(div);
};

function component() {
  var element = document.createElement("div");

  element.innerHTML = 'Hello", "webpack';
  element.classList.add(style.hello);

  const img = new Image();
  img.src = Icon;
  element.appendChild(img);
  return element;
}

document.body.appendChild(btn);
document.body.appendChild(component());
