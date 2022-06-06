import {gql} from "apollo-server-express";


const userSchema = gql
    `type User {
        id: ID,
        username: String,
        age: Int,
       
    }
    input UserInput {
        id: ID,
        username: String!,
        age: Int!,
       
    }
    type Query {
        getAllUsers: [User],
        getUser(id:ID): User
    }
    type Mutation {
        createUser(username: String!, age: Int!): User!
    }
`
export default userSchema;