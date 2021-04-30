    const Course = require('../models/course');
    const Student = require('../models/student');
const errorHandler = require('../utils/errorHandler');
    

module.exports= {
    createCourse:async(root, {input})=>{
        try{
            let newCourse = await Course.create(input);
            console.log("documento creado exitosamente...")
            return newCourse;
        }catch(error){
            errorHandler(error)
        }
    },
    deleteCourse : async(root, { _id })=>{
        try {
            await Course.findByIdAndRemove(_id);
            console.log("documento borrado");
            let docs = await Course.find();
            return docs;

        } catch (error) {
            errorHandler(error)
        }
    },
    updateCourse: async(root ,{_id, input})=>{
        try {
            let newCourse = await Course.findByIdAndUpdate(_id, input,{new:true});
            console.log("Doc actualizado...")
            return newCourse;

        } catch (error) {
            errorHandler(error)
        }
    },
    makePerson:async(root, { input })=>{
        try{
            let newStudent = await Student.create(input);
            console.log("student created...")
            return newStudent;
        }catch(error){
            errorHandler(error)
        }
    },
    addHumans:async(root ,{courseID,personID})=>{
            try {
                let thecourse = await Course.update({_id:courseID},{$addToSet: { people: personID}}, {new:true});
                console.log("se agregó alumno a curso");
                return thecourse;
            } catch (error) {
                errorHandler(error.message)
            }
    }

}