import { helloWorld } from "./utils";

window.addEventListener("DOMContentLoaded", () => {
  const h1Elem = document.createElement("h1");
  h1Elem.textContent = helloWorld();
  document.body.insertAdjacentElement("afterbegin", h1Elem);
});
