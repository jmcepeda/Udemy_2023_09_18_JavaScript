const express=require("express");

const routerMatematicas=express.Router();

const {matematicas}=require("../datos/cursos").inforCursos;

routerMatematicas.get('/', (req, res) => {
    res.end(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema',(req,res) => {
    const tema=req.params.tema;
    const resultado=matematicas.filter(curso => curso.tema === tema);
    console.log(resultado);
    const query=req.query.ordenar;
    if (resultado.length===0){
        res.end(`Lo sentimos, en estos momentos no tenemos cursos disponibles de ${tema}`);
    } else {
        if (resultado.length===0) {
            res.end(`Lo sentimos, en estos momentos no tenemos cursos disponibles de ${lenguaje}`);
        } else {
            if(query==="visitas") {
                res.end(JSON.stringify(resultado.sort((a,b) => b.visitas - a.visitas)));
            } else {
                res.end(JSON.stringify(resultado));
            }
        }
    }
})

let raboDuro=33;
module.exports={routerMatematicas,raboDuro};