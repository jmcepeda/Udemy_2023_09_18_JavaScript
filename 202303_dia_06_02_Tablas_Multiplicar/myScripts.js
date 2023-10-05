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

    let container = document.getElementById("contCentrar");
    let section = document.createElement("section");
    
    
    section.id = "l11";
    section.class = "listado";
    container.appendChild(section);
    let sectionDom=document.getElementById("l11");
    sectionDom.className="listado";


    let pId = document.createElement("p");
    pId.id="11p";
    pId.class="numListado";
    pId.textContent="01. &nbsp &nbsp &nbsp &nbsp  &nbsp";
    section.appendChild(pId);
    let pIdDom=document.getElementById("11p");
    pIdDom.className="numListado";

    let pOper = document.createElement("p");
    pOper.id="11p";
    pOper.textContent=" &nbsp 10 x 10 =  &nbsp ";
    section.appendChild(pOper);
    let POperDom=document.getElementById("11p");
    POperDom.className="operacion";


    let inputIn = document.createElement("input");
    inputIn.id="l11";
    inputIn.type="number";
    section.appendChild(inputIn);

    let imgIn=document.createElement("img");
    imgIn.id="img11";
    imgIn.class="imgLogo";
    imgIn.src = "https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
    imgIn.alt = "Logo Javascript";
    section.appendChild(imgIn);
    let imgDom=document.getElementById("img11");
    imgDom.className="imgLogo";

}


