let arrRep=[];
let arrNum=[];
let arrRes=[];
let arrComp=[];
let num;
let numOperacionReal;
let numerRepeticiones;
let resBien=0;
let resMal=0;

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


    let container = document.getElementById("contListado");
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
    pId.id="p"+numStr;
    pId.innerHTML=numStr+". &nbsp &nbsp";
    section.appendChild(pId);

    let pIdDom=document.getElementById("p"+numStr);
    console.log("Probando Nombre de id de párrafo de Numero Listado:")
    console.log(pIdDom);
    console.log(pIdDom.id);
    console.log("p"+numStr);
    pIdDom.className="numListado";

    let pOper = document.createElement("p");
    pOper.id="o"+numStr;
    pOper.innerHTML=" &nbsp" + num + " x " + multi + " =  &nbsp ";
    section.appendChild(pOper);
    let POperDom=document.getElementById("o"+numStr);
    POperDom.className="operacion";

    let pRes = document.createElement("p");
    pRes.id="Res"+numStr;
    
    section.appendChild(pRes);
    
    let PResDom=document.getElementById("Res"+numStr);
    PResDom.style="display:none";
    
    PResDom.textContent=num*multi;
    PResDom.className="resultadoAlmacenado";
    //console.log("Este es el resultado de multiplicar" + num + " x " + multi + "= " + num*multi + ". Debería ser esto en el textContent: " + PResDom.textContent);


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

    
    let accion=document.getElementById("IdEmpezar");

    if (accion.textContent=="Empezar") {
            // let arrNum=[];

        numOperacionReal=1;
        document.getElementById("contenedorRepeticiones").style.visibility="visible";
        document.getElementById("comprobarResultados").style.visibility="visible";
        console.log("disabled=true");  
        num=document.getElementById("numero").value;
        console.log("Numero es: " + num + ". Numero de Repeticiones:" +numerRepeticiones );
        document.getElementById("numOperacion").textContent=numOperacionReal;
        document.getElementById("numTotalOpera").textContent=numerRepeticiones;
        document.getElementById("repeticiones").disabled=true;
        document.getElementById("numero").disabled=true;

        num=Number(document.getElementById("numero").value);

        numerRepeticiones=Number(document.getElementById("repeticiones").value);


        console.log("numOperacionReal es: " + numOperacionReal);

        console.log("numerRepeticiones es: " + numerRepeticiones);

        console.log("num es: " + num);

    

        document.getElementById("numOperacion").textCaption=numOperacionReal;
    
  
    
        console.log(`Número para el que se hace la Tabla: ${num}. Se van a hacer ${numerRepeticiones} repeticiones `);


        //document.getElementById()

        accion.textContent="Terminar";

        

        

        for (let i=1;i<=numerRepeticiones;i++){
            arrRep[i-1]=i;
            arrNum[i-1]=aleatorio(arrNum);
            console.log("arrNum" +arrNum);
        }

        inserListado(numOperacionReal,num,arrNum[numOperacionReal-1]);

        let i=1;
        //inserListado(i,num,arrNum[i-1]);
        
    
    } else if ((accion.textContent=="Terminar")) {
        swal.fire({
            title: "¿Estás Segura?",
            text: "Una vez que hayas 'Terminado' se Eliminarán 'Todos' los Resultados y Tendrás que Empezar",
            icon: "warning",
            showDenyButton:true,
            //showCancelButton:true,
            confirmButtonText:'Borrar Resultados', 
            denyButtonText:'Volver',
            //confirmButtonColor: "#DD6B55",   
            //confirmButtonText: "Borrar Resultados",   
            //cancelButtonText: "Volver",  
            denyButtonColor: "#14C12", 
            // closeOnConfirm: false,   
            // closeOnCancel: false,
            //dangerMode: true,
          }).then((result) =>{   
            console.log("result.isConfirm: "+result.isConfirm);
            if (result.isConfirmed) {     
                swal.fire({
                    title: "Han Sido Borrados todas los Resultados.",
                    icon: "success"
                });  
                document.getElementById("listaResultado").style.visibility="hidden";
                document.getElementById("comprobarResultados").style.visibility="hidden";
                document.getElementById("contenedorRepeticiones").style.visibility="hidden";
                document.getElementById("balance").style.visibility="hidden";
                accion.textContent="Empezar"
                document.getElementById("numero").disabled=false;
                sectionId = "l01";
                eliminarListado(sectionId);
                document.getElementById("repeticiones").disabled=false;
                document.getElementById("numero").disabled=false;
                arrRep=[];
                arrNum=[];
                arrRes=[];
                arrComp=[];
                numerOperacion=0;
                numOperacionReal=0;
                numerRepeticiones=0;
                resBien=0;
                resMal=0;
            } else if (result.isDenied) {     
                swal.fire({
                    title: "NO se ha Borrado ningún resultado. Puedes Continuar",
                    text: "Continua Haciendo Multiplicaciones",
                    icon: "sucess"
                })   
            } });

        //   .then((willDelete) => {
        //     if (willDelete) {
        //       swal.fire("Han Sido Eliminadas todas los Resultados", {
        //         icon: "success",
        //       });
                
        //     } else {
        //       swal.fire("No se ha borrado ningun Resultado. Puedes Continuar");
        //     }
        //   });
                
    } else if((numerRepeticiones==numOperacionReal)){
        document.getElementById("balance").style.visibility="visible";
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
        //console.log(k);
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
    
    img=document.getElementById("img01");
    pRes=document.getElementById("Res01");
    console.log("Id es: " + inputId + " y este es el Objeto" + input);
    input=document.getElementById(inputId);
    console.log('Number(pRes.textContent): ' + Number(pRes.textContent));

    console.log("Number(input.value): " + Number(input.value));

    arrRes=[numOperacionReal-1]=input.value;
    if (Number(pRes.textContent)==Number(input.value)) {
        img.src="https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
        resBien+=1;
        arrComp=[numOperacionReal-1]=true;
    } else {
        img.src="https://cdn-icons-png.flaticon.com/512/3572/3572260.png";
        resMal+=1;
        arrComp=[numOperacionReal-1]=true;
    }


    //let arrRep=[];
    //let arrNum=[];
    
    //let num;
    //let numOperacionReal;

    if (numOperacionReal==numerRepeticiones) {
        document.getElementById("listaResultado").style.visibility="hidden";
        document.getElementById("comprobarResultados").style.visibility="hidden";
        document.getElementById("contenedorRepeticiones").style.visibility="hidden";
        document.getElementById("balance").style.visibility="hidden";
        accion.textContent="Empezar"
        document.getElementById("numero").disabled=false;
        sectionId = "l01";
        eliminarListado(sectionId);
        document.getElementById("repeticiones").disabled=false;
        document.getElementById("numero").disabled=false;
        arrRep=[];
        arrNum=[];
        arrRes=[];
        arrComp=[];
        numerOperacion=0;
        numOperacionReal=0;
        numerRepeticiones=0;
        resBien=0;
        resMal=0;
        if (resBien==numerRepeticiones) {
            Swal.fire(
                {
                    title: `Enhorabuena ${nombre}`,
                    text: `Todas las Respuesta han sido CORRECTAS`,
                    icon: "success",
                    imageUrl: "https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
                    imageWidth: 400,
                    imageHeight: 200
                }
            )
        } else {
            Swal.fire(
                {
                    title: `Bien ${nombre}`,
                    text: `Has tenido ${resBien} CORRECTAS y has tenido ${resMal} INCORRECTAS`,
                    imageUrl: "https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
                    imageWidth: 400,
                    imageHeight: 200
                }
            )
        }
    }
    else {
        document.getElementById("numOperacion").textContent=numOperacionReal+1;
    }
        
    //document.getElementById("numMal").textContent=resMal;
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
        pResId= "Res"+numStr;
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