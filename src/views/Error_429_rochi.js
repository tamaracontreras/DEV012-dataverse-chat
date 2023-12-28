
import { generateHeader } from "../components/header.js";
import { error429 } from "../components/Error_429.js";
import { generateFooter } from "../components/Footer.js";


export const error_rochi = () => {

  const errorViewr = document.createElement("div");

  const header = generateHeader();
 errorViewr.appendChild(header);
  


const body = error429();
errorViewr.appendChild(body);


  
 
  const footer = generateFooter();
  errorViewr.appendChild(footer);

  return errorViewr;
};
