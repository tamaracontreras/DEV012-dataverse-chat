
// const id = "android-18";
// 
// esta funcion hay qu emoverla a dataFunctions.js


// Expected output: 12

//fotocontendor
//nombre.personaje contenedor
// contenedordescripcion
// botonChat
export const detail = (personaje) => {
const section = document.createElement("section");


const fotocontenedor = document.createElement("div");
fotocontenedor.className = "fotocontenedor";


const informacion = document.createElement("div");
informacion.className= "informacion";


const divCont = document.createElement("div");
divCont.className = "contTitulo";
const idPersonaje = document.createElement("h2");
idPersonaje.className = "EstiloId";
idPersonaje.textContent = personaje.id;



const contenedorDescripcion = document.createElement("div");
contenedorDescripcion.className = "contenedorDesc";

const parrafoDescripcion = document.createElement("p");
parrafoDescripcion.className = "descripcionDetail";
// Asignar el texto de la descripción al elemento p
parrafoDescripcion.textContent = personaje.description;



const botonChat = document.createElement("button");
botonChat.className= "botonChat";
botonChat.textContent = "Iniciar Chat";

section.appendChild(informacion);
informacion.appendChild(fotocontenedor);
informacion.appendChild(divCont);
divCont.appendChild(idPersonaje);
informacion.appendChild(contenedorDescripcion);



contenedorDescripcion.appendChild(parrafoDescripcion);

section.appendChild(botonChat);


return section;
};