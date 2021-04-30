
const Student = require('../models/student');



module.exports = {
    Course:{
        people: async (root,args)=>{
            try {
                
                let datashow = root.people.length>0 ? await Student.find({_id:{$in:root.people}}):[]
                console.log(root)
                return datashow;
                
            } catch (error) {
                console.error(error)
            }
        }
    },
    Person:{
        __resolveType:(person,context,info)=>{
            console.log(person)
            if(person.phone){
                return 'Monitor'
            }
            
            return 'Student'
        }
    }
}