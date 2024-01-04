import { detail }  from "../components/Detail.js";
import { generateFooter } from "../components/Footer.js";
import { generateHeader } from "../components/header.js";
import { data } from "../data/dataset.js";
import { found } from "../lib/dataFunctions.js";
 
 export const BookDetail = (id) => {

    const detailView = document.createElement("div");
    const header = generateHeader();
    detailView.appendChild(header);

    const personajeEncontrado = found(data,id);


    const detailComp = detail(personajeEncontrado);
    detailView.appendChild(detailComp);


    const footer = generateFooter();
    detailView.appendChild(footer);

    // const capturarId = () =>{
    //   const url =  window.location.pathname;
    //   console.log(capturarId);
      
    // };
   
    // capturarId();

    return detailView

 };


