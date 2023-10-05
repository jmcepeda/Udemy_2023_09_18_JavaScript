function cambiarNombre(){
    let nombre=prompt("POR FAVOR, ESCRIBE TU NOMBRE");
    document.getElementById("textoNombre").textContent=nombre.toUpperCase();
    document.getElementById("textoNombre").style.color="blueviolet";
    document.getElementById("textoNombre").style.fontSize="xx-large";
    document.getElementById("textoNombre").style.fontStyle="normal";
    document.getElementById("textoNombre").style.fontWeight="bolder";

}

function muestraTabla() {
    let numero=Number(document.getElementById("numero").value);
    let listaUl=document.getElementById("listaResultado");
    console.log(numero);
        
    let first = listaUl.firstElementChild;
    while (first) {
        first.remove();
        first = listaUl.firstElementChild;
    }

    let item;
    for (i=1;i<=10;i++) {
        texto= `${numero} x ${i} = ${numero*i}`;
        console.log(i);
        item=document.createElement("li");
        item.innerHTML=texto;
        listaUl.appendChild(item);
    }
}

function inserListado(){

    let numeroCaja=document.getElementById("numero").value;
    let i=Number(numeroCaja);


    let container = document.getElementById("contCentrar");
    let section = document.createElement("section");
    let numStr;

    if(i<10){
        numStr="0"+i;
        console.log(numStr);
    } else {
        numStr=i.toString();
        console.log(numStr);
    }
    
    section.id = "l"+numStr;
    section.className = "listado";
    container.appendChild(section);
    let sectionDom=document.getElementById("l"+numStr);
    sectionDom.className="listado";

    let pId = document.createElement("p");
    pId.id=numStr+"p";
    pId.innerHTML=numStr+". &nbsp &nbsp &nbsp &nbsp  &nbsp";
    section.appendChild(pId);
    let pIdDom=document.getElementById(numStr+"p");
    pIdDom.className="numListado";

    let pOper = document.createElement("p");
    pOper.id=numStr+"o";
    pOper.innerHTML=" &nbsp" + i + " x " + i + " =  &nbsp ";
    section.appendChild(pOper);
    let POperDom=document.getElementById(numStr + "o");
    POperDom.className="operacion";


    let inputIn = document.createElement("input");
    inputIn.id="l"+ numStr;
    inputIn.type="number";
    section.appendChild(inputIn);

    let imgIn=document.createElement("img");
    imgIn.id="img"+numStr;
    console.log(ImgIn);
    console.log(ImgIn.id);
    console.log(numStr);
    imgIn.src = "https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
    section.appendChild(imgIn);
    let imgDom=document.getElementById("img" + numStr);
    imgDom.className="imgLogo";

}


