console.log("First")

setTimeout(()=> {
    console.log("Second");
},1500)

console.log("Third")


const http=require('http');


const PORT=3500;
server=http.createServer((req,res) => {
    console.log("Se Acaba de Crear el Servidor");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    console.log(req.url)
    if (req.url=="/about"){
        console.log("about")
        // for (let i=0;i<1900000;i++){
        //     console.log((i+1)*Math.random());
        // }
        res.write("<h1>Aquí se Describe sobre que va esta página</h1>");
    } else if (req.url=="/index"){
        res.write(`
        <h1>Listado de Frutas</h1> 
            <ul>
                <li>Manzana</li>
                <li>Naranja</li> 
                <li>Fresas</li>    
            </ul>`);
            console.log("index")
    } else {
        res.write("<h1>Texto General para Resto de Páginas</h1>"); 
        console.log("resto")
    }
    res.end();
}).listen(PORT,() => {
    console.log(`El servidor está corriendo y está escuchando en el puerto: ${PORT}`);
})