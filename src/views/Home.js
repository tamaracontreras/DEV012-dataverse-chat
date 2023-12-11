import { generateFooter } from "../components/Footer.js";
import { generateHeader} from "../components/header.js";
import { renderOptions} from "../lib/dataFunctions.js";



export const home = () => {
  const homeElement = document.createElement("p");
  homeElement.innerHTML = "¡Hola mundo!";

  
   const header = generateHeader();
   homeElement.appendChild(header);

   
   const body = renderOptions();
   homeElement.appendChild(body);

  const footer = generateFooter();
  homeElement.appendChild(footer);

  return homeElement;
};
