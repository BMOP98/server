const { Router } = require('express');
const router = new Router();
const { mongoose } = require('mongoose')
const db = mongoose.connection;
const ObjectId = require('mongodb').ObjectId;
//const { encrypt, decrypt } = require('../ApiSeguridad/crypto')

router.post('/registro', async (req, res) => {
    const { nombre, apellido, correo, contraseña } = req.body;
  try {
    const nuevoUsuario = new User({ Nombre: nombre, Apellido: apellido, mail: correo, password: contraseña });
    await nuevoUsuario.save();
    res.json("Se insertó con éxito");
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

router.get('/registro/:username/:password', async (req, res) => {
    const { username, password } = req.params;
  try{
    const usuario = await User.findOne({ mail: username, password: password });
    if (usuario) {
      res.json({ mensaje: 'Usuario autenticado correctamente', usuario: usuario });
    } else {
      res.json({ mensaje: 'Credenciales incorrectas' });
    }
  }catch (error){
    console.error('Error al verificar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});


router.get('/datos/:id', async (req, res) => {
    const { id } = req.params;
  try{
    const usuario = await User.findById(id);
    res.json(usuario);
  }catch (error){
    console.error('Error al verificar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});


module.exports = router;