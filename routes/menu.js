const express = require('express');
const router = express.Router();
const PlatilloSchema = require('../DB/platillos');
const mongoose = require('mongoose');
const MesaSchema = require('../db/mesa');
const NotificationSchema = require('../DB/notification');




router.get("/",(req,res)=>{
    let platos= mongoose.model('platillos',PlatilloSchema);
    let id=req.query.id

    platos.find({}).lean().then(platillo=>{
        platos.findOne({id}).lean().then(platilloSelected=>{
            res.send(platillo)
        })
    })
})

router.post("/pedido",(req,res)=>{
    let cantidad=req.body.amount
    let platillo=req.body.name
    let mesa=req.body.table
    let precio=req.body.price
    let pedidoHecho={
        cantidad,
        platillo,
        mesa,
        precio,
        tomado:0
    }


    MesaSchema.findOneAndUpdate({id:mesa},{$push:{pedido:pedidoHecho}},{
        new:true
    }).then(e=>{
        console.log("Pedido agregado")
        res.send("Done")
    })
    
    
    
    
    
    
    //table.update({nombre:mesa},{nombre:"Holaaaaa"})
    //console.log(update) {$push:{pedidos:platillo}}

    
})

router.get("/pedido/:id",(req,res)=>{
    let pedidos=[]
    let id=req.params.id
    //console.log("el ID es" +id)
    MesaSchema.findOne({id:id}).lean().then(e=>{
        //console.log(e.pedido)
        pedidos=e.pedido
        res.send(pedidos)
    })
    
})





router.get("/validate/:id/:mesa",async(req,res)=>{
    let contra=req.params.id
    let mesa=req.params.mesa
    if(contra){
        
        let resp= await MesaSchema.findOne({id:mesa,codigo:contra}).lean()
            if(resp){
                console.log(resp)
                res.send("pasa").status(201)
            }else{
                res.send(null)
            }
        
    }
    
})

router.get("/verify/:id/:mesa", (req, res) => {
    
    let contra = req.params.id
    let mesa = req.params.mesa
    if (mesa && contra) {
        MesaSchema.findOne({ id: mesa,codigo: contra, activo: true }).then(e => {
            if (e) {
                res.send("true")
            } else {
                res.send(null)
            }

        })
    }else{
        res.send(null)
    }
    

})


module.exports = router;