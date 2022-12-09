import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = () => {
  const request = parseRequestUrl();
  const parsedUrl =
    (request.resource ? `/${request.resource}` : `/`) +
    (request.id ? `/:id` : "") +
    (request.action ? `/${request.action}` : "");
  const screen = routes[parsedUrl] ? routes[parsedUrl] : Error404Screen;
  const main = document.getElementById("main_container");
  main.innerHTML = screen.render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
