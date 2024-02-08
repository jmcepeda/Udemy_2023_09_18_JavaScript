let nombre ='JoseM';
let apellido='Cepeda';
let username='jmcepeda'
let edad=19
let mail='jmcepeda@aaa.sjk'
let isMayorDeEdad=true;
let dineroAhorrado=15000;
let deuda=8500;

console.log(`Estas Son Todas las Variables ${nombre}, ${apellido}, ${username}, ${edad}, ${mail}, ${isMayorDeEdad}, ${dineroAhorrado}, ${deuda}`)

console.log(`Este es mi nombre ${nombre}, ${apellido}`)

console.log(`Este es mi Dinero: ${dineroAhorrado} - ${deuda} = ${dineroAhorrado-deuda}`)

function nombreCompleto (nombre, apellido) {
    console.log(`Probando Funciones. Mi nombre completo es: ${nombre} ${apellido}.`)
}

nombreCompleto('Alberto','Gonzalez')

nombreCompleto('Esteban', 'Martinez')

function operacionMatematica (sumando1, sumando2) {
    return `Probando Funciones Matemáticas. Mi operacion de Prueba es: ${sumando1} + ${sumando2} = ${sumando1+sumando2}`
}

console.log(operacionMatematica(3,20))

//Otra Prueba de Funcion

let nombreEntero=`${nombre} ${apellido}.`

let rabo = () => {
    console.log('Esto es el Primer texto de prueba para comprobar si funciona el console.log de la funcuión rabo()')
    return `Tragatelo todo ${nombreEntero}`;
    console.log('Esto es el Segundo texto de prueba para comprobar si funciona el console.log de la funcuión rabo()')
}

console.log(rabo());

let funcTipoSuscripcion = (tipoDeSuscripcion) => {
    if (tipoDeSuscripcion=='Free') {
        console.log("Solo Puedes tomar los cursos gratis");
    } else if (tipoDeSuscripcion=='Basic') {
        console.log("Puedes tomar casi todos los curos de Platzi durante un mes");
    } else if (tipoDeSuscripcion=='Expert') {
        console.log("Puedes tomar casi todos los curos de Platzi durante un año");
    } else if (tipoDeSuscripcion=='ExpertDuo') {
        console.log("Tu y alguien más puedes tomar  todos los curos de Platzi durante un año");
    }
}

funcTipoSuscripcion('Free');

funcTipoSuscripcion('Expert');

 
let functWhile = () =>{
    let i=0;
    while (i<5) {
        console.log(`El Valor de i es: ${i}`);
        i++;
    }
}

functWhile();

let j=10;
let newFunctWhile = () => {
    while (j>=2) {
        console.log(`El Valor de j es: ${j}`);
        j--;
    }
}
newFunctWhile();

//Cuidado prompt() No funciona para ejecutar en consola. Debe hacerse en explorador web
//Esta Funcion solo Funciona en el navegador, dado que tanto prompt como alert solo funcionan en un navegador
// let compruebaSuma = () => {
//     resultadoOk=false;
//     while(resultadoOk==false) {
//         let resultado=prompt("¿Cual es el Resultado de Sumar '2+2'");
//         if (Number(resultado)===4) {
//             window.confirm(`¡Enhorabuena tu resultado a la operación "2+2"= ${resultado} es CORECTO.! `);
//             resultadoOk=true;
//             return
//         }   
//     }
// } 

// compruebaSuma();

array1=[{nombre: 'Pablo', apellido: 'Iglesias'}, 'Hola Amapola', 33, true]

function imprimeArray (array) {
    console.log(array[0]);
}
imprimeArray(array1);


array2=['Hola Amapola', 33, true, {nombre: 'Toribio', apellido: 'Andrade'}]

let imprimeArray_v2 = (array) => {
    console.log(array[0]);
}

imprimeArray_v2(array2);

let imprimeElementoArray=(array) => {
    for (i=0;i<array.length;i++) {
        console.log(array[i]);
    }
}
imprimeElementoArray(array2)

function pruebaFuncion(array) {
    for (i=0;i<array.length;i++) {
        console.log(array[i]);
    }
}

pruebaFuncion(array1);

// Ahora Vamos a Escribir Función para Imprimir Elementos de Un Objeto

array3={
    nombre: 'Telmo',
    edad: 25,
    trabajo: 'poco',
    gustos: 'Musicales',
    licenciado: false,
    estudios: ['Grado en Electricidad', 'Grado en Climatización', 'Estudio Básico en Segiuridad y Salud']
}

let objetoArray=Object.keys(array3);

// console.log(objetoArray)

// let ObjectoEntries=Object.entries(array3);
// console.log(ObjectoEntries)

let ObjectoValues=Object.values(array3);
console.log(ObjectoValues)


let imprimeElementosObjeto = (objec) => {
    let nombresObjeto=Object.keys(objec);
    let valoresObjeto=Object.values(objec);
    
    for (i=0;i<nombresObjeto.length;i++) {
        console.log(`${nombresObjeto[i]}: ${valoresObjeto[i]}`);
    }
}

imprimeElementosObjeto(array3);