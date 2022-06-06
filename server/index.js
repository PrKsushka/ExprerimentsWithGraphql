import express from 'express';
import cors from 'cors';
import {ApolloServer} from "apollo-server-express";
import resolvers from "./resolvers/module/users.js";
import userSchema from "./schema/module/userSchema.js";
import combineSchema from "./schema/schema.js";

const app = express();

app.use(cors());
// app.use('/graphql', graphqlHTTP({
//     graphiql: true,
//     schema: schema,
//     rootValue: root
// }))
const server = new ApolloServer({
    introspection: true,
    schema: combineSchema
    // typeDefs: userSchema,
    // resolvers: resolvers
})

server.start().then((res) => {
    server.applyMiddleware({app});

    app.listen({port: 3001}, () => {
        console.log('Port is listening on the port 3001');
    })
})