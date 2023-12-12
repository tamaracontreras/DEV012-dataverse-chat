import { generateFooter } from "../components/Footer.js";
import { generateHeader} from "../components/header.js";

 import { renderItems} from "../components/renderItem.js";

//tarea
// crear un contenedor para contenedor para todos los componentes
export const home = () => {
  const homeElement = document.createElement("div");
  homeElement.innerHTML = "¡Hola mundo!";

  
   const header = generateHeader();
   homeElement.appendChild(header);

   
   const body = renderItems();
   homeElement.appendChild(body);

  const footer = generateFooter();
  homeElement.appendChild(footer);

  return homeElement;
};
