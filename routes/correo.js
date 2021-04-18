const express = require('express');
const router = express.Router();
const configMensaje = require('./../functions/configMensaje');

router.post('/', (req, res) => {
    
    let correo=req.body.correo
    let codigo=req.body.codigo
    let id=req.body.id.toString()
    let formulario={
        correo,codigo,id        
    }
    console.log(formulario)
    
    configMensaje(formulario);
    res.status(200).send("Mensaje enviado correctamente");
   })


module.exports = router;