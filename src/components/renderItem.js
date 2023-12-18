


export const renderItems = (personajes) => {
  const ulElement = document.createElement('ul');
  ulElement.classList.add('parent');

  personajes?.forEach(personaje => {
    const liElement = document.createElement('li');
    liElement.setAttribute('itemprop', 'card');
    liElement.classList.add('card-background');
    liElement.setAttribute('itemtype', 'DragonBall');
    const nombreEstiloDiv = document.createElement('div');
    nombreEstiloDiv.setAttribute('id', 'nombreEstilo');

    const dlElement = document.createElement('dl');
    dlElement.setAttribute('itemscope', '');
    dlElement.setAttribute('itemtype', 'DragonBall');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', personaje.imageUrl);
    imgElement.setAttribute('alt', personaje.name);
    imgElement.setAttribute('id', 'nombreDelId');

   

    const ddNombre = document.createElement('dd');
    ddNombre.setAttribute('itemprop', 'name');
    const spanNombre = document.createElement('span');
    spanNombre.textContent = personaje.name;
    ddNombre.appendChild(spanNombre);
    nombreEstiloDiv.appendChild(ddNombre);

    const infoContainerDiv = document.createElement('div');
    infoContainerDiv.classList.add('info-container');


    // Agregar todos los elementos al DOM
    dlElement.appendChild(imgElement);
    dlElement.appendChild(nombreEstiloDiv);
    dlElement.appendChild(infoContainerDiv);
    liElement.appendChild(dlElement);
    ulElement.appendChild(liElement);
  });

  return ulElement;
};



// Luego, puedes agregar 'renderedItems' al DOM donde lo necesites





// esta funcion renderiza las 24 imagenes
// function renderCards(data){
  // ctrl k c comentar! ctr k u descomentar
// }

//para construir objetos o elementos html que se van a renderizar en la página