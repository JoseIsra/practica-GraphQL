const mongoose = require('mongoose');

const DB_URL= "mongodb+srv://israelenlaconsola:programañdomongito@cluster0.api2z.mongodb.net/graphql-practice";

mongoose.connect(DB_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true
    })
    .then(()=>console.log("DB CONECTADA..."))
    .catch(error => console.error(error))