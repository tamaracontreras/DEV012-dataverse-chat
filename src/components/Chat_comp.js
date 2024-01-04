export const chatComp = () => {

    const section = document.createElement("section");

  section.setAttribute("id","fondoChat");


    const fotocontenedor = document.createElement("div");
    fotocontenedor.className = "fotocontenedor";
   
    
    
    const informacion = document.createElement("div");
    informacion.className= "informacion";
    
    
    const contCard = document.createElement("div");
    contCard.className = "contCard";
    const idPersonaje = document.createElement("h2");
    idPersonaje.setAttribute("id","EstiloId");
    idPersonaje.textContent="Chat  with me!";


   
    const contenedorDescripcion = document.createElement("div");
    contenedorDescripcion.className = "contenedorDesc";
    
    const parrafoDescripcion = document.createElement("p");
    parrafoDescripcion.className = "descripcionDetail";
    // Asignar el texto de la descripción al elemento p
    
   const messageInput = document.createElement('input');
   messageInput.type = 'text';
   messageInput.id = 'message-input';
   messageInput.placeholder = 'Escribe tu mensaje ...';
    
    const footercard = document.createElement("div");
    footercard.className ="contFooter";

    const cont_Boton = document.createElement("div");
    cont_Boton.className = "cont_Boton";
    const botonChat = document.createElement("button");
    botonChat.className= "botonChat";
    botonChat.textContent = "Send";
    
    section.appendChild(informacion);
   
    informacion.appendChild(fotocontenedor);
    informacion.appendChild(contCard);
    contCard.appendChild(idPersonaje);
    contCard.appendChild(contenedorDescripcion);
    contenedorDescripcion.appendChild(parrafoDescripcion);
    contCard.appendChild(footercard);
    footercard.appendChild(messageInput);
    footercard.appendChild(cont_Boton);
    cont_Boton.appendChild(botonChat);
  
    
    
    return section;
}