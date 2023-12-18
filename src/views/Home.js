import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { renderItems} from "../components/renderItem.js"
import { Nav } from "../components/Nav.js";

import { data } from "../data/dataset.js";




//import { renderItems} from "../components/renderCard.js";

//tarea
// crear un contenedor para contenedor para todos los componentes
export const home = () => {

const homeView = document.createElement("div");

const header = generateHeader();
homeView.appendChild(header);

const nav = Nav();
homeView.appendChild(nav);

const card = renderItems(data);
homeView.appendChild(card);

const footer = generateFooter();
homeView.appendChild(footer);

return homeView;
};

// let resultadosActuales = data;
// const selectPlanetas = document.querySelector["#select-filter"
// selectPlanetas.addEventListener("change", (e)=> {
//   const value = e.target.value 
//   resultadosActuales = filterData(data,value)
//   cardsList.innerHTML = renderItems(resultadosActuales)
// })

// const lugares = placesOfBirth(data);

// const selectPlaces = document.querySelector("#select-filter");
// selectPlaces.innerHTML = renderOptions(lugares);

// const cardsList = document.querySelector("#root");
// cardsList.innerHTML = renderItems(data);

// en esta funcion capturo un elemento de html donde renderiso las imagenes

// crear una const que sellame resuktados actuales y cada accion el resultado de filtrar lo asigno 



// const selectOrden = document.querySelector("#select-sort");
// selectOrden.addEventListener("change", (e)=> {
//   const value = e.target.value 
    
//   cardsList.innerHTML = renderItems(orderDataByName(resultadosActuales,value))
// });

// Obtener referencia al botón por su atributo data-testid
// const clearButton = document.querySelector('[data-testid="button-clear"]');

// Agregar un manejador de eventos al botón
// clearButton.addEventListener('click', function () {
// Lógica para reiniciar la aplicación (limpiar filtros y ordenamientos)
// ...
//   cardsList.innerHTML = renderItems(data);
// Por ejemplo, puedes redirigir o recargar la página para reiniciar la aplicación
// location.reload();
// });

// para descomentar ctrl + k +u
// para comentar cntrl + k+ c
