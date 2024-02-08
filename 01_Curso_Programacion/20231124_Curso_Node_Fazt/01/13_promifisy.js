const {promisify} = require("util")

const {readFile}=require("fs");
const { setUncaughtExceptionCaptureCallback } = require("process");


function readText(pathFile){
    return new Promise ((resolve, reject) => {
        //readFile espera un callBack
        //Funciones Asíncronas se incluyen dentro de Promesas, que pueden enviar los resultados de callBack en resolve y reject
        readFile(pathFile,"utf-8", (data, err) =>{
            if (err){
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

async function getText(){
    try{
        const text1 = await readText("./data/texto1.txt")
        console.log(`Este es el resultado de la Lectura del Primer Archivo: ${text1}`)
    } catch(error) {
        console.log(error)
    }
} 

getText()



////////////////////////
// Ahora Vamos a Implementar esto de una manera más Sencilla
// promisify es muy interesante pues me permite convertir directamente
// Cualquier Función Asíncrona en una Promesa
// const readFilePro = promisify(readFile) // Con esto es equivante a todo esto.


// function readFilePro(pathFile) {
//     return  new Promise((resolve, reject) => {
//        readFile(pathFile,"utf-8", (data,err)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const readFileProm=promisify(readFile)

async function readTextPromise(){
    const text1Pro=await readFileProm("./data/texto4.txt","utf-8")
    console.log(text1Pro);
    const text2Pro=await readFileProm("./data/texto3.txt","utf-8")
    console.log(text2Pro);
    const text3Pro=await readFileProm("./data/texto2.txt","utf-8")
    console.log(text3Pro);
}

readTextPromise()

