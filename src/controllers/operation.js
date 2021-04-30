
const Course = require('../models/course');
const Student = require('../models/student');

module.exports= {
    seeData:async()=>{
            const result = await Course.find();
        
            return result;
    },
    seeStudents:async()=>{
        const result = await Student.find();
        console.log(result)
        return result;
    },
    getOneCourse:async(theid)=>{
        const result = await Course.findById(theid)
        return result
        
    },
    getHuman:async(theid)=>{
            const result =  await Student.findById(theid)
            return result;
    },
    
}
