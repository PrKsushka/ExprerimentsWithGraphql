import userSchema from "./module/userSchema.js";
import postSchema from "./module/postSchema.js";
import {makeExecutableSchema} from "@graphql-tools/schema";
import resolver from "../resolvers/resolver.js";

const combineSchema = makeExecutableSchema({
    typeDefs: [userSchema, postSchema],
    resolvers: resolver
})


export default combineSchema;

