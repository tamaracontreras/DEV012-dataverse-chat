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
  const text_mail = document.createTextNode( " tacs.laboral@gmail.com - sandy.funes93@gmail.com");
  text_mail.className ="mail";
  
  const icon_mail= document.createElement("i");
  icon_mail.className ="fa-regular fa-envelope";

  const icon2 = document.createElement("span");
  icon2.className ="icon2";
  const text_git = document.createTextNode(" github.com/Saandy93  - github.com/tamaracontreras");
  text_git.className ="git";
  const icon_git = document.createElement("i");
  icon_git.className ="fa-brands fa-github";

  

  
   // Agrega una clase para aplicar estilos desde CSS

  // Agrega los elementos al footer
  footer.appendChild(contenedor_);
  contenedor_.appendChild(contenido_Int);
  footer.appendChild(developers);
  footer.appendChild(contactInfo);
  contactInfo.appendChild(icon);
  icon.appendChild(icon_mail); 
  icon.appendChild(text_mail);
 
contactInfo.appendChild(icon2);
  icon2.appendChild(icon_git);
  icon2.appendChild(text_git);

  
  




  return footer;
};
  