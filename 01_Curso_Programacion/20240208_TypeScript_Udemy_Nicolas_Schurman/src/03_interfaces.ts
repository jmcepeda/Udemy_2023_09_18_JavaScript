//Las Interfaces se usan cuando no se va a compartir lógica, pero si se tienen que implmentar una serie de métodos y propiedades en todas las Clases Heredadas


abstract class Animalito{
    public abstract name: string
    public abstract onomatopeya(): string
    public abstract caminar(): string
    constructor (
        public raza: string
    ){}
}

class Caballo extends Animalito {
    
    name="Caballus Hectereus"
    onomatopeya() :string {
        return "Eiiiii"
    }
    caminar() :string {
        return "Cabalgando"
    }
}

class Cerdo extends Animalito {
    
    name="Chanchirius Felicius"
    onomatopeya() :string {
        return "Oing"
    }
    caminar() :string {
        return "Rebolcandose en Barro"
    }
}

console.log()


// La forma adecuada de hacer esto de forma más sencilla es con Interfaces

interface Animalito2{
    name: string                
    onomatopeya(): string
    caminar(): string   // En las Interfaces no podemos hacer referencia a public/private/protected
                        // Tampoco podemos hacer referencia a abstract para hacer propiedades o métodos obligados de implementar en las Clases Heredadas
}

class Caballo2 implements Animalito2 {
    
    name="Caballus Hectereus"
    onomatopeya() :string {
        return "Eiiiii"
    }
    caminar() :string {
        return "Cabalgando"
    }
}

class Cerdo2 implements Animalito2 {
    
    name="Chanchirius Felicius"
    onomatopeya() :string {
        return "Oing"
    }
    caminar() :string {
        return "Rebolcandose en Barro"
    }
}

class Perro2 implements Animalito2{
    name="Canis"
    onomatopeya() :string {
        return "Auff"
    }
    caminar() :string {
        return "Perro Corriendo"
    }
   
}

// Las Interfaces son muy similares a los Tipos
// Existe una convención, si vamos a implementar
//  -  Una interfaz en una clase se recomienda utilizar Interfaces
//  -  Otro tipo de objetos o elementos se recomienda usar Type para todo lo demás


// Index Signature
// En caso de que tengamos un Objeto que tiene Propiedades Dinámicas, podemos asignarle el tipo a las propiedades de forma Dinámica Usando los Index Signature


let objetoReferencia ={
    'id1': {},
    'id2': {},
    // ....
    'id99999': {}
}

class DiccionarioUsuarios {
    [id: string]: string
}

let diccionarioUsuarios= new DiccionarioUsuarios
diccionarioUsuarios.a1="usuario1"
diccionarioUsuarios["1a"]="usuario2"

console.log("Diccionario de Usuarios con Identificadores en Tiempo Dinámico: ", diccionarioUsuarios)