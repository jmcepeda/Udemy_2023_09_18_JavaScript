//console.log("Porra para tu culo");

const web=require("./module/myModule");

const {suma}=require("./module/myMaths");

let num1 =2;

let num2=5;

console.log(`Usando una función Importada de otro módulo para sumar los números: ${num1} + ${num2} = ${resultado=suma(num1,num2)}`);

console.log(web.myWeb);

const http=require('http')
const puerto=3000;

const colors =require('colors');

const server=http.createServer((req, res) => {
    res.write(JSON.stringify("Hola Mundo"));
    res.end();
}).listen(puerto,()=>{
    console.log(`Aplicacion Escuchando en puerto:  + ${puerto}`.rainbow);
});
