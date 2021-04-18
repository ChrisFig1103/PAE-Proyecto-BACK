const { Schema,model } = require('mongoose');


platilloSchema = new Schema({
    id: {type:Number,required:true},
    description: {type:String,required:true},
    urlImage: {type:String,required:true},
    name: {type:String,required:true},
    price: {type:String,required:true},
},{
    timestamp:true,
    versionKey:false
})

module.exports = model('platillo',platilloSchema);


