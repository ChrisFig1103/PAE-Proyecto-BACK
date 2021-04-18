const mongoose = require('./mongo');
const shortid=require('shortid')
const {
    mongo
} = require('mongoose')

const MesaSchema = mongoose.Schema({
  id:{
    type:Number
  },
  nombre:{
    type:String,

  },
  activo:{
    type:Boolean,
  },
  codigo:{
    type:String
  },
  pedido:[{
        platillo: String,
        cantidad:Number,
        precio:Number,
        mesa:String,
        tomado:Number
    }] 
  
})
MesaSchema.statics.ocuparMesaVacia = async ()=>{
  let codigo=shortid.generate();

  let x=await Mesa.findOne({activo:false}).lean();
  
  if(!x){
    return null
  }
  x.activo=true;
  x.codigo=codigo

  let updated ={}
    try {
      updated = await Mesa.findByIdAndUpdate(
            x._id, 
            {$set: x},
            {new: true, useFindAndModify: false}
          );
    } catch (error) {
        console.log(error)
    }

  
  return updated;
}

MesaSchema.statics.liberarMesa=async(id)=>{
  console.log(id)
  let x=await Mesa.findOne({id:id}).lean();
  console.log(x)
  x.codigo="Libre";
  x.activo=false;
  x.pedido=[];
  let updated ={}
  try {
    updated = await Mesa.findByIdAndUpdate(
          x._id, 
          {$set: x},
          {new: true, useFindAndModify: false}
        );
  } catch (error) {
      console.log(error)
  }
return updated;

}

module.exports = Mesa = mongoose.model('mesas', MesaSchema);