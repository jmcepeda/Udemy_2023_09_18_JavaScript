const {readFile}=require("fs");

// readFile. Método Asíncrono para hacer lectura de archivos

//let pathFile='./data/texto1.txt'

const getText=(pathFile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathFile,"utf-8",(err,data)=>{
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })

}

getText('./data/texto2.txt')
    .then((result)=>{console.log(result)})
    .then(() => getText('./data/texto4.txt'))
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error))



