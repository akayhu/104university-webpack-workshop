import logo from "../logo.png";

export function hello() {
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack Dev Server222";
  element.classList.add("hello");
  return element;
}

export function addImg() {
  const element = document.createElement("img");
  element.src = logo;
  return element;
}

export function footer() {
  const element = document.createElement("div");
  element.innerHTML = "我是 Footer";
  return element;
}

export const testES6 = () => {
  const element = document.createElement("div");
  element.innerHTML = "我是 ES6 轉 ES5";
  return element;
}