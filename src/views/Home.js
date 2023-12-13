import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { Nav } from "../components/Nav.js";

//import { renderItems} from "../components/renderCard.js";

//tarea
// crear un contenedor para contenedor para todos los componentes
export const home = () => {
  const homeView = document.createElement("div");

  const header = generateHeader();
  homeView.appendChild(header);

  const nav = Nav();
  homeView.appendChild(nav);

  //const lementhomeE = document.createElement("p");
  //homeElement.innerHTML = "¡Hola, mundo!";

  //const body = renderItems();
  //homeElement.appendChild(body);

  const footer = generateFooter();
  homeView.appendChild(footer);

  return homeView ;
};
