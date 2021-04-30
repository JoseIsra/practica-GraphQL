
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    dni:String,
    name:String,
    lastname:String,
    phone:String
},{strict:false})

const Student = mongoose.model('Student',studentSchema)
module.exports = Student;