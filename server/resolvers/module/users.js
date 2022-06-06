const users = [
    {
        id: '1',
        username: 'Ksushka',
        age: 21
    },
    {
        id: '2',
        username: 'Kate',
        age: 30
    },
    {
        id: '3',
        username: 'Sasha',
        age: 24
    }
]

class Users {
    static users() {
        return users
    }

    static user(id) {
        return users.find((el) => el.id === id)
    }

    static createUser(user) {
        return users.push({...user})
    }
}

const userResolver = {
    Query: {
        getAllUsers() {
            return users
        },
        getUser(parent, args) {
            return users.find((el) => el.id === args.id)
        }
    },
    Mutation: {
        createUser(parent, args) {
            const newUser = {id: String(Date.now()), ...args};
            console.log(newUser)
            users.push(newUser);
            return newUser;
        }
    }
}
export default userResolver;