import Vue from "vue";
import App from "./libs/App.vue";
import "./style.css";
import { hello, addImg, testES6 } from "./libs/component.js";
// import $ from "jquery";

document.body.appendChild(hello());
document.body.appendChild(addImg());
document.body.appendChild(testES6());

// let count = 0;

// $("body").append("<button class='btn'>+</button>");
// $(".btn").on("click", () => {
//   console.log("嘿嘿嘿");
//   $("body").append(count);
//   count++;
// });

// if (module.hot) {
//   module.hot.accept("./libs/component.js", function() {
//     document.body.appendChild(hello())
//   })
// }

new Vue({
  el: "#app",
  render: h => h(App),
})