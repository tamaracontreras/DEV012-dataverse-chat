
export const detail = (personaje) => {
    const section = document.createElement("section");
    const informacion = document.createElement("div");
    informacion.className = "informacion_";
  
    const fotocontenedor = document.createElement("div");
    fotocontenedor.className = "fotocontenedor_";
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', personaje.imageUrl);
    imgElement.setAttribute('alt', personaje.name);
    imgElement.setAttribute('id', 'img_d');
  
   
  
    const contCard = document.createElement("div");
    contCard.className = "contCard_";
    
    const idPersonaje = document.createElement("h2");
    idPersonaje.setAttribute("id", "EstiloId_");
    idPersonaje.textContent = personaje.name;
  
    const contenedorDescripcion = document.createElement("div");
    contenedorDescripcion.className = "contenedorDesc_";
  
    const parrafoDescripcion = document.createElement("p");
    parrafoDescripcion.className = "descripcionDetail_";
    // Asignar el texto de la descripción al elemento p
    parrafoDescripcion.textContent = personaje.description;
  
    const footercard = document.createElement("div");
    footercard.className = "contFooter_";
    const botonChat = document.createElement("button");
    botonChat.className = "botonChat_";
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