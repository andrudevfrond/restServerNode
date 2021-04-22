const Role = require('../models/role');
const Usuario = require('../models/usuario');


const validarRole = async (rol = '') =>{
    const existRole = await Role.findOne({rol});
    if (!existRole){
        throw new  Error(`El rol ${rol} no esta registrado en base de datos`);  
    }
}

const siExisteEmail = async (correo ='')=> {
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
        throw new Error(`El correo ${correo} ya se encuentra registrado`);
    }
}

module.exports = {
    validarRole,
    siExisteEmail
}