export const error404 = () => {
  // Crear el elemento de párrafo
  const contenidoInternoParrafo = document.createElement("div");
  contenidoInternoParrafo.classList.add("contenedorMsj")
  const tittle = document.createElement("h1");
  tittle.textContent = "u_u Error 404";
  tittle.classList.add("error-message");

 
  const parrafo = document.createElement("p");
  parrafo.textContent =
    "Upss! Página no Encontrada!";
  parrafo.classList.add("error-message");



  // Crear un contenedor div para aplicar el fondo
  const contenedor = document.createElement("div");
  contenedor.classList.add("contenedor")


  const contenidoInternoImagen = document.createElement("div");
  contenidoInternoImagen.classList.add("contenedorImg")


  contenedor.appendChild(contenidoInternoImagen);

  // Crear un contenedor interno para el párrafo
 
  contenidoInternoParrafo.appendChild(tittle);
  contenidoInternoParrafo.appendChild(parrafo);

  contenedor.appendChild(contenidoInternoParrafo);

  return contenedor;
};



