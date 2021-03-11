const { response, request }= require('express');

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
        limit
    });
}

const usuariosPost = (req = request, res = response )=> {

    const body = req.body;

    res.status(201).json({
        ok: true,
        message: 'POST manejar controlador',
        marca: 'chevrolet',
        body
    });
}

const usuariosPut = (req = request, res = response)=> {

    const {id} = req.params;

    res.status(403).json({
        ok: true,
        message: 'PUT manejar controlador',
        marca: 'chevrolet',
        id
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