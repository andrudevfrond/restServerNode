const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuarioDelete, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuarioDelete);
router.patch('/', usuariosPatch);

module.exports = router;