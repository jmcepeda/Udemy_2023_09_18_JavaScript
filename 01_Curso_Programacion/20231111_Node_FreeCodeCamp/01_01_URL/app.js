const miURL = new URL(
  "https:///www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1"
);

const {inforCursos} = require("./cursos");

console.log("Pruebas con Objetos URL");
console.log(`Nombre del host: ${miURL.hostname}`);

console.log(`Nombre de la Ruta, pathname: ${miURL.pathname}`);

// En Este Caso los Parámetros de Búsueda son también un Objeto (miURL.searchParams) es un Objeto que tiene propiedades

console.log(`Parámetros de Búsqueda searchParams:`);

console.log(miURL.searchParams);

console.log(typeof miURL.searchParams);

console.log(miURL.searchParams.keys());

console.log(miURL.searchParams.get("ordenar"));

console.log(miURL.searchParams.get("nivel"));

const http = require("http");

const servidor = http.createServer((req, res) => {
const { method } = req;
console.log(method);
switch (method) {
    case "GET":
      console.log("Estamos en una Petición 'GET'");
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req,res);
    default:
        res.statusCode=501;
        res.end(`El metodo: ${method} usado no puede ser manejado por el servidor.`);
        console.log(`El metodo:  ${method}, usado no puede ser manejado por el servidor:`);
}

  console.log("Nueva Solicitud");
  // console.log(`Este es la URL del nuevo req: ${req.url}`)

  // console.log(`Este es la URL del nuevo req: ${req.method}`);

  // console.log("=======> Esta es la Respuesta:");

  // console.log(res.statusCode);

  // res.end("Hola Mundo. Vienen Curvas");
});

function manejarSolicitudGET(req, res) {
  const path = req.url;
  console.log("Nueva Petición");
  // Por defecto el codigo de respuesta del servidor es 200
  // Es por esto que no hace falta asignar valor de estado a 200
  // res.statusCode = 200;
  // Solo se Asigna en código en caso de fallo

  console.log(`Codigo de Estado de Respuesta ${res.statusCode}`);
  console.log(`Esta es la ruta solicitada: ${path}`);
  if (path === "/") {
    let cuerpo="Bienvenido a mi Primer Servidor y API creados con Node.js tras el cambio para probar nodemon";
    // console.log("Estamos respondiendo a una petición GET con la ruta '/'");
    //Al Cambiar el Tipo de Contenido a aplicatio/json. El Navegador lo que hace es descargar un fichero, pero no muestra la informción en el Navegador
    // res.writeHead(200, {
    //   'Content-Type': 'aplication/json'
    // });
    res.end(cuerpo);
  } else if (path === "/cursos") {
    res.end(JSON.stringify(inforCursos));
  } else if (path === "/cursos/programacion") {
    res.end(JSON.stringify(inforCursos.programacion));
  } else if (path === "/cursos/matematicas") {
    res.end(JSON.stringify(inforCursos.matematicas));
  } else {
    res.statusCode = 404;
    res.end("Recursos no Encontrato. Error 404. Page not found");
  }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    if (path === "/cursos/programacion") {
        let cuerpo="";
        req.on("data", (contenido) => {
          cuerpo+=contenido.toString();
        });

        req.on("end", ()=> {
          console.log(cuerpo);
          console.log(typeof cuerpo);
          cuerpo=JSON.parse(cuerpo);
          console.log(typeof cuerpo)
          res.end(`El Servidor recibió una solicitud POST para /cursos/programacion. Se ha recibido este Objeto cuyo título es: ${cuerpo.titulo}`);
        });

        res.statusCode = 200;
        // res.end("El Servidor recibio una solicitud POST para cursos/programacion");
    } else {
      res.statusCode = 404;
      res.end("Recursos no Encontrato. Error 404. Page not found");
    }
}

let puerto = 3000;
servidor.listen(puerto, () => {
  console.log(`El Servidor está escuchando en http://localhost:${puerto}..`);
});

let X = 4;
let Y = 5;
// console.log("Diga 33")
// console.log(`El resultado de la Operación es: ${X+Y}`);
