const express = require('express');
const router = express.Router();
const PlatilloSchema = require('../DB/platillos');
const MesaSchema = require('../db/mesa');
router.get("/",async (req,res)=>{
   
    let resp=await MesaSchema.ocuparMesaVacia();
    console.log(resp);
        if(resp){
            res.status(201).send(resp)
        }
        else{
    
            res.status(401).send("Todas las mesas estan ocupadas");
        }
})
router.put("/",async(req,res)=>{
    console.log(req.body);
    let resp=await MesaSchema.liberarMesa(req.body.id);
    
    if(resp){
        res.status(201).send(resp)
    }
    else{
        res.status(401).send("Mesa no existente");
    }
})
module.exports=router;