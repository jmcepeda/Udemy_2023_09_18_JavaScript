// const {inforCursos}=require('./datos/cursos.js');

const express=require('express');

const app=express();

//Router Programacion

// const routerProgramacion = require('./routers/programacion.js').routerProgramacion;

const routerProgramacion = require('./routers/programacion.js');

app.use('/cursos/programacion/',routerProgramacion);

// Router Matematicas

const routerMatematicas=require('./routers/matematicas.js').routerMatematicas;

app.use('/cursos/matematicas/', routerMatematicas);

app.get('/', (req, res) => {
    res.end("Mi Primer Servidor con Expres");
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO,() => {
    console.log(`La Aplicación está escuchando en el puerto: ${PUERTO}.`)
});

