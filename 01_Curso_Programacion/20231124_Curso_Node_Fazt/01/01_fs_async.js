const fs=require("fs");

const colors=require("colors");

console.log(fs.readFileSync("./data/texto1.txt","utf-8"))
console.log(fs.readFileSync("./data/texto2.txt").toString())

fs.writeFileSync("./data/texto3.txt","Este es el Tercer Fichero Creado con fs.writeFileSync");


const contenido="Este es el cuarto FICHERO, que creamos con fs. En este caso le pasamos el contenido del texto como una variable. ";

fs.writeFileSync("./data/texto4.txt",contenido);

fs.writeFileSync("./data/texto4.txt","Este es el Texto que quiero añadir, este es el texto que se va a añadir, no va a sustituir el texto del fichero existente. Va a Añadirese.", {flag:"a"});

// Hoy día existe forma alternativa de gestionar eventos Sincrnos de forma Secuencial Async Await. Lo veremos en otro módulo. Buscarlo.


// AHORA NOS PONEMOS CON LOS MÉTODOS ASINCRONOS
// MÉTODOS QUE PUEDEN EJECUTARSE EN PARALELO

// Este es el forma antigua de gestionar Eventos Sincronos para que se ejecuten de forma secuencial
// Esto es el llamado Callback Hell

fs.readFile("./data/texto4.txt","utf-8", (err,data) => {
    if (err){
      console.log(`Este es el Error que ha sucedido: ${err}`)
    } else {
        console.log("Ha terminado de leer el fichero texto4.txt. " + "Este es el Contenido del fichero: " + data);

        fs.readFile("./data/texto1.txt","utf-8", (err,data) => {
            if (err){
              console.log(`Este es el Error que ha sucedido: ${err}`)
            } else {
                console.log("Ha terminado de leer el fichero texto1.txt. " + "Este es el Contenido del fichero: " + data);

                fs.readFile("./data/texto2.txt","utf-8", (err,data) => {
                    if (err){
                      console.log(`Este es el Error que ha sucedido: ${err}`)
                    } else {
                        console.log("Ha terminado de leer el fichero texto2.txt. " + "Este es el Contenido del fichero: " + data);

                        fs.readFile("./data/texto3.txt","utf-8", (err,data) => {
                            if (err){
                              console.log(`Este es el Error que ha sucedido: ${err}`)
                            } else {
                                console.log("Ha terminado de leer el fichero texto3.txt. " + "Este es el Contenido del fichero: " + data);
                            }
                        });
                    }
                });
            }
        });
    }
});

