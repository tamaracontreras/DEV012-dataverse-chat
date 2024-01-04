import { home } from "./views/Home.js";
import { error_rochi } from "./views/Error_429_rochi.js";
import { error } from "./views/Error_404_androide.js";
import { BookDetail } from "./views/BookDetail.js";
import { setRoutes, setrootElement, onURLChange } from "./router.js";
import { Chat } from "./views/Chat.js";


//index el el unico que tiene contacto directo con nuestro html 

//lo primero es traer los componentes(como sale arriba), creando las rutas (pathname)
const routes = {
  "/": home,
  "/error": error,
  "/error2":error_rochi,
  "/detalle": BookDetail, 
  "/chat": Chat,

};

const viewContainer = document.getElementById("root");

setRoutes(routes);
setrootElement(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log ("DOM fully loaded and parsed")

    onURLChange(event.target.location.pathname, event.target.location.search);
  
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
