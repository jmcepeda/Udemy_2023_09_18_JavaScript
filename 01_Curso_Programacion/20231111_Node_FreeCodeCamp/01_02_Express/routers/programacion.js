const express=require("express");

const routerProgramacion=express.Router();

//Middleware
//Las Funciones Middleware se EJECUTAN:
// - Despues de Recibir una Solicitud
// - Antes de Enviar una Respuesta

// Las Funciones Middleware tienen acceso a la Solicitud, al objeto de la Respuesta y a 'next(), una función que se llama para ejecutar el proximo miidleware.

//Middleware es una Función Intermedidario

routerProgramacion.use(express.json());

const {programacion}=require("../datos/cursos.js").inforCursos;

// console.log("Programacion:")
// console.log(programacion);

routerProgramacion.get('/', (req, res) => {
    res.end(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje=req.params.lenguaje;
    const resultado=programacion.filter(curso => curso.lenguaje === lenguaje);
    // console.log(resultado);
    const query=req.query.ordenar;
    console.log(query);
    
    if (resultado.length===0) {
        res.status(404).send(`Lo sentimos, en estos momentos no tenemos cursos disponibles de ${lenguaje}`);
    } else {
        if(query==="visitas") {
            res.send((resultado.sort((a,b) => a.visitas - b.visitas)));
        } else {
            res.send((resultado));
        }
    }
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje=req.params.lenguaje;
    const nivel=req.params.nivel;
    const resultado=programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel===nivel);
    console.log(resultado);
    if (resultado.length===0) {
        res.status(404).send(`Lo sentimos, en estos momentos no tenemos cursos disponibles de ${lenguaje} de nivel ${nivel}`);
        // El Error 404 se reserva para cuando el usuario de la API utiliza una ruta que no es válida o que no lleva a ningún recurso del servidor. El servidor no puede servir esta información.
        //res.status(400).end();
        // Si lo que queremos es enviar una respuesta vacía podemos utilizar el método "".end()"
        // Si como respuesta a la petición queremos contestar que la ruta no existe en vez de contestar que se ha producido un error
        // Tendríuamos que utilizar el código de estado "204" en vez del "404".
        //res.status(204).send("Ruta Equivocada");
    } else {
        res.send((resultado));
    }
});

routerProgramacion.post('/',(req,res) => {
    let cursoNuevo=req.body;
    console.log(JSON.stringify(cursoNuevo));
    programacion.push(cursoNuevo);
    res.send((programacion));
})

routerProgramacion.put('/:id',(req,res) => {
    const cursoActualizado=req.body;
    const id=req.params.id;

    console.log("Este es el id: " + id);
   
    //console.log(JSON.stringify(cursoActualizado));
    const index=programacion.findIndex(curso => curso.id==id);

    console.log(index);

    if (index>0){
        programacion[index]=cursoActualizado;
        // res.send((programacion));
        // Una alternativa a res.send(JSON.stringify(resultado)) es
        // res.json(resultado) == es.send(JSON.stringify(resultado))
        // Con res.json(resultado) Nos garantizamos que antes de enviar el resultado
        // El resultado se convierte en formato JSON
        // Es equivalente solo que es más corto de escribir
        
    } else {
        res.status(404).end("No se ha encontrado el curso con id: " + id);
        
    }
    
})

routerProgramacion.patch('/:id',(req,res) => {
    const infoActualizado=req.body;
    const id=req.params.id;

    console.log("Este es el id: " + id);
   
    //console.log(JSON.stringify(cursoActualizado));
    const index=programacion.findIndex(curso => curso.id==id);

    console.log("Este es el indice del elemento del array: " + index);

    if (index>0){
        let cursoAModificar=programacion[index];
        Object.assign(cursoAModificar,infoActualizado);
        res.send((programacion));
    } else {
        res.status(404).send("No se ha encontrado el curso con id: " + id);
        
    }
    
})


routerProgramacion.delete('/:id', (req,res)=>{
    const id=req.params.id;
    console.log("Este es el id: " + id);

    const index=programacion.findIndex(curso => curso.id==id);
    if (index>0){
        console.log("Este es el indice del array que hay que eliminar: "+index);
        programacion.splice(index,1);
        res.send((programacion));
    } else {
        res.status(404).send("No se ha encontrado el curso con id: " + id);
    }
})
//let raboDuro=33;

//module.exports = {routerProgramacion, raboDuro};

module.exports = routerProgramacion;