import { generateFooter } from "../components/Footer.js";
//import { generateHeader} from "../components/header.js";



export const home = () => {
  const homeElement = document.createElement("p");
  homeElement.innerHTML = "¡Hola mundo!";

  
   //const header = generateHeader();
   //homeElement.appendChild(header);

   
  // const body = generateBody();
  // homeElement.appendChild(body);

  const footer = generateFooter();
  homeElement.appendChild(footer);

  return homeElement;
};
