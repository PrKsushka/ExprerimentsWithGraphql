import Users from "../resolvers/module/users.js";

const root = {
    getAllUsers: () => Users.users(),
    getUser: ({id}) => Users.user(id),
    createUser: ({input})=> Users.createUser(input)
}
export default root;