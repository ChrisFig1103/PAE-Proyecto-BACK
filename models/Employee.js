const { Schema,model } = require('mongoose');

employeeSchema = new Schema({
    id:{type:Number,required:true},
    name: {type:String,required:true},
    lastname: {type:String,required:true},
    position: {type:String,required:true},
    salary: {type:Number,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
},{
    timestamp:true,
    versionKey:false
})

module.exports = model('Employee',employeeSchema);