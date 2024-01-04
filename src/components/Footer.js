export const generateFooter = () => {
  const footer = document.createElement("footer");
  footer.className = "estiloFooter";

  // Agrega la imagen central desde la carpeta "images"
  const contenedor_ = document.createElement("div");
  contenedor_.classList.add("contenedor_");


  const contenido_Int = document.createElement("div");
  contenido_Int.classList.add("contenedor_Img")
   // Agrega una clase para aplicar estilos desde CSS

  // Agrega los nombres de los desarrolladores
  const developers = document.createElement("p");
  developers.textContent = "Desarrolladoras: (Tam === Sandy) ";
  developers.className = "footer-developers"; // Agrega una clase para aplicar estilos desde CSS

  // Agrega los contactos de email y github
  const contactInfo = document.createElement("div");
  contactInfo.className = "footer-contact";
  
  const icon = document.createElement("span");
  icon.className ="icon";
  const text_mail = document.createTextNode( " tacs.laboral@gmail.com // sandy.funes93@gmail.com");
  text_mail.className ="mail";
  
  const icon_mail= document.createElement("i");
  icon_mail.className ="fa-regular fa-envelope";
  
 


  
  
  contactInfo.textContent = "  | github.com/Saandy93 | github.com/tamaracontreras ";


  const icongit = document.createElement("span");
  icongit.className ="icon_git";

  
   // Agrega una clase para aplicar estilos desde CSS

  // Agrega los elementos al footer
  footer.appendChild(contenedor_);
  contenedor_.appendChild(contenido_Int);
  footer.appendChild(developers);
  footer.appendChild(contactInfo);
  icon.appendChild(icon_mail); 
  contactInfo.appendChild(icon);
  icon.appendChild(text_mail);



  contactInfo.appendChild(icongit);

  return footer;
};
  