const thecourses = require('../utils/courses');
const  operations  = require('../controllers/operation');
const mutation = require('./mutations');
const types = require('./types');



module.exports = {
    Level:{
        principiante:0,
        intermedio:1,
        avanzado:2,
    },
    Query:{
        getCourses:()=>operations.seeData(),
        temasTotales:(root,args)=> args.num*20,
        getOneCourse:(root,args)=>operations.getOneCourse(args.num),
        knowComments:()=> thecourses.reduce((total,item)=>total+item.comments,0),
        orderCourses:()=> thecourses.sort((a,b)=>b.comments - a.comments),
        getPeople:()=>operations.seeStudents(),
        getPerson:(root,args)=>operations.getHuman(args.id),
        // searchItems:(root, {keyword})=>operations.doGlobalSearch(keyword)
    },
    Mutation:mutation,
    ...types

}