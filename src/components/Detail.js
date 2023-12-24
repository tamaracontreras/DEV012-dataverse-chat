
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

const info = document.createElement("div");
info.classList.add = "info";

const fotocontenedor = document.createElement("div");
fotocontenedor.classList.add = "fotocontenedor";

const nombrePersonajeContenedor = document.createElement("div");
nombrePersonajeContenedor.classList.add = "nombrePersonaje";
nombrePersonajeContenedor.textContent = personaje.id;



const contenedorDescripcion = document.createElement("div");
contenedorDescripcion.classList.add= "contenedorDesc";
contenedorDescripcion.textContent= personaje.description;



const botonChat = document.createElement("button");
botonChat.classList.add= "botonChat";
botonChat.textContent = "Iniciar Chat";

section.appendChild(info);
section.appendChild(fotocontenedor);

info.appendChild(nombrePersonajeContenedor);
info.appendChild(contenedorDescripcion);
contenedorDescripcion.appendChild(botonChat);

return section;
};