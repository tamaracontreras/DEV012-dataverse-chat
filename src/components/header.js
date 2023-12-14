export const generateHeader = () => {
    const headerElement = document.createElement('header');
  
    // Logo
    const logoImage = document.createElement('img');
    logoImage.setAttribute('id', 'logo');
    logoImage.setAttribute('src', 'images/Logo.jpeg'); // Ajusta la ruta según la estructura de tu proyecto
    logoImage.setAttribute('alt', 'dragonBall');
  
    // Título
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'Dragon Ball Fandom';
  
    // Agregar elementos al header
    headerElement.appendChild(logoImage);
    headerElement.appendChild(titleElement);
  
    return headerElement;
  };