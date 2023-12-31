let arrRep = [];
let arrNum = [];
let arrRes = [];
let arrComp = [];
let num;
let numOperacionReal=0;
let numerRepeticiones;
let resBien = 0;
let resMal = 0;
let resumen=false;


function muestraTabla() {

    let muestraTabla = document.getElementById("tabla");

    if (muestraTabla.textContent == "Muestra Tabla") {
        numerRepeticiones = Number(document.getElementById("repeticiones").value);
        numOperacionReal = 1;
        let numero = Number(document.getElementById("numero").value);
        let listaUl = document.getElementById("listaResultado");
        // console.log(numero);

        let first = listaUl.firstElementChild;
        while (first) {
            first.remove();
            first = listaUl.firstElementChild;
        }

        let item;
        for (i = 1; i <= 10; i++) {
            texto = `${numero} x ${i} = ${numero * i}`;
            // console.log(i);
            item = document.createElement("li");
            item.innerHTML = texto;
            listaUl.appendChild(item);
        }
        document.getElementById("tabla").textContent="Borra Tabla";

    } else if (muestraTabla.textContent == "Borra Tabla") {
        let listaUl = document.getElementById("listaResultado");

        if (listaUl.hasChildNodes()) {
            while (listaUl.firstChild) {
                listaUl.removeChild(listaUl.firstChild);
            }
        }
        document.getElementById("tabla").textContent="Muestra Tabla";
    }
}

function inserListado(i, num, multi) {

    // let numeroCaja=document.getElementById("numero").value;
    // let i=Number(numeroCaja);

    let container = document.getElementById("contListado");
    let section = document.createElement("section");
    let numStr;

    if (i < 10) {
        numStr = "0" + i;
        console.log(numStr);
    } else {
        numStr = i.toString();
        console.log(numStr);
    }

    section.id = "l" + numStr;
    section.className = "listado";
    container.appendChild(section);
    let sectionDom = document.getElementById("l" + numStr);
    sectionDom.className = "listado";

    let pId = document.createElement("p");
    pId.id = "p" + numStr;
    pId.innerHTML = numStr + ". &nbsp &nbsp";
    section.appendChild(pId);

    let pIdDom = document.getElementById("p" + numStr);
    console.log("Probando Nombre de id de párrafo de Numero Listado:")
    console.log(pIdDom);
    console.log(pIdDom.id);
    console.log("p" + numStr);
    pIdDom.className = "numListado";

    let pOper = document.createElement("p");
    pOper.id = "o" + numStr;
    pOper.innerHTML = " &nbsp" + num + " x " + multi + " =  &nbsp ";
    section.appendChild(pOper);
    let POperDom = document.getElementById("o" + numStr);
    POperDom.className = "operacion";

    let pRes = document.createElement("p");
    pRes.id = "Res" + numStr;

    section.appendChild(pRes);

    let PResDom = document.getElementById("Res" + numStr);
    PResDom.style = "display:none";

    PResDom.textContent = num * multi;
    PResDom.className = "resultadoAlmacenado";
    //console.log("Este es el resultado de multiplicar" + num + " x " + multi + "= " + num*multi + ". Debería ser esto en el textContent: " + PResDom.textContent);


    let inputIn = document.createElement("input");
    inputIn.id = "inp" + numStr;
    inputIn.type = "number";
    section.appendChild(inputIn);
    let InputDom = document.getElementById("inp" + numStr);
    InputDom.className = "inputResultado";

    let imgIn = document.createElement("img");
    imgIn.id = "img" + numStr;
    // console.log(imgIn);
    // console.log(imgIn.id);
    // console.log(numStr);
    // imgIn.src = "https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
    section.appendChild(imgIn);
    let imgDom = document.getElementById("img" + numStr);
    imgDom.className = "imgLogo";

}

function hacerRepaso(i, num, multi, res, compro){
    let container = document.getElementById("contListado");
    let section = document.createElement("section");
    let numStr;
    i+=1;
    if (i < 10) {
        numStr = "0" + i;
        console.log(numStr);
    } else {
        numStr = i.toString();
        console.log(numStr);
    }

    section.id = "l" + numStr;
    //section.className = "listado";
    container.appendChild(section);
    let sectionDom = document.getElementById("l" + numStr);
    sectionDom.className = "listado";

    let pId = document.createElement("p");
    pId.id = "p" + numStr;
    pId.innerHTML = numStr + ". &nbsp &nbsp";
    section.appendChild(pId);

    let pIdDom = document.getElementById("p" + numStr);
    console.log("Probando Nombre de id de párrafo de Numero Listado:")
    console.log(pIdDom);
    console.log(pIdDom.id);
    console.log("p" + numStr);
    pIdDom.className = "numListado";

    let pOper = document.createElement("p");
    pOper.id = "o" + numStr;
    pOper.innerHTML = " &nbsp" + num + " x " + multi + " =  &nbsp ";
    section.appendChild(pOper);
    let POperDom = document.getElementById("o" + numStr);
    POperDom.className = "operacion";

    let pRes = document.createElement("p");
    pRes.id = "Res" + numStr;

    section.appendChild(pRes);

    let PResDom = document.getElementById("Res" + numStr);
    PResDom.style = "display:none";

    PResDom.textContent = num * multi;
    PResDom.className = "resultadoAlmacenado";
    //console.log("Este es el resultado de multiplicar" + num + " x " + multi + "= " + num*multi + ". Debería ser esto en el textContent: " + PResDom.textContent);


    let inputIn = document.createElement("input");
    inputIn.id = "inp" + numStr;
    inputIn.type = "number";
    section.appendChild(inputIn);
    let InputDom = document.getElementById("inp" + numStr);
    InputDom.className = "inputResultado";

    let imgIn = document.createElement("img");
    imgIn.id = "img" + numStr;
    // console.log(imgIn);
    // console.log(imgIn.id);
    // console.log(numStr);
    // imgIn.src = "https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
    section.appendChild(imgIn);
    let imgDom = document.getElementById("img" + numStr);
    imgDom.className = "imgLogo";

    inputIn.value=res;

    if(compro==true){
        imgDom.src = "https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
    } else {
        imgDom.src = "https://cdn-icons-png.flaticon.com/512/3572/3572260.png";
    }

}

function eliminarListado(sectionId) {

    let container = document.getElementById("contCentrar");
    let section = document.getElementById(sectionId);
    section.remove();
}

function eliminarTodosListados () {
   let numStr;
   let sectionId;
   //alert("Se Inicia la Eliminacion de las Secciones")
    for (let i=1;i<=numerRepeticiones;i++) {
        if (i < 10) {
            numStr = "0" + i;
            console.log(numStr);
        } else {
            numStr = i.toString();
            console.log(numStr);
        }
        
        sectionId = "l" + numStr;
        //alert("sectionId: " +sectionId);
        document.getElementById(sectionId).remove();
    }   
}


function todoBien() {
    let nombre = document.getElementById("textoNombre").textContent;
    console.log(nombre);
    if (nombre == null) {
        nombre = "";
    }

    Swal.fire(
        {
            title: `Enhorabuena ${nombre}`,
            text: `La Respuesta es CORRECTA`,
            icon: "success",
            imageUrl: "https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            imageWidth: 400,
            imageHeight: 200
        }
    )


}

function aleatorio(arrNum) {
    let num;
    let random;
    let k = 0;
    do {
        random = Math.random();
        num = Math.round(random * 10);
        if (num == 0) {
            num = 1;
        }
        k = k + 1;
        //console.log(k);
    } while ((arrNum.includes(num) == true));
    return num;

}


function empezar() {

    let muestraTabla=document.getElementById("tabla");
    num = Number(document.getElementById("numero").value);

    //numOperacionReal = Number(document.getElementById("numOperacion").textCaption);

    let nombre=document.getElementById("textoNombre").value;

    // console.log("numOperacionReal es: " + numOperacionReal);

    // console.log("numerRepeticiones es: " + numerRepeticiones);

    // console.log("num es: " + num);

    document.getElementById("numOperacion").textCaption = numOperacionReal + 1;

    // console.log(`Número para el que se hace la Tabla: ${num}. Se van a hacer ${numerRepeticiones} repeticiones `);

    let accion = document.getElementById("IdEmpezar");

    if (accion.textContent == "Empezar") {
        numerRepeticiones = Number(document.getElementById("repeticiones").value);
        numOperacionReal = 1;
        document.getElementById("contenedorRepeticiones").style.visibility = "visible";
        document.getElementById("comprobarResultados").style.visibility = "visible";
        // console.log("disabled=true");
        num = document.getElementById("numero").value;
        // console.log("Numero es: " + num + ". Numero de Repeticiones:" + numerRepeticiones);
        document.getElementById("numOperacion").textContent = numOperacionReal;
        document.getElementById("numTotalOpera").textContent = numerRepeticiones;
        document.getElementById("repeticiones").disabled = true;
        document.getElementById("numero").disabled = true;

        accion.textContent = "Terminar";
        document.getElementById("tabla").disabled=true;

        for (let i = 1; i <= numerRepeticiones; i++) {
            arrRep[i - 1] = i;
            arrNum[i - 1] = aleatorio(arrNum);
            // console.log("arrNum" + arrNum);
        }

        inserListado(numOperacionReal, num, arrNum[numOperacionReal - 1]);

        document.getElementById("inp01").focus();
        let i = 1;

        if (muestraTabla.textContent == "Borra Tabla") {
            let listaUl = document.getElementById("listaResultado");
    
            if (listaUl.hasChildNodes()) {
                while (listaUl.firstChild) {
                    listaUl.removeChild(listaUl.firstChild);
                }
            }
            document.getElementById("tabla").textContent="Muestra Tabla";
        }

    } else if((accion.textContent == "Repasar")){
        resumen=true;
        if (numerRepeticiones==resBien){
            Swal.fire(
                {
                    title: `ENHORABUENA ${nombre}!!!!`,
                    html: "Has Respondico CORRECTAMENTE las <strong><b style='color:green; font-size:xx-large'>" + numerRepeticiones + "</strong></b> Preguntas." + " <br>  Te Sabes muy BIEN la Tabla del <strong><b style='color:blue; font-size:xx-large'>" + num + "</strong></b>.",
                    text: `Campeona!!`,
                    icon: "sucess",
                    imageUrl: cogerPurpurina(),
                    imageWidth: 500,
                    imageHeight: 300
                }
            );
        } else {
            let preguntasMal="Preguntas";
            let preguntasBien="Preguntas";
            if (resMal==1) {
                preguntasMal="Pregunta";
            }
            if (resBien==1) {
                preguntasBien="Pregunta";
            }
            Swal.fire(
                {
                    title: `Gracias por el Esfuerzo ${nombre}`,
                    html: "De la Tabla del:  <strong><b style='color:Blue; font-size:xx-large'>" + num + "</strong></b>. <br>  Has Respondido <strong><b style='color:green; font-size:xx-large'> BIEN: " + resBien + "</strong></b> " + preguntasBien + "." + "<br>  Has Respondido <strong><b style='color:red; font-size:xx-large'> MAL: " + resMal + "</strong></b>  " + preguntasMal + ".",
                    text: `Sigue Intentándolo`,
                    //icon: "error",
                    imageUrl: cogerAnimo(),
                    imageWidth: 300,
                    imageHeight: 150
                }
            );
        }
        //document.getElementById("comprobarResultados").style.visibility="hidden";
        //Tengo que hacer que se muestren todos los resultados con su imagen
        //Tengo que mostrar el Balance con el Total de Bien y Mal
        //Seguir mañana por aquí
        for (let k=0;k<numerRepeticiones;k++){
            hacerRepaso(k,num,arrNum[k],arrRes[k],arrComp[k]);
        }
        accion.textContent = "Terminar";
        //alert("Estoy Cambiado el Texto del Boton de Accion:" + accion.textContent == "Terminar");
        document.getElementById("balance").style.visibility="visible";
        document.getElementById("numBien").textContent=resBien;
        document.getElementById("numMal").textContent=resMal;
    } else if ((accion.textContent == "Terminar")) {
        swal.fire({
            title: "¿Estás Segura?",
            text: "Una vez que hayas 'Terminado' se Eliminarán 'Todos' los Resultados y Tendrás que Empezar",
            icon: "error",
            showDenyButton: true,
            confirmButtonText: 'Borrar Resultados',
            denyButtonText: 'Volver',
            confirmButtonColor: "#C0392B",
            denyButtonColor: "#3085d6",
        }).then((result) => {
            console.log("result.isConfirm: " + result.isConfirm);
            if (result.isConfirmed) {
                swal.fire({
                    title: "Han Sido Borrados todas los Resultados.",
                    icon: "success"
                });
                //limpiarTablero();
                //alert("Se está eliminando Todo y Preparando para Empezar de nuevo");
                // ;
                // Codigo Anterior
                console.log("Numero de Repeticiones: " + numerRepeticiones);
                console.log("Numero de Operacion Real: " + numOperacionReal);
                // if (numerRepeticiones == numOperacionReal) {
                if (resumen==true) {
                    eliminarTodosListados();
                } else {
                    eliminarListado("l01");
                }
                document.getElementById("balance").style.visibility="hidden";
                document.getElementById("IdEmpezar").textContent="Empezar";
                document.getElementById("repeticiones").disabled = false;
                document.getElementById("numero").disabled = false;
                document.getElementById("tabla").disabled=false;
                document.getElementById("comprobarResultados").style.visibility="hidden";
                document.getElementById("contenedorRepeticiones").style.visibility="hidden";
                resBien=0;
                resMal=0;
                arrRep=[];
                arrNum=[];
                arrRes=[];
                arrComp=[];


            } else if (result.isDenied) {
                swal.fire({
                    title: "NO se han Borrado los Resultados.",
                    text: "Puedes Continuar Haciendo Multiplicaciones",
                    icon: "sucess"
                })
            }
        });

    } else if ((numerRepeticiones == numOperacionReal)) {
        document.getElementById("balance").style.visibility = "visible";
        document.getElementById("repeticiones").disabled = false;
        document.getElementById("numero").disabled = false;
        document.getElementById("contenedorRepeticiones").style.visibility="hidden";
        document.getElementById("comprobarResultados").style.visibility="hidden";
        document.getElementById("IdEmpezar").textContent="Empezar";
        resBien=0;
        resMal=0;
        arrComp=[];
        arrNum=[];
        arrRep=[];
        arrRes=[];
    }

}

function comprobarResultados() {

    
    let img;
    let pRes;
    let input;
    let inputId;

    let nombre=document.getElementById("textoNombre").value;

    //let accion=document.getElementById("IdEmpezar");

    img = document.getElementById("img01");
    pRes = document.getElementById("Res01");
    input = document.getElementById("inp01");
    arrRes[numOperacionReal - 1] = input.value;

    // alert("Number(pRes.textContent): " + Number(pRes.textContent));
    // alert("Number(input.value): " + Number(input.value));

    //alert("numOperacionReal: " + numOperacionReal + " - " + "numRepeticiones: " + numerRepeticiones);

    console.log("arrRes: " + arrRes);
    img.style.visibility="visible";

    //alert("Number(pRes.textContent) == Number(input.value): " + (Number(pRes.textContent) == Number(input.value)));
    document.getElementById("inp01").focus();
    if ((Number(pRes.textContent) === Number(input.value))==true) {

        img.src = "https://cdn-icons-png.flaticon.com/512/6785/6785304.png";
        resBien += 1;

        arrComp[numOperacionReal - 1] = true;
        // alert("arrNum[numOperacionReal-1]: " + arrNum[numOperacionReal-1]);
        // alert(nombre);
        // alert(num);
        Swal.fire(
            {
                title: `Enhorabuena ${nombre}.`,
                text: `La Respuesta es CORRECTA`,
                icon: "success",
                imageUrl: cogerPurpurina(),
                imageWidth: 400,
                imageHeight: 200
            }
        );
        // alert("Respuesta Correcta!! Número de Operación Real:" + numOperacionReal);
        document.getElementById("inp01").focus();
    } else {

        img.src = "https://cdn-icons-png.flaticon.com/512/3572/3572260.png";
        resMal += 1;
        arrComp[numOperacionReal - 1] = false;
        // alert("arrNum[numOperacionReal-1]: " + arrNum[numOperacionReal-1]);
        // alert(nombre);
        // alert(num);
        Swal.fire(
            {
                title: `${nombre} Respuesta INCORRECTA.`,
                html: "La respuesta Correcta es <strong><b style='color:green; font-size:xx-large'>" + num + " x " + arrNum[numOperacionReal-1] + " = " + num*arrNum[numOperacionReal-1] +"</strong></b>",
                text: "Sigue Intentándolo",
                icon: "error",
                imageUrl: cogerTristeza(),
                imageWidth: 400,
                imageHeight: 200
            }
        );
        //alert("Respuesta Incorrecta!!. Número de Operación Real:" + numOperacionReal);
        //Tengo que insertar los errores para repasarlos
        arrNum.push(arrNum[numOperacionReal-1]);
        arrRep.push(numerRepeticiones+1);
        numerRepeticiones+=1;
        document.getElementById("numTotalOpera").textContent=numerRepeticiones;
        

        //alert("numerRepeticiones: " + numerRepeticiones);
        //alert("resBien: " + resBien);

    }

    if (numOperacionReal == numerRepeticiones) {
        
        //document.getElementById("balance").style.visibility = "visible";
        eliminarListado("l01");
        document.getElementById("IdEmpezar").textContent="Repasar";
        document.getElementById("comprobarResultados").style.visibility="hidden";
        document.getElementById("contenedorRepeticiones").style.visibility="hidden";


        // document.getElementById("p01").innerHTML= numStr + ". &nbsp &nbsp";
        // document.getElementById("o01").innerHTML= " &nbsp" + num + " x " + arrNum[numOperacionReal-1] + " =  &nbsp ";
        // document.getElementById("inp01").value=null;
        // document.getElementById("Res01").innerHTML=num*arrNum[numOperacionReal-1];
        // img.style.visibility="hidden";
        // document.getElementById("numOperacion").textContent = numOperacionReal;
    } else {
        numOperacionReal += 1;
        //console.log("Vamos a intentar actualizar el texto para preguntar por la segunda Operación");
        //console.log("numOperacionReal es: " + numOperacionReal);
        //console.log("arrRep[numOperacionReal-1] es: " + arrRep[numOperacionReal-1]);

        //console.log(arrRep[numOperacionReal-1]+ ". &nbsp &nbsp");
        let numStr;
        if (arrRep[numOperacionReal-1] < 10) {
            numStr = "0" + arrRep[numOperacionReal-1];
            //console.log(numStr);
        } else {
            numStr = arrRep[numOperacionReal-1].toString();
            //console.log(numStr);
        }

        document.getElementById("p01").innerHTML= numStr + ". &nbsp &nbsp";
        document.getElementById("o01").innerHTML= " &nbsp" + num + " x " + arrNum[numOperacionReal-1] + " =  &nbsp ";
        document.getElementById("inp01").value=null;
        document.getElementById("Res01").innerHTML=num*arrNum[numOperacionReal-1];
        img.style.visibility="hidden";
        document.getElementById("numOperacion").textContent = numOperacionReal;
        //alert("Focus en Input");
        document.getElementById("inp01").focus();

    }
    if (numOperacionReal!=numerRepeticiones) {
        console.log("Focus en Iput");
        document.getElementById("inp01").focus();
    }
    // console.log("num: " + num);
    // console.log("numerRepeticiones: " + numerRepeticiones);
    // console.log("numOperacionReal: " + numOperacionReal);
    // console.log("resBien: " + resBien);
    // console.log("resMal: " + resMal);
    // console.log("arrRep: " + arrRep);
    // console.log("arrNum: " + arrNum);
    // console.log("arrRes: " + arrRes);
    // console.log("arrComp: " + arrComp);
}

function limpiarTablero() {
    let accion = document.getElementById("IdEmpezar");
    document.getElementById("listaResultado").style.visibility = "hidden";
    document.getElementById("comprobarResultados").style.visibility = "hidden";
    document.getElementById("contenedorRepeticiones").style.visibility = "hidden";
    document.getElementById("balance").style.visibility = "hidden";
    accion.textContent = "Empezar"
    document.getElementById("numero").disabled = false;
    let sectionId = "l01";
    eliminarListado(sectionId);
    document.getElementById("repeticiones").disabled = false;
    document.getElementById("numero").disabled = false;
    arrRep = [];
    arrNum = [];
    arrRes = [];
    arrComp = [];
    resBien = 0;
    resMal = 0;
}


function cogerPurpurina() {

    let purpurina = [
        "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/751373/pexels-photo-751373.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/751374/pexels-photo-751374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1331710/pexels-photo-1331710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6045514/pexels-photo-6045514.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/751378/pexels-photo-751378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1479170/pexels-photo-1479170.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/739199/pexels-photo-739199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7794266/pexels-photo-7794266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4030371/pexels-photo-4030371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/8014226/pexels-photo-8014226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
    let aleatorio = Math.round(Math.random() * 10);

    return purpurina[aleatorio];

}

function cogerAnimo() {

    let animo = [
        "https://images.pexels.com/photos/4792492/pexels-photo-4792492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7676849/pexels-photo-7676849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/5415778/pexels-photo-5415778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7676306/pexels-photo-7676306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
    let aleatorio = Math.round(Math.random() * 10);

    return animo[aleatorio];

}

function cogerTristeza() {

    let tristeza = [
        "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4271933/pexels-photo-4271933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6192328/pexels-photo-6192328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/9121365/pexels-photo-9121365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7952673/pexels-photo-7952673.jpeg",
        "https://images.pexels.com/photos/5859389/pexels-photo-5859389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7140772/pexels-photo-7140772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/5859664/pexels-photo-5859664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
    let aleatorio = Math.round(Math.random() * 10);

    return tristeza[aleatorio];

}

