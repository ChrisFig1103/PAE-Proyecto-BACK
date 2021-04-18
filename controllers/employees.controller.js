const employeesCtrl = {}

const Employee = require('../models/Employee');

employeesCtrl.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees);
}
employeesCtrl.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save()
    res.send({message:"Employee created"})
}
employeesCtrl.getEmployee = async(req,res) => {
    const employee= await Employee.findOne({_id:req.params.id})
    res.send(employee);
}
employeesCtrl.editEmployee = async(req,res) => {
   await Employee.findByIdAndUpdate(req.params.id,req.body);
   res.json({status:'Employee Updated'});

}
employeesCtrl.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status:'Employee Deleted'});  
}

module.exports = employeesCtrl ;