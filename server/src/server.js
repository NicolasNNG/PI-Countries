const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

//Para ver las peticiones por consola
server.use(morgan("dev"));
server.use(cors());

server.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");//actualice para que coincida con el dominio desde el que realizará la solicitud
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});


// Detectar la estructura json 
server.use(express.json());
//Rutas a utilizar
server.use(router);

module.exports = server;
