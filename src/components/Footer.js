export const generateFooter = () => {
  const footer = document.createElement("footer");
  footer.className = "footer";

  // Agrega la imagen central desde la carpeta "images"
  const centralImage = document.createElement("img");
  centralImage.src = '/images/footer.image.png'; // Ajusta la ruta según la estructura de tu proyecto
  centralImage.alt = "Imagen Central";
  centralImage.className = "footer-image"; // Agrega una clase para aplicar estilos desde CSS

  // Agrega los nombres de los desarrolladores
  const developers = document.createElement("p");
  developers.textContent = "Desarrolladores: Tamara Contreras | Sandy Funes";
  developers.className = "footer-developers"; // Agrega una clase para aplicar estilos desde CSS

  // Agrega los contactos de email y github
  const contactInfo = document.createElement("p");
  contactInfo.textContent = "Contacto: tacs.laboral@gmail.com | github.com/tamaracontreras // sandy.funes93@gmail.com | github.com/Saandy93";
  contactInfo.className = "footer-contact"; // Agrega una clase para aplicar estilos desde CSS

  // Agrega los elementos al footer
  footer.appendChild(centralImage);
  footer.appendChild(developers);
  footer.appendChild(contactInfo);

  return footer;
};
  