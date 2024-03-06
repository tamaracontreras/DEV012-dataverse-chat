import { generateHeader } from "../components/header.js";
import { chatComp} from "../components/Chat_comp.js";
import { generateFooter } from "../components/Footer.js";
import { data } from "../data/dataset.js";
import { found } from "../lib/dataFunctions.js";


 

export const Chat = (id) => {

    const chatView = document.createElement("div");
    
    const header = generateHeader();
    chatView.appendChild(header);

    const personajeEncontrado = found(data,id);

    
    const chat_Comp = chatComp(personajeEncontrado);
    chatView.appendChild(chat_Comp);
   
    const footer = generateFooter();
    chatView.appendChild(footer);
    return chatView;
};