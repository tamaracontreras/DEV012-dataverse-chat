export const generateFooter = () => {
    const footer = document.createElement("footer");
    footer.style.backgroundColor = '#FF6207';
    footer.style.color = '#FFFFFF';
    footer.style.textAlign = 'center';
    footer.style.padding = '50px';
  
    // Agrega la imagen central desde la carpeta "images"
    const centralImage = document.createElement("img");
    centralImage.src = 'url("./images/footer.image.png")'; // Reemplaza con el nombre y formato de tu imagen
    centralImage.alt = "Imagen Central";
    centralImage.style.width = '20px'; // Ajusta el ancho según tus necesidades
    centralImage.style.height = '40px'; // Ajusta la altura según tus necesidades
  
    // Agrega los nombres de los desarrolladores
    const developers = document.createElement("p");
    developers.textContent = "Desarrolladores: Tamara Contreras | Sandy Funes";
    developers.style.fontWeight = 'bold';
  
    // Agrega los contactos de email y github
    const contactInfo = document.createElement("p");
    contactInfo.textContent = "Contacto: tacs.laboral@gmail.com | github.com/tamaracontreras / sandy.funes93@gmail.com | github.com/Saandy93";
    contactInfo.style.fontWeight = 'bold';
  
    // Agrega todos los elementos al footer
    footer.appendChild(centralImage);
    footer.appendChild(developers);
    footer.appendChild(contactInfo);
  
    return footer;
  };
  