// sync await es una manera mucha más sencilla de trabajar con promesas.con
// Podemos trabajar con código asincrono de una forma mucho más sencilla


const fs=require("fs");

function getText(pathFile){
    return new Promise((resolve, reject) =>{
        fs.readFile(pathFile,"utf-8",(err,data)=>{
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

async function readText(){
    try{
        const result1=await getText('./data/texto2.txt')
        console.log(result1)
        const result2=await getText('./data/texto2.txt')
        console.log(result2)
        throw new Error("Este es un problema Generado para comprobar funcionamiento de throw y new Error")
        const result3=await getText('./data/texto3.txt')
        console.log(result3)
        const result4=await getText('./data/texto55.txt')
        console.log(result4)
    } catch(error) {
        console.log(error)
    }
}

readText()