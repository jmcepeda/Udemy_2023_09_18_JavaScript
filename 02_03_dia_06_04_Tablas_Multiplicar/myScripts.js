let arrRep=[];
let arrNum=[];
let arrRes=[];
let arrComp=[];
let num;
let numOperacionReal;

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

function inserListado(i,num, multi){

    // let numeroCaja=document.getElementById("numero").value;
    // let i=Number(numeroCaja);


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
    pId.innerHTML=numStr+". &nbsp &nbsp";
    section.appendChild(pId);

    let pIdDom=document.getElementById(numStr+"p");
    console.log("Probando Nombre de id de párrafo de Numero Listado:")
    console.log(pIdDom);
    console.log(pIdDom.id);
    console.log(numStr + "p");
    pIdDom.className="numListado";

    let pOper = document.createElement("p");
    pOper.id=numStr+"o";
    pOper.innerHTML=" &nbsp" + num + " x " + multi + " =  &nbsp ";
    section.appendChild(pOper);
    let POperDom=document.getElementById(numStr + "o");
    POperDom.className="operacion";

    let pRes = document.createElement("p");
    pRes.id=numStr+"Res";
    
    section.appendChild(pRes);
    
    let PResDom=document.getElementById(numStr + "Res");
    PResDom.style="display:none";
    
    PResDom.textContent=num*multi;
    PResDom.className="resultadoAlmacenado";
    console.log("Este es el resultado de multiplicar" + num + " x " + multi + "= " + num*multi + ". Debería ser esto en el textContent: " + PResDom.textContent);


    let inputIn = document.createElement("input");
    inputIn.id="inp"+ numStr;
    inputIn.type="number";
    section.appendChild(inputIn);

    let imgIn=document.createElement("img");
    imgIn.id="img"+numStr;
    console.log(imgIn);
    console.log(imgIn.id);
    console.log(numStr);
    // imgIn.src = "https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
    section.appendChild(imgIn);
    let imgDom=document.getElementById("img" + numStr);
    imgDom.className="imgLogo";

}

function eliminarListado(sectionId) {

    let container=document.getElementById("contCentrar");
    let section=document.getElementById(sectionId);
    section.remove();
}

function empezar2(){

    num=Number(document.getElementById("numero").value);

    let numerRepeticiones=Number(document.getElementById("repeticiones").value);

    numOperacionReal=Number(document.getElementById("numOperacion").textCaption);

    console.log("numOperacionReal es: " + numOperacionReal);

    console.log("numerRepeticiones es: " + numerRepeticiones);

    console.log("num es: " + num);

    

    document.getElementById("numOperacion").textCaption=numOperacionReal+1;
    
  
    
    console.log(`Número para el que se hace la Tabla: ${num}. Se van a hacer ${numerRepeticiones} repeticiones `);

    let accion=document.getElementById("IdEmpezar");

    if (accion.textContent=="Empezar") {
            // let arrNum=[];

        document.getElementById("contenedorRepeticiones").style.visibility="visible";
        document.getElementById("numero").disabled=true;
        console.log("disabled=true")

        accion.textContent="Comprobar";

        numOperacionReal=1;

        inserListado(numOperacionReal,num,arrNum[numOperacionReal-1]);

        for (let i=1;i<=numerRepeticiones;i++){
            arrRep[i-1]=i;
            arrNum[i-1]=aleatorio(arrNum);
            console.log("arrNum" +arrNum);
        }
        let i=1;
        inserListado(i,num,arrNum[i-1]);
            
    } else if ((accion.textContent=="Comprobar") &&  (num<numerRepeticiones)) {
        
    
    } else if (((accion.textContent=="Comprobar") &&  (num<numerRepeticiones))) {
        visibility="hidden";
        accion.textContent="Empezar"
        document.getElementById("numero").disabled=false;
        arrRep=[];
        arrNum=[];
        arrRes=[];
        arrComp=[];
    }
    
}

function empezar(){

    num=Number(document.getElementById("numero").value);
    
    let numerOperacion=Number(document.getElementById("repeticiones").value);
    let numerRepeticiones=Number(document.getElementById("repeticiones").value);

    console.log(`Número para el que se hace la Tabla: ${num}. Se van a hacer ${numerRepeticiones} repeticiones `);

    let accion=document.getElementById("IdEmpezar");

    if (accion.textContent=="Empezar") {
        // let arrNum=[];
        let arrRes=[];
        let arrComp=[];

        for (let i=1;i<=numerRepeticiones;i++){
            arrNum[i-1]=aleatorio(arrNum);
            console.log("arrNum" +arrNum);
            inserListado(i,num,arrNum[i-1]);
        }
        accion.textContent="Limpiar"
    } else {
        let numStr;
        let sectionId;
        for (let i=1;i<=numerRepeticiones;i++){
            if(i<10){
                numStr="0"+i;
                console.log(numStr);
            } else {
                numStr=i.toString();
                console.log(numStr);
            }
            sectionId = "l"+numStr;
            eliminarListado(sectionId);
            document.getElementById("numBien").textContent=0;
            document.getElementById("numMal").textContent=0;
        }
        accion.textContent="Empezar"
    }
    
}



function todoBien() {
    let nombre=document.getElementById("textoNombre").textContent;
    console.log(nombre);
    if (nombre==null) {
        nombre="";
    }

    Swal.fire(
        {
            title: `Enhorabuena ${nombre}`,
            text: `La Respuesta es CORRECTA`,
            icon: "success",
            imageUrl: "https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
            imageWidth: 400,
            imageHeight: 200
        }
    )

    
}

function aleatorio (arrNum) {
    let num; 
    let random;
    let k=0;
    do {
        random=Math.random();
        num=Math.round(random*10);
        if (num==0){
            num=1;
        }
        k=k+1;
        console.log(k);
    } while ((arrNum.includes(num)==true));
    return num;
    
}

function comprobarResultados2(){

    // let num=Number(document.getElementById("numero").value);
    let numerRepeticiones=Number(document.getElementById("repeticiones").value);
    let resBien=0;
    let resMal=0;

    let numStr;
    let imgId;
    let img;
    let pResId;
    let pRes;
    let input;
    let inputId;
    for (let i=1;i<=numerRepeticiones;i++){
        if(i<10){
            numStr="0"+i;
            console.log(numStr);
        } else {
            numStr=i.toString();
            console.log(numStr);
        }
        imgId = "img"+numStr;
        pResId= numStr+ "Res";
        inputId="inp"+numStr;

        img=document.getElementById(imgId);
        pRes=document.getElementById(pResId);
        console.log("Id es: " + inputId + " y este es el Objeto" + input);
        input=document.getElementById(inputId);
        console.log('Number(pRes.textContent): ' + Number(pRes.textContent));

        console.log("Number(input.value): " + Number(input.value));

        if (Number(pRes.textContent)==Number(input.value)) {
            img.src="https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
            resBien+=1;
        } else {
            img.src="https://cdn-icons-png.flaticon.com/512/3572/3572260.png";
            resMal+=1;
        }
        

    }
    document.getElementById("numBien").textContent=resBien;
    document.getElementById("numMal").textContent=resMal;
}

function comprobarResultados(){

    // let num=Number(document.getElementById("numero").value);
    let numerRepeticiones=Number(document.getElementById("repeticiones").value);
    let resBien=0;
    let resMal=0;

    let numStr;
    let imgId;
    let img;
    let pResId;
    let pRes;
    let input;
    let inputId;
    for (let i=1;i<=numerRepeticiones;i++){
        if(i<10){
            numStr="0"+i;
            console.log(numStr);
        } else {
            numStr=i.toString();
            console.log(numStr);
        }
        imgId = "img"+numStr;
        pResId= numStr+ "Res";
        inputId="inp"+numStr;

        img=document.getElementById(imgId);
        pRes=document.getElementById(pResId);
        console.log("Id es: " + inputId + " y este es el Objeto" + input);
        input=document.getElementById(inputId);
        console.log('Number(pRes.textContent): ' + Number(pRes.textContent));

        console.log("Number(input.value): " + Number(input.value));

        if (Number(pRes.textContent)==Number(input.value)) {
            img.src="https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
            resBien+=1;
        } else {
            img.src="https://cdn-icons-png.flaticon.com/512/3572/3572260.png";
            resMal+=1;
        }
        

    }
    document.getElementById("numBien").textContent=resBien;
    document.getElementById("numMal").textContent=resMal;
}