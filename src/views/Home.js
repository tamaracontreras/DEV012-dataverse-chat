import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { Nav } from "../components/Nav.js";

//import { renderItems} from "../components/renderCard.js";

//tarea
// crear un contenedor para contenedor para todos los componentes
export const home = () => {
  // Crear el contenedor principal
const homeElement = document.createElement("div");
const header = generateHeader();
homeElement.appendChild(header);

const footer = generateFooter();
homeElement.appendChild(footer);

 

  
  // Agregar un mensaje o contenido al contenedor principal
  // homeElement.innerHTML = "¡Hola mundo!";

  // Crear un contenedor para los elementos generados por renderItems
  const itemsContainer = renderItems();

  // Agregar el contenedor de elementos al contenedor principal
  homeElement.appendChild(itemsContainer);
  


  // Generar y agregar el footer al contenedor principal


  // Devolver el contenedor principal
  return homeElement;
};
