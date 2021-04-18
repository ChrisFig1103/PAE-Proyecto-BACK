const mesasCtrl = {}

const Mesa = require('../models/Mesas');
 
mesasCtrl.getMesas = async (req,res) =>{
    const mesas = await Mesa.find();
    res.json(mesas);
}

mesasCtrl.createMesa = async (req,res) =>{
    const newMesa = new Mesa(req.body);
    await newMesa.save();
    res.send({message:'Mesa created'})
}

mesasCtrl.getMesa = async(req,res) =>{
    const mesa = await Mesa.findOne({_id:req.params.id})
    res.send(mesa);
} 

mesasCtrl.editMesa = async(req,res) =>{
    await Mesa.findByIdAndUpdate(req.params.id,req.body);
    res.json({status:'Mesa Updated'});
} 

mesasCtrl.deleteMesa = async(req,res) => {
    await Mesa.findByIdAndDelete(req.params.id);
    res.json({status:'Mesa Deleted'});

}

module.exports = mesasCtrl ;