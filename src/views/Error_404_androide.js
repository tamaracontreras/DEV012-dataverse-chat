

import { generateHeader } from "../components/header.js";
import { error404 } from "../components/Error_404.js";
import { generateFooter } from "../components/Footer.js";


export const error = () => {

  const errorView = document.createElement("div");

  const header = generateHeader();
 errorView.appendChild(header);
  


const body = error404();
errorView.appendChild(body);


  
 
  const footer = generateFooter();
  errorView.appendChild(footer);

  return errorView;
};
