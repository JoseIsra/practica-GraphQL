const mongoose = require('mongoose');

const  courseSchema = new mongoose.Schema({
    title:String,
    teacher:String,
    description:String,
    topic:String,
    comments:Number,
    people:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }]
},{strict:false})

const Course = mongoose.model('Course',courseSchema);

module.exports = Course;

