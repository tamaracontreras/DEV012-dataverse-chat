import { generateFooter } from "../components/Footer.js";
//import { generateHeader} from "../components/header.js";

 import { renderItems} from "../components/renderCard.js";

//tarea
// crear un contenedor para contenedor para todos los componentes
export const home = () => {


  
   //const header = generateHeader();
   //homeElement.appendChild(header);

   
   const body = renderItems();
   homeElement.appendChild(body);

  const footer = generateFooter();
  homeElement.appendChild(footer);

  return homeElement;
};
