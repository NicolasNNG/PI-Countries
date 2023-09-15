const server = require("./src/server");
const { conn } = require("./src/db.js");
const postData= require('./src/utils/postData');

const PORT = 3001;

conn
  .sync({ force: false }).then(() => { //Enviar solicitua al servidor para que inicie y escuhe el puerto 
    server.listen(PORT,() => {postData(); //Lama a la funcion para insertar datos en la BD
      console.log('Base de datos cargada con exito')
      console.log(`Server listening on port ${PORT}`);
     
    });
  })
  .catch((error) => console.error(error)); //



