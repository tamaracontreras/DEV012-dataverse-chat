export const chatComp = (personaje) => {

    const section = document.createElement("section");

  section.setAttribute("id","fondoChat");


    const fotocontenedor = document.createElement("div");
    fotocontenedor.className = "image_cont";

    const imgchat = document.createElement('img');
    imgchat.setAttribute('src', personaje.imageUrl);
    imgchat.setAttribute('alt', personaje.name);
    imgchat.setAttribute('id', 'img_chat');
    
    
    const informacion = document.createElement("div");
    informacion.className= "basechat";
    
    
    const contCard = document.createElement("div");
    contCard.className = "cont_Card";
    const idPersonaje = document.createElement("h2");
    idPersonaje.setAttribute("id","tittle");
    idPersonaje.textContent="Chat  with me!";


   
    const contenedorDescripcion = document.createElement("div");
    contenedorDescripcion.className = "contenInfo";
    
    const parrafoDescripcion = document.createElement("p");
    parrafoDescripcion.className = "text";
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
    // informacion.appendChild(imgchat);
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