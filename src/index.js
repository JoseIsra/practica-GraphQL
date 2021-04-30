const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');
require('./db/dbconfig')
const app = express();

const typeDefs = readFileSync(join(__dirname,'lib','schema.graphql'),'utf-8')
const schema = makeExecutableSchema({typeDefs, resolvers})

// the root proporciona una función resolvedora para cada 
// end point


//ejecutando el query de graphql, indicand oel esquema y los queys que wa a ejecutar
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:resolvers,
    graphiql:true
}));


app.listen(8080, ()=>console.log("Server en línea http://localhost:8080/graphql"))
