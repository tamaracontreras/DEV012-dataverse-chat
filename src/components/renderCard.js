


export const renderItems = (personajes) => {
  const ulElement = document.createElement('ul');
  ulElement.classList.add('parent');
  personajes?.forEach(personaje => {
    const liElement = document.createElement('li');
    liElement.setAttribute('itemprop', 'card');
    liElement.classList.add('card-background');
    liElement.setAttribute('itemtype', 'DragonBall');
    const dlElement = document.createElement('dl');
    dlElement.setAttribute('itemscope', '');
    dlElement.setAttribute('itemtype', 'DragonBall');
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', personaje.imageUrl);
    imgElement.setAttribute('alt', personaje.name);
    const nombreEstiloDiv = document.createElement('div');
    nombreEstiloDiv.setAttribute('id', 'nombreEstilo');
    const ddNombre = document.createElement('dd');
    ddNombre.setAttribute('itemprop', 'name');
    const spanNombre = document.createElement('span');
    spanNombre.textContent = personaje.name;
    ddNombre.appendChild(spanNombre);
    nombreEstiloDiv.appendChild(ddNombre);
    const infoContainerDiv = document.createElement('div');
    infoContainerDiv.classList.add('info-container');
    // ... Crear otros elementos aquí para el resto de la estructura ...
    // Agregar todos los elementos al DOM
    dlElement.appendChild(imgElement);
    dlElement.appendChild(nombreEstiloDiv);
    dlElement.appendChild(infoContainerDiv);
    liElement.appendChild(dlElement);
    ulElement.appendChild(liElement);
  });
  return ulElement;
};