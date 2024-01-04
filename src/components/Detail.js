
// Expected output: 12

//fotocontendor
//nombre.personaje contenedor
// contenedordescripcion
// botonChat
export const detail = (personaje) => {
const section = document.createElement("section");


const fotocontenedor = document.createElement("div");
fotocontenedor.className = "fotocontenedor";
const imgElement = document.createElement('img');
imgElement.setAttribute('src', personaje.imageUrl);
imgElement.setAttribute('alt', personaje.name);
imgElement.setAttribute('id', 'nombreDelId');


const informacion = document.createElement("div");
informacion.className= "informacion";


const contCard = document.createElement("div");
contCard.className = "contCard";
const idPersonaje = document.createElement("h2");
idPersonaje.setAttribute("id","EstiloId");
idPersonaje.textContent = personaje.name;



const contenedorDescripcion = document.createElement("div");
contenedorDescripcion.className = "contenedorDesc";

const parrafoDescripcion = document.createElement("p");
parrafoDescripcion.className = "descripcionDetail";
// Asignar el texto de la descripción al elemento p
parrafoDescripcion.textContent = personaje.description;


const footercard =document.createElement("div");
footercard.className ="contFooter";
const botonChat = document.createElement("button");
botonChat.className= "botonChat";
botonChat.textContent = "Iniciar Chat";

section.appendChild(informacion);
informacion.appendChild(fotocontenedor);
fotocontenedor.appendChild(imgElement);
informacion.appendChild(contCard);
contCard.appendChild(idPersonaje);
contCard.appendChild(contenedorDescripcion);
contenedorDescripcion.appendChild(parrafoDescripcion);
contCard.appendChild(botonChat);


return section;
};