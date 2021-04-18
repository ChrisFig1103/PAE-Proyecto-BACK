const platillosCtrl = {}

const Platillo = require('../models/Platillos'); 

platillosCtrl.getPlatillos = async (req,res) =>{
    const platillos = await Platillo.find();
    res.json(platillos);
}

platillosCtrl.createPlatillo = async (req,res) =>{
    const newPlatillo = new Platillo(req.body);
    await newPlatillo.save();
    res.send({message:'Platillo created'});

} 
 
platillosCtrl.getPlatillo = async(req,res) =>{
    const platillo = await Platillo.findOne({_id:req.params.id})
    res.send(platillo);
} 

platillosCtrl.editPlatillo = async(req,res) =>{
    await Platillo.findByIdAndUpdate(req.params.id,req.body);
    res.json({status:'Platillo Updated'});
} 

platillosCtrl.deletePlatillo = async(req,res) => {
    await Platillo.findByIdAndDelete(req.params.id);
    res.json({status:'Platillo Deleted'});

}

module.exports = platillosCtrl ;