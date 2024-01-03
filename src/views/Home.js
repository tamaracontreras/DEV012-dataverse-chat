import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { renderItems} from "../components/renderItem.js";
import { Nav } from "../components/Nav.js";
import{ renderOptions, placesOfBirth, filterData, orderDataByName } from "../lib/dataFunctions.js"
import { data } from "../data/dataset.js";




//import { renderItems} from "../components/renderCard.js";

//tarea
// crear un contenedor para contenedor para todos los componentes
export const home = () => {

const homeView = document.createElement("div");

const header= generateHeader();
homeView.appendChild(header);

const nav = Nav();
homeView.appendChild(nav);

const cardContainer = document.createElement("div");
cardContainer.setAttribute("id", "cardContainer")

const card = renderItems(data);
cardContainer.appendChild(card);

homeView.appendChild(cardContainer);

const footer = generateFooter();
homeView.appendChild(footer);


//DOM
const lugares = placesOfBirth(data);

const selectPlaces = homeView.querySelector("#select-filter");
selectPlaces.innerHTML = renderOptions(lugares);



// en esta funcion capturo un elemento de html donde renderiso las imagenes

// crear una const que sellame resuktados actuales y cada accion el resultado de filtrar lo asigno 

let resultadosActuales = data;
const selectPlanetas = homeView.querySelector("#select-filter");
selectPlanetas.addEventListener("change", (e)=> {
  const value = e.target.value;
  console.log("Valor seleccionado:", value);
 
  resultadosActuales = filterData(data,value);
   console.log("Resultados después del filtro:", resultadosActuales);
  cardContainer.innerHTML = '';
  // primero hay que vaciar el container para poder agregar el nuevo contenido
  cardContainer.appendChild(renderItems(resultadosActuales));
});

const selectOrden = homeView.querySelector("#select-sort");
selectOrden.addEventListener("change", (e)=> {
  const value = e.target.value;
  cardContainer.innerHTML = '';
const cardOrderedResults = orderDataByName(resultadosActuales,value);
  cardContainer.appendChild(renderItems(cardOrderedResults));
});

// Obtener referencia al botón por su atributo data-testid
const clearButton = homeView.querySelector('[data-testid="button-clear"]');

// Agregar un manejador de eventos al botón
clearButton.addEventListener('click', function () {
// Lógica para reiniciar la aplicación (limpiar filtros y ordenamientos)
// ...
  cardContainer.innerHTML = renderItems(data)
// Por ejemplo, puedes redirigir o recargar la página para reiniciar la aplicación
location.reload();
});

// var spanElement = document.querySelector('span');

// Asigna un evento de clic al elemento capturado
// spanElement.addEventListener('click', function() {
//     Redirige a otra vista (puedes cambiar 'otraVista.html' por la ruta de tu otra vista)
//     window.location.href = 'otraVista.html';
// });
    


return homeView;
};



// para descomentar ctrl + k +u
// para comentar cntrl + k+ c
