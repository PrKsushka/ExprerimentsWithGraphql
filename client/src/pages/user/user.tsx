import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "../../query/getAllUsers";
import React, {useEffect, useState} from "react";
import {CREATE_NEW_USER} from "../../mutations/createNewUser";
import Preloader from "../../components/preloader/preloader";

type User = {
    id?: string;
    username?: string;
    age?: string;
}
const User: React.FunctionComponent = () => {
    const {data, loading, error} = useQuery(GET_ALL_USERS);
    const [users, setUsers] = useState<Array<User>>([]);
    const [form, setForm] = useState({});
    const [newUser] = useMutation(CREATE_NEW_USER);

    useEffect(() => {
        if (!loading) {
            setUsers([...data.getAllUsers])
        }
    }, [data])
    const changeData = (e: any) => {
        setForm((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const user = form as User;
        newUser({
            variables: {
                username: user.username,
                age: Number(user.age)
            }
        }).then((res) => {
            setUsers((prevState: Array<User>) => [...prevState, res.data.createUser])
        })

    }
    if (loading) {
        return <Preloader/>
    }
    if (error) {
        return <div>{String(error)}</div>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={changeData} name='username'/>
                <input type="text" onChange={changeData} name='age'/>
                <button type="submit">Submit</button>
            </form>
            {(users) ?
                users.map((el) => (
                    <div key={Number(el.id)}>
                        <p>{el.username}</p>
                        <p>{el.age}</p>
                    </div>
                )) : null
            }
        </div>
    )
}
export default User;