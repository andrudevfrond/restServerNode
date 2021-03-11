const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.urlBaseUser = '/api/usuarios';
        //middlewares
        this.middlewares();
        //ruta de mi aplicacion
        this.routes();
    }
    
    middlewares(){
        //CORS
        this.app.use(cors());
        //parceo y lectura de body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.urlBaseUser, require('../routes/usuarios'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto: ${this.port}`);
        });
    }
}

module.exports = Server