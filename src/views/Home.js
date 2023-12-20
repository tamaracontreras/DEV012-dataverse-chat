import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { renderItems} from "../components/renderItem.js";
// import { found }  from "../components/Detail.js";
import { Nav } from "../components/Nav.js";
import{ renderOptions, placesOfBirth, filterData, orderDataByName } from "../lib/dataFunctions.js"

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


    
//     cardsList.innerHTML = renderItems(filterSort(data,value))
// })


// const selectOrden = document.querySelector("#sorting")
// selectOrden.addEventListener("change", (e)=> {
//     const value = e.target.value 
    
//     cardsList.innerHTML = renderItems(filterOrder(data,value))
// })

// selectGenero.addEventListener("change", (e)=> console.log(e.target.value))
// change escucha el evento de cambio de seleccion
//e.tarjet.value apunta al elemento que escucha el change, en este caso el valor seleccionado
// console.log(found)

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
