function muestraTabla() {
    let numero=Number(document.getElementById("numero").value);
    let listaOl=document.getElementById("listaResultado");
    console.log(numero);
    
    let item;
    for (i=1;i<=10;i++) {
        texto= `${numero} x ${i} = ${numero*i}`;
        console.log(i);
        item=document.createElement("li");
        item.innerHTML=texto;
        listaOl.appendChild(item);
    }
}
