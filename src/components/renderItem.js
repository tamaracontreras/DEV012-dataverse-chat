


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


// agrega div de infocontainer
    const infoContainerDiv = document.createElement('div');
    infoContainerDiv.classList.add('info-container');

    const info = document.createElement('div');
    info.classList.add('info');

    const dtElement = document.createElement('dt');
    dtElement.textContent = ('Description: ');

    const ddElement = document.createElement("dd");
    ddElement.setAttribute("itemprop", "shortDescription");

    ddElement.textContent = personaje.shortDescription;

    const info2 = document.createElement('div');
    info2.classList.add('info');

    // Crear el elemento dt
    const dtElement2 = document.createElement("dt");
    dtElement2.textContent = "Planet Of Birth: ";

    const ddElement2 = document.createElement("dd");
    ddElement2.setAttribute("itemprop", "placeOfBirth");
    ddElement2.textContent = personaje.facts.placeOfBirth;

  // ...
  const info3 = document.createElement('div');
    info3.classList.add('info');

    // Crear el elemento dt
  const dtElement3 = document.createElement("dt");
    dtElement3.textContent = "Years Of Birth: ";

    const ddElement3 = document.createElement("dd");
    ddElement3.setAttribute("itemprop", "YearsOfBirth");
    ddElement3.textContent = personaje.facts.yearOfBirth;

  // info 4
  const info4 = document.createElement('div');
  info4.classList.add('info');

  // Crear el elemento dt
const dtElement4 = document.createElement("dt");
  dtElement4.textContent = "Field Of Study: ";

  const ddElement4 = document.createElement("dd");
  ddElement4.setAttribute("itemprop", "mainField");
  ddElement4.textContent = personaje.facts.mainField;



    // Agregar todos los elementos al DOM
    liElement.appendChild(dlElement);
    dlElement.appendChild(imgElement);
    dlElement.appendChild(nombreEstiloDiv);
    dlElement.appendChild(infoContainerDiv);
    
    infoContainerDiv.appendChild(info);
    info.appendChild(dtElement);
    info.appendChild(ddElement);

    infoContainerDiv.appendChild(info);
    info.appendChild(info2);

    infoContainerDiv.appendChild(info2);

    info2.appendChild(dtElement2);
    info2.appendChild(ddElement2);

    infoContainerDiv.appendChild(info3);

    info3.appendChild(dtElement3);
    info3.appendChild(ddElement3);

    infoContainerDiv.appendChild(info4);

    info4.appendChild(dtElement4);
    info4.appendChild(ddElement4);


    // Agregar el div con la clase "info" al div principal con la clase "info-container"

   
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