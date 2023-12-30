export const chatComp = () => {
    const chatContainer = document.createElement('div');
    chatContainer.setAttribute('id','cont_flex')
   
        // Crear el contenedor principal

        // Crear el encabezado
        const encabezado = document.createElement('div');
        encabezado.setAttribute('id', 'encabezado');
       
    
        // Agregar un párrafo al encabezado
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Chatea con tus personajes favoritos';
        encabezado.appendChild(parrafo);
    
        // Agregar el encabezado al contenedor principal
        chatContainer.appendChild(encabezado);
    
        // Crear el div de mensajes del personaje
        const mensajePersonaje = document.createElement('div');
        mensajePersonaje.setAttribute('id', 'mensaje-personaje');
     
    
        // Crear el div de entrada de usuario
        const inputUsuario = document.createElement('div');
        inputUsuario.setAttribute('id', 'input-usuario');
      
        // Agregar ambos divs al contenedor principal
        chatContainer.appendChild(mensajePersonaje);
        chatContainer.appendChild(inputUsuario);
    
        // Crear el div del pie de chat (footerchat)
        const footerChat = document.createElement('div');
        footerChat.setAttribute('id', 'footerchat');
        footerChat.style.width = '400px';
        footerChat.style.height = '20px';
        footerChat.style.border = '1px solid red';
        

        const messagesContainer = document.createElement('div');
        messagesContainer.setAttribute('id', 'chat-messages');
        chatContainer.appendChild(messagesContainer);
    
        // Crear el área de entrada de mensajes
        const inputContainer = document.createElement('div');
        inputContainer.setAttribute('id', 'chat-input');
    
        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('id', 'message-input');
        inputElement.setAttribute('placeholder', 'Escribe tu mensaje...');
    
        const sendButton = document.createElement('button');
        sendButton.textContent = 'Enviar';
        sendButton.addEventListener('click', sendMessage);
    
        inputContainer.appendChild(inputElement);
        inputContainer.appendChild(sendButton);
    
        chatContainer.appendChild(inputContainer);
    
        function sendMessage() {
            const messageInput = document.getElementById('message-input');
            const message = messageInput.value;
    
            // Agregar el mensaje al contenedor de mensajes
            const newMessage = document.createElement('div');
            newMessage.textContent = 'Usuario: ' + message;
            messagesContainer.appendChild(newMessage);
    
            // Limpiar el campo de entrada
            messageInput.value = '';
        };
    
        // Crear un botón en el footer
     
    
        // Agregar el botón al footer
 
    
        // Agregar el footer al contenedor principal
        chatContainer.appendChild(footerChat);
    
        // Agregar el contenedor al body o al elemento que desees
    
    
    
    // Llamar a la función para crear la estructura al cargar la página

    

    // Crear el contenedor de mensajes


    return chatContainer;
  
};








