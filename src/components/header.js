

// // Establecer estilos flexibles para renderizar en la misma línea
// contenedor.style.display = 'flex';
// contenedor.style.alignItems = 'center';
// contenedor.style.width = '1280px';
// contenedor.style.height = '200px';
// contenedor.style.backgroundColor = '#F4F5F7';

export const generateHeader = () => {

    // Crear elementos en JavaScript
    const header = document.createElement('header');
    const logo = document.createElement('img');
    const title = document.createElement('h1');

    // Configurar atributos y contenido
    logo.id = 'logo';
    logo.src = 'images/Logo.jpeg';
    logo.alt = 'dragonBall';

    title.textContent = 'Dragon Ball Fandom';

    // Aplicar estilos directamente en JavaScript
    header.style.backgroundColor = '#ff6207e0';
    header.style.height = '150px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.padding = '0 20px';

    title.style.fontSize = '50px';
    title.style.color = 'whitesmoke';
    title.style.margin = '0';

    logo.style.height = '200px';
    logo.style.width = '200px';
    logo.style.marginTop = '20px';
    logo.style.borderRadius = '0px 30px 0px 30px';
    logo.style.boxShadow = 'inset 5px 5px 10px #c9c9c9, inset -5px -5px 10px #ffffff';

    // Adjuntar elementos al header
    header.appendChild(logo);
    header.appendChild(title);

    // Adjuntar el header al body
    document.body.appendChild(header);
}

