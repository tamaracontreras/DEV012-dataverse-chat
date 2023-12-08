export const error = () => {
    // Crear el elemento de párrafo
    const parrafo = document.createElement("p");
    parrafo.textContent = "Vista de error";
  
    // Agregar una clase al párrafo para aplicar estilos
    parrafo.classList.add("error-message");
  
    // Crear un contenedor div para aplicar el fondo
    const contenedor = document.createElement("div");
    contenedor.appendChild(parrafo);
  
    // Establecer la imagen de fondo
    contenedor.style.backgroundImage = 'url("../images/rochi.jpg")';
    contenedor.style.backgroundSize = 'cover'; // Ajustar al tamaño del contenedor

    // Establecer el tamaño del contenedor
    contenedor.style.width = '781px'; // Reemplaza con el ancho deseado
    contenedor.style.height = '781px'; // Reemplaza con la altura deseada
  
    return contenedor;
};

  

//00:21:56 video

//es una funcions que nos devuelve un elemento html