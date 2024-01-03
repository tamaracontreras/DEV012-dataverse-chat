import { generateHeader } from "../components/header.js";
import { chatComp } from "../components/Chat_comp.js";
import { generateFooter } from "../components/Footer.js";

 

export const Chat = () => {

    const chatView = document.createElement("div");
    
    const header = generateHeader();
    chatView.appendChild(header);

    const body = chatComp();
    chatView.appendChild(body);



    const footer = generateFooter();
    chatView.appendChild(footer);
    return chatView;
};