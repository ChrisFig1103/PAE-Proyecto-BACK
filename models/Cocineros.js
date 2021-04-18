const { Schema,model } = require('mongoose');


cocineroSchema = new Schema({
    nombre: {type:String,required:true},
    id: {type:String,required:true},
    sueldo: {type:Number,required:true},
},{
    timestamp:true,
    versionKey:false
})

module.exports = model('cocinero',cocineroSchema);


