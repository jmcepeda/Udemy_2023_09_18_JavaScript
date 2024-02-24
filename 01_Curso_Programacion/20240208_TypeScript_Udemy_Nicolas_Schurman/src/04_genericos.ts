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



