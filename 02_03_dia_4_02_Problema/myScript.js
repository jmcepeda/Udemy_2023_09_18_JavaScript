console.log("Traga Traga Cerda");


//console.log(document.getElementById("num1").value);



function cogeNumeros() {
    let num1=Number(document.getElementById("num1").value);
    console.log("num1: " + num1 + ".");
    let num2=Number(document.getElementById("num2").value);
    console.log("num2: " + num2 + ".");
    return [num1,num2];    
}







function sumar() {
    let numeros=cogeNumeros();
    //console.log(numeros[0], numeros[1]);
    let num1=numeros[0];
    let num2=numeros[1];
    let resultado=num1+num2;
    //console.log("num1:",num1, ". num2: "+ num2 + ". Ressultado: " + resultado + ".");
    mostrarResultado(resultado);
 }

function restar() {
    let numeros=cogeNumeros();
    let num1=numeros[0];
    let num2=numeros[1];
    let resultado=num1-num2;
    mostrarResultado(resultado);
}

function multiplicar() {
    let numeros=cogeNumeros();
    let num1=numeros[0];
    let num2=numeros[1];
    let resultado=num1*num2;
    mostrarResultado(resultado);
}

function dividir() {
    let numeros=cogeNumeros();
    let num1=numeros[0];
    let num2=numeros[1];
    let resultado=num1/num2;
    mostrarResultado(resultado);
}

function potencia() {
    let numeros=cogeNumeros();
    let num1=numeros[0];
    let num2=numeros[1];
    console.log("Num1: " + num1 + ". Num2: " + num2 + ".");
    let resultado=Math.pow(num1,num2);
    console.log("Resultado: " + resultado + ".");
    mostrarResultado(resultado);
}

function raiz() {
    let numeros=cogeNumeros();
    let num2=numeros[1];
    let resultado=Math.sqrt(num2);
    mostrarResultado(resultado);
}

 function mostrarResultado(resultado){
    document.getElementById("resultado").textContent=resultado; 
 }


