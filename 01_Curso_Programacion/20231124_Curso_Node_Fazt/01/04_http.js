const http=require("http");


const port=3000;
const server=http.createServer((req,res) =>{
    console.log(req);
    console.log(req.url);

    if (req.url=="/"){
        res.write("Esta es la Pagina de Inicio de Mi App");
        res.end();
    } else if (req.url=="/about"){
        res.write("En esta Pagina Te doy Informacion Acerca de Mi App");
        res.end();
    } else {
        
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        //res.writeHeader(404,{'"Content-Type": "text/html"; charset=utf-8'});
    
        res.statusCode=404;
        res.write('<h1>Not Found</h1>');
        res.write(`
        <h2>Página no encontrada</h2>
        <p>Lo siento, no se ha podido encontrar la página.</p>
        `)
        res.end();
    }
}).listen(port,()=>{
    console.log(`Servidor Escuchando en el Puerto ${port}`);
});