const cocinerosCtrl = {}
 
const Cocinero = require('../models/Cocineros');

cocinerosCtrl.getCocineros = async (req,res) =>{
    const cocineros = await Cocinero.find();
    res.json(cocineros);
}

cocinerosCtrl.createCocinero = async (req,res) =>{
    const newCocinero = new Cocinero(req.body);
    await newCocinero.save();
    res.send({messaage:'Cocinero created'});
}
 
cocinerosCtrl.getCocinero = async (req,res) =>{
    const cocinero = await Cocinero.findOne({_id:req.params.id});
    res.send(cocinero);
}
 
cocinerosCtrl.editCocinero  = async (req,res) =>{
    await Cocinero.findByIdAndUpdate(req.params.id,req.body);
    res.json({status:'Cocinero Updated'});
}
 
cocinerosCtrl.deleteCocinero = async (req,res) =>{
    await Cocinero.findByIdAndDelete(req.params.id);
    res.json({status:'Cocinero Deleted'});
}


module.exports = cocinerosCtrl ;