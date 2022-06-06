import {gql} from "@apollo/client";

export const CREATE_NEW_USER = gql`
mutation createUser($username: String!, $age: Int!) {
  createUser(username: $username, age: $age) {
    id
    username
    age
  }
}
`