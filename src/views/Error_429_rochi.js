export const error = () => {
    // Crear el elemento de párrafo
    const parrafo = document.createElement("p");
    parrafo.textContent = "Too Many Requests. Se ha superado la cuota de tokens permitida por minuto";
    parrafo.classList.add("error-message");

    // Agregar estilos al párrafo
    parrafo.style.color = '#FF6207'; // Color naranja
    parrafo.style.fontSize = '25px'; // Tamaño de letra 25px

    // Crear un contenedor div para aplicar el fondo
    const contenedor = document.createElement("div");

    // Establecer estilos flexibles para renderizar en la misma línea
    contenedor.style.display = 'flex';
    contenedor.style.alignItems = 'center';

    // Crear un contenedor interno para la imagen
    const contenidoInternoImagen = document.createElement("div");

    // Establecer estilos para el contenedor interno de la imagen
    contenidoInternoImagen.style.backgroundImage = 'url("./images/rochi.jpg")';
    contenidoInternoImagen.style.backgroundSize = 'cover'; // Ajustar al tamaño del contenedor
    contenidoInternoImagen.style.width = '1000px'; // Reemplaza con el ancho deseado
    contenidoInternoImagen.style.height = '781px'; // Reemplaza con la altura deseada

    // Agregar el contenedor interno de la imagen al contenedor principal
    contenedor.appendChild(contenidoInternoImagen);

    // Crear un contenedor interno para el párrafo
    const contenidoInternoParrafo = document.createElement("div");
    contenidoInternoParrafo.appendChild(parrafo);
    contenidoInternoParrafo.style.width = '781px'; // Reemplaza con el ancho deseado
    contenidoInternoParrafo.style.height = '781px'; // Reemplaza con la altura deseada
    contenidoInternoParrafo.style.display = 'flex';
    contenidoInternoParrafo.style.alignItems = 'center';

    // Establecer estilos para el contenedor interno del párrafo
    contenidoInternoParrafo.style.marginLeft = '100px'; // Margen a la izquierda para separar de la imagen

    // Agregar el contenedor interno del párrafo al contenedor principal
    contenedor.appendChild(contenidoInternoParrafo);

    return contenedor;
};
