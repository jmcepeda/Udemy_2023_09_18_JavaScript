// Genericos en Funciones

// Es mjuy habitual que tengamos funciones muy similares, en las que solo cambia el tipo de dato.
//Con Genericos podemos simplificar y hacer más sencillo el código 

function log(a: string, b: string) {
    console.log(a,b)
} 

function logN(a: string, b: number) {
    console.log(a,b)
} 
function logT(a: string, b: boolean) {
    console.log(a,b)
} 

log("dato","Chanchito Feliz")

// La manera de Implementar esto con Genéricos es Esta
// Con los Genéricos podemos ir pasando diferentes tipos de argumentos conforme nos vaya haciendo falta 

function GenLog0<T>(a: string, b: T,): T { // Se pueden pasar Diferentes Typos de Genéricos en una función, se pueden pasar Clases, etc
    console.log(a,b)
    return b
}
GenLog0<boolean>("Hola", true)
GenLog0("Hola", {"id": 23, "name": "Ildefonso"})
GenLog0("Hola", 55)

function GenLog<T,V>(a: T, b: V): T { // Se pueden pasar Diferentes Typos de Genéricos en una función, se pueden pasar Clases, etc
    console.log(a,b)
    return a
}

GenLog<string, string>("Hola", "Diga 33")
GenLog<string, number>("Hola", 456)
GenLog("Hola", false) // No tengo muy claro porqué, pero el compilador está infiriendo que el tipo del segundo argumento de la función es del tipo 'Literal'. 
GenLog(true, false)

// Tengo que estudiar a Muerte ASYNC AWAIT y las PROMESAS

async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta= await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string,
}

async function main(){
    const user=await fetchData<User>("/usuarios")
    console.log(user.id)
}

//Genericos en Clases
type Computador = {
    encender: () => void
    apagar: () => void
}

class Programador<T> {
    computador: T
    constructor (t: T){
        this.computador=t
    }
}

const programador= new Programador<Computador>({encender: () => {}, apagar:() => {}})

console.log(programador.computador.apagar)

const programador1= new Programador<string>("Toma Mi Rabito")

console.log(programador1.computador)

// Pasamos a los genéricos para las Interfaces y para los tipos

interface KeyValue<T,V> {
    key: T,
    value: V
}

interface Product2 {
    id: string
}

function fetchProduct (): KeyValue<string,Product2> {
    return {
        key: "id de Producto",
        value: { id: "id de Producto"}
    }
}

function fetchStock (): KeyValue<string,number> {
    return {
        key: "id de Producto",
        value: 500
    }
}

console.log("Salida de Function fetchProduct(): ",fetchProduct())
console.log("Salida de Function fetchStock(): ",fetchStock())


// Pasamos a Continuación a Ver Restricciones en Genéricos 'Constrains'
// Pasamos a limitar o Restringir el Tipo de Genético que Podemos pasar en una clase o en una función

function printJ<T>(t: T): T {
    console.log(t)
    return t
}

console.log("Imprimiendo por consola el resultado de la función printJ: ",printJ(42))

console.log("Imprimiendo por consola el resultado de la función printJ: ",printJ("Rabito bien Durito"))


function printJ2<T extends boolean>(t: T): T {
    console.log(t)
    return t
}

console.log("Imprimiendo por consola el resultado de la función printJ2: ",printJ2(true))

console.log("Imprimiendo por consola el resultado de la función printJ2: ",printJ2(false))


interface Usuario3 {
    id: string,
    name: string
}

function printJ3<T extends Usuario3>(t: T): T {
    console.log(t.name)
    console.log(t.id)
    return t
}

console.log("Imprimiendo por consola el resultado de la función printJ3: ",printJ3({id: "Rabito", name: "Rabito"}))

console.log("Imprimiendo por consola el resultado de la función printJ3: ",printJ3({id: "Tronquito", name: "Durito"}))


// Tambien se puede Restringir por medio de Clases

// Si ponemos la Resticción con una Clas y no con un Interfaces para los constrains en aplicación de Genéricos para las Funciones, solo se exige que al menos tenga el elemento que contiene la Clase, pero puede tener otros elementos adicionales a los definidos en la Clase
class Usuario4 {
    constructor(public id: string) {}
}

function printJ4<T extends Usuario4>(t: T): T {
    console.log(t.id)
    return t
}


console.log("Imprimiendo por consola el resultado de la función printJ3: ",printJ4({id: "Rabito", name: "Rabito"}))

console.log("Imprimiendo por consola el resultado de la función printJ3: ",printJ4({id: "Tronquito", name: "Durito"}))