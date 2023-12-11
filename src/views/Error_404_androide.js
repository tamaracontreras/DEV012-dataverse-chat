export const error404 = () => {
  // Crear el elemento de párrafo
  const tittle = document.createElement("h1");
  tittle.textContent = "u_u Error 404";
  tittle.classList.add("error-message");

  // Agregar estilos al titulo
  tittle.style.color = "#FF6207"; // Color naranja
  //tittle.style.fontSize = '25px'; // Tamaño de letra 25px

  // crea el contenido del elemento
  const parrafo = document.createElement("p");
  parrafo.textContent =
    "Parece que el enlace esta dañado o has introducido una URL que no existe en este sitio.";
  parrafo.classList.add("error-message");

  // Agregar estilos al párrafo
  parrafo.style.color = "#FF6207"; // Color naranja
  parrafo.style.fontSize = "25px"; // Tamaño de letra 25px
  parrafo.style.height = "250px";
  parrafo.style.width = "500px";
  parrafo.style.flexDirection = "column"; // Alinear elementos en columna

  // Crear un contenedor div para aplicar el fondo
  const contenedor = document.createElement("div");

  // Establecer estilos flexibles para renderizar en la misma línea
  contenedor.style.display = "flex";
  contenedor.style.alignItems = "center";

  // Crear un contenedor interno para la imagen
  const contenidoInternoImagen = document.createElement("div");

  // Establecer estilos para el contenedor interno de la imagen
  contenidoInternoImagen.style.backgroundImage = 'url("./images/androide.jpg")';
  contenidoInternoImagen.style.backgroundSize = "cover"; // Ajustar al tamaño del contenedor
  contenidoInternoImagen.style.width = "1000px"; // Reemplaza con el ancho deseado
  contenidoInternoImagen.style.height = "781px"; // Reemplaza con la altura deseada

  // Aplicar efecto espejo horizontal a la imagen
  contenidoInternoImagen.style.transform = "scaleX(-1)";

  // Agregar el contenedor interno de la imagen al contenedor principal
  contenedor.appendChild(contenidoInternoImagen);

  // Crear un contenedor interno para el párrafo
  const contenidoInternoParrafo = document.createElement("div");
  contenidoInternoParrafo.appendChild(tittle);
  contenidoInternoParrafo.appendChild(parrafo);
  contenidoInternoParrafo.style.width = "781px"; // Reemplaza con el ancho deseado
  contenidoInternoParrafo.style.height = "150px"; // Reemplaza con la altura deseada
  //contenidoInternoParrafo.style.display = 'block'; // Establecer estilos flexibles para renderizar en la misma línea
  contenidoInternoParrafo.style.display = "flex";
  contenidoInternoParrafo.style.flexDirection = "column"; // Alinear elementos en columna
  contenidoInternoParrafo.style.alignItems = "center"; // Centrar elementos horizontalmente
  contenidoInternoParrafo.style.justifyContent = "center";
  contenidoInternoParrafo.style.alignItems = "center";
  contenidoInternoParrafo.style.backgroundColor = "#F4F5F7";
  contenidoInternoParrafo.style.borderRadius = "70px";

  // Establecer estilos para el contenedor interno del párrafo
  //  contenidoInternoParrafo.style.marginLeft = '100px'; // Margen a la izquierda para separar de la imagen

  // Agregar el contenedor interno del párrafo al contenedor principal
  contenedor.appendChild(contenidoInternoParrafo);

  return contenedor;
};

//00:21:56 video

//es una funcions que nos devuelve un elemento html
