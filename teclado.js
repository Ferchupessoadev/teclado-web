export default class Teclado {
    constructor(){
        this.input = document.getElementById("input-text");
        this.teclas = document.querySelectorAll(".item");
        this.teclas.forEach(tecla => tecla.addEventListener("click",(e) => this.insertChar(e.target.textContent)));
        this.ltr = document.querySelectorAll(".letras");
        this.teclaMayus = document.querySelector(".letr-mayus");
        this.teclaMayus.addEventListener("click",() => this.onClickMayus())
        this.estadoMayus = false;
        this.teclaAltGr = document.querySelector(".letr-alt-gr");
        this.teclasShift = document.querySelectorAll(".shift");
        this.teclaAltGr.addEventListener("click",()=>this.onClickAltGr()); 
        this.teclasPrincipales = document.querySelectorAll(".cambiar");
        this.btnShift = document.querySelectorAll(".ltr-shift");
        this.btnShift.forEach(shift => shift.addEventListener("click",() => this.onClickShift()))
        this.estadoAltGr = false;
        this.estadoShift = false;
        this.ABC = ["|","1","2","3","4","5","6","7","8","9","0",`'`,"¿","q","w","e","r","t","y","u","i","o","p","´","+","a","s","d","f","g","h","j","k","l","ñ","{","}","<","z","x","c","v","b","n","m",",",".","-"];    
        this.AltGr = ["¬","|","@","·","~","½","¬","{","[","]","}",String.fromCharCode(92),"¸","@","ł","€","¶","ŧ","←","↓","→","ø","þ","¨","~","æ","ß","ð","đ","ŋ","ħ","DE","ĸ","ł","~","^","`","|","«","»","¢","“","”","n","µ","ho","·","̣ "];
        this.shift = ["°","!",`"`,"#","$","%","&","/","(",")","=","?","¡","¨","*","[","]",">",";",":","_"];                   
        this.teclasPrincipales.forEach((tecla,index) => tecla.innerHTML = `<p>${this.ABC[index]}</p>`);
        this.btnDelete = document.getElementById("delete-char");
        this.btnDelete.addEventListener("click",()=>this.deleteChar(this.input.value));
    }


    insertChar(caracter){
        this.input.value += `${caracter}`;
    }


    deleteChar(stringOfInput){
        const newString = stringOfInput.substring(0,(stringOfInput.length-1));
        this.input.value = newString;
    }

    onClickMayus(){
        if(!this.estadoMayus) {
            this.ltr.forEach(letra => letra.innerHTML = letra.innerHTML.toUpperCase());
            this.teclaMayus.style.background = "#f00";
            this.estadoMayus = true;
        } else {
            this.ltr.forEach(letra => letra.innerHTML = letra.innerHTML.toLowerCase());
            this.teclaMayus.style.background = "transparent";
            this.estadoMayus = false;
        }
    }

    onClickAltGr(){
        if(!this.estadoAltGr){
            this.teclasPrincipales.forEach((tecla,index) => tecla.innerHTML = `<p>${this.AltGr[index]}</p>`);
            this.estadoAltGr = true;
            this.teclaAltGr.style.background = "#f00";
        } else {
            this.teclasPrincipales.forEach((tecla,index) => tecla.innerHTML = `<p>${this.ABC[index]}</p>`);
            this.estadoAltGr = false;
            this.teclaAltGr.style.background = "transparent";
        }
    }

    onClickShift(){
        if(!this.estadoShift){
            this.teclasShift.forEach((tecla,index) => tecla.innerHTML = `<p>${this.shift[index]}</p>`);
            this.ltr.forEach(letra => letra.innerHTML = letra.innerHTML.toUpperCase());
            this.estadoShift = true;
        } else {
            this.teclasPrincipales.forEach((tecla,index) => tecla.innerHTML = `<p>${this.ABC[index]}</p>`);
            this.ltr.forEach(letra => letra.innerHTML = letra.innerHTML.toLowerCase());
            this.estadoShift = false;
        }
    }
}
