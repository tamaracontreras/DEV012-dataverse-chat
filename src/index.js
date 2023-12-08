import { home } from "./views/Home.js";
import { error } from "./views/Error_429_rochi.js";
import { setRoutes, setrootElement, onURLChange } from "./router.js";

//index el el unico que tiene contacto directo con nuestro html 

//lo primero es traer los componentes(como sale arriba)
const routes = {
  "/": home,
  "/error": error,
};

const viewContainer = document.getElementById("root");

setRoutes(routes);
setrootElement(viewContainer);


document.addEventListener("DOMContentLoaded", (event) => {
  console.log ("DOM fully loaded and parsed")
  console.log(event.target.location.pathname);
    onURLChange(event.target.location.pathname);
  });
  
 window.onpopstate=onURLChange;




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
