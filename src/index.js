import { home } from "./views/Home.js";
import { setRoutes, setrootElement, onURLChange } from "./router.js";

const routes = {
  "/": home,
  "/error": "some",
};

const viewContainer = document.getElementById("root");

setRoutes(routes);
setrootElement(viewContainer);


document.addEventListener("DOMContentLoaded", (event) => {
    onURLChange(event.target.location.pathname);
  });
  






/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

/*import Home from "./views/Home";
// ... import other views
import { setRootEl, setRoutes, onURLChange } from "./router.js";

// Define your routes and their associated views
const routess = {
  "/": Home,
  // ...
};

// Assign the routes
setRoutes(routess);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */ 
//}); 
