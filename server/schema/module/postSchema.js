import {buildSchema} from "graphql";
import {makeExecutableSchema} from "@graphql-tools/schema";

const postSchema =
    `input PostInput {
        id: ID,
        title: String!,
        content: String!
    }
    type Post {
        id: ID,
        title: String,
        content: String
    }
`
export default postSchema;