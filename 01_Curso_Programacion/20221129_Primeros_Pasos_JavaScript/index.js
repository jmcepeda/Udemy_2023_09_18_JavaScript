var cadena = new Array(3);
var prueba = new String;
var prueba2 = new String;
//cadena=Array[String]
console.log('Rabo de Toro');
//console.log('Introduce Primer Valor - 1 de 3:')
cadena[0]=1;
console.log(cadena);
prueba="Rabo de Super Toro";
console.log(prueba);

var rabo_require1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

var i = new Number;
var text = new String;
var text_prueba = new String;
var number_prueba = new Number;
i=0;
//for(i=0; i< 3;i++) {
    text="Introduce Valor " + (i+1) +  " de 3 para Obtener el Máximo Valor:";
    //console.log(text);
    rabo_require1.question(text, text_prueba => {
        cadena[0]=parseInt(text_prueba);
        console.log(`El Valor ${i} que has introducido es: ${(cadena[0])}!`);
        rabo_require1.close();
    });

    var rabo_require2 = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });

    rabo_require2.question(text, text_prueba => {
        cadena[1]=parseInt(text_prueba);
        console.log(`El Valor ${i} que has introducido es: ${(cadena[1])}!`);
        rabo_require2.close();
    });

    console.log(cadena);

    //console.log(text_prueba);
//}

//cadena[0]=prompt("Introduce Primer Valor - 1 de 3:");
//cadena[1]=prompt('Introduce Primer Valor - 2 de 3:')
//cadena[2]=prompt('Introduce Primer Valor - 3 de 3:')
