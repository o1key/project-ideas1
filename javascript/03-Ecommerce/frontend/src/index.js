import Error404Screen from "./screens/Error404Screen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import parseRequestUrl from "./utils";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = async () => {
  const request = await parseRequestUrl();
  const parsedUrl =
    (request.resource ? `/${request.resource}` : `/`) +
    (request.id ? `/:id` : "") +
    (request.action ? `/${request.action}` : "");
  const screen = routes[parsedUrl] ? routes[parsedUrl] : Error404Screen;
  const main = document.getElementById("main_container");
  main.innerHTML = await screen.render();

  await ProductScreen.after_render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
