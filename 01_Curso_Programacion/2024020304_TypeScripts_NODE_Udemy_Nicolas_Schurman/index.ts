// Cosas a Hacer en Consola para Instalar Dependencias y Módulos Necesarios

// Para poder ejecutar directamente los archivos de TypeScript sin necesidad de compilarlo, es necesario instalar con "npm" el módulo "ts-node"
// "npm i -D ts-node"

// Otro aspecto a Hacer, vamos a tener que hacer es instalar en el proyecto "-S" express
// npm i -S express

// Por último vamos a instalar las definiciones de los tipos
// Tenemos que buscar la Definición de los Tipos pues no viene con la instalación
// Cuando instalamaos los módulos no vienen con los tipos para typeScript, dado que estos módulos puede usarse directamente en JavaScript, por tanto hay que instalarlos. Todas estas definiciones las podemos encontrar en "https://github.com/DefinitelyTyped/DefinitelyTyped", pero las podemos instalar desde npm

// npm i -D @types/express @types/express 

// Además es una buena idea instalar TypeScript como modulo de desarrollo para que todos los desarrolladores lo tengan instalado
// npm i -D typscript

// Para inicializar nuestra configuración con TypeScript "tsc --init"


console.log("Rabito")

const holamundo: string="Hola Mundo"

console.log("Imprimiendo por Pantalla: ",holamundo)
//Importante tener claro como se importa express

import express from "express"

import userRoute from "./users/index"

const app = express()
app.use(express.json()) // Con Esta Línea habilitamos un middleware que snos permite recibir peticiones POST con contenido JSON

app.use('/', userRoute)

const PORT=3000
app.listen(PORT,() => console.log("El Servidor esta corriendo en el puerto: ", PORT))



