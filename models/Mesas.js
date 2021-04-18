const { Schema,model } = require('mongoose');


mesaSchema = new Schema({
    nombre: {type:String,required:true},
    id: {type:String,required:true},
    activo: {type:Number,required:true},
},{
    timestamp:true,
    versionKey:false
})

module.exports = model('mesa',mesaSchema);


