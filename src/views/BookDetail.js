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

      const miBoton = detailView.querySelector("#chat");
      miBoton.addEventListener('click', function(){
         window.location.href = `/chat?id=${id}`;

      });
  

// // Asignar un evento al hacer clic en el botón
// miBoton.addEventListener('onClick', function() {
// // //   Redirigir a la URL deseada
// //   window.location.href = `/chat?id=${id}`;
// console.log("hola")

// });


    return detailView

 };

//  evento dom chat





