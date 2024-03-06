export const Nav = () => {
    const navElement = document.createElement('nav');
  
    // Etiqueta y select para filtrar
    const labelFilter = document.createElement('label');
    labelFilter.setAttribute('for', 'select-filter');
    labelFilter.textContent = 'Planetas';
  
    const selectFilter = document.createElement('select');
    selectFilter.setAttribute('data-testid', 'select-filter');
    selectFilter.setAttribute('name', 'places');
    selectFilter.setAttribute('id', 'select-filter');
  
    // Etiqueta y select para ordenar
    const labelSort = document.createElement('label');
    labelSort.setAttribute('for', 'select-sort');
    labelSort.textContent = 'Ordenar';
  
    const selectSort = document.createElement('select');
    selectSort.setAttribute('data-testid', 'select-sort');
    selectSort.setAttribute('name', 'alph');
    selectSort.setAttribute('id', 'select-sort');
  
    // Opciones para ordenar
    const optionAsc = document.createElement('option');
    optionAsc.setAttribute('value', 'asc');
    optionAsc.textContent = 'A-Z';
  
    const optionDesc = document.createElement('option');
    optionDesc.setAttribute('value', 'desc');
    optionDesc.textContent = 'Z-A';
  
    // Botón de reset
    const buttonClear = document.createElement('button');
    buttonClear.setAttribute('data-testid', 'button-clear');
    buttonClear.textContent = 'Reset';
  
    // Agregar elementos al nav
    navElement.appendChild(labelFilter);
    navElement.appendChild(selectFilter);
    navElement.appendChild(labelSort);
    navElement.appendChild(selectSort);
    selectSort.appendChild(optionAsc);
    selectSort.appendChild(optionDesc);
    navElement.appendChild(buttonClear);
  
    return navElement;
  };
  