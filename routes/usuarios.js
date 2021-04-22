const { Router } = require('express');
const { check } = require('express-validator');
const { 
    usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuarioDelete, 
    usuariosPatch } = require('../controllers/usuarios');
const { validarRole, siExisteEmail } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet );
router.put('/:id', usuariosPut);
router.post('/',[
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom( siExisteEmail),
    check('nombre', 'El nombre debe ser obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mas de 6 caracteres').isLength({min: 6}),
    //check('rol', 'El rol no es válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(validarRole),
    validarCampos,
], usuariosPost);
router.delete('/', usuarioDelete);
router.patch('/', usuariosPatch);

module.exports = router;

