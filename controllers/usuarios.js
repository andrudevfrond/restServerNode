const { response, request }= require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response)=> {
    const { q, nombre = 'no name', apikey, page = 1, limit} = req.query;
    res.status(403).json({
        ok: true,
        message: 'GET manejar controlador',
        marca: 'chevrolet',
        q,
        nombre,
        apikey,
        page,
        limit,
        query : req.query
    });
}

const usuariosPost = async(req = request, res = response )=> {

    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});
    
    //encriptar la contraseña
    const salt = await bcryptjs.genSaltSync();
    usuario.password= await bcryptjs.hashSync(password, salt);
    //guadar en la base de datos
    await usuario.save();

    res.status(201).json({
        usuario
    });
}

const usuariosPut = async (req = request, res = response)=> {

    const {id} = req.params;
    const { password, google, correo, ...resto } = req.body;

    if (password){
        //encriptar la contraseña
        const salt = await bcryptjs.genSaltSync();
        resto.password= await bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.status(403).json({  
        ok: true,
        message: 'PUT manejar controlador',
        usuario
    });
}

const usuarioDelete = (req = request, res = response)=> {
    res.status(403).json({
        ok: true,
        message: 'DELETE manejar controlador',
        marca: 'chevrolet'
    });
}

const usuariosPatch = (req = request, res= response)=> {
    res.status(403).json({
        ok: true,
        message: 'PATCH manejar controlador',
        marca: 'chevrolet'
    });
}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuarioDelete,
    usuariosPut,
    usuariosPatch
}