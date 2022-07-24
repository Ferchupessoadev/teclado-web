"use strict";
import Teclado from './teclado.js'

addEventListener("DOMContentLoaded",()=>{
    const teclado = new Teclado();
    const copyBtn = document.querySelector(".copy-btn");
    copyBtn.addEventListener("click",()=>{
        teclado.input.select();
        document.execCommand("copy");
        copyBtn.style.color = "rgb(74, 221, 0)";
        copyBtn.classList.add("copied");
        copyBtn.innerHTML = `<i class="fa-solid fa-check" style="color:rgb(74, 221, 0);"></i><b style="font-size:15px;">copied</b>`;
        setTimeout(()=>{
            copyBtn.style.color = "rgb(50, 89, 133);";
            copyBtn.classList.remove("copied");
            copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`;
        },1000);
    });//copía el texto al portapapeles y muestra un mensaje que esta copiado el texto al lado del input.
    
});
