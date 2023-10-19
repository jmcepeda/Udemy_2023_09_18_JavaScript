
import express from 'express';

const app=express();

app.listen(3000);

app.get('/employees',(req, res) => res.send("Obteniendo empleados"));

app.post('/employees',(req, res) => res.send("Creando empleados"));

app.put('/employees',(req, res) => res.send("Actualizando empleados"));

app.delete('/employees',(req, res) => res.send("Eliminando empleados"));

console.log("Hello World");

console.log("Server is running in port 3000"); 
