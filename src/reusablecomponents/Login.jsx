import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../features/login/loginSlice";


const Login = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const users = useSelector(state => state.users)

    const addUserHandler = (e) => {
        e.preventDefault()
        dispatch(addUser(input))
        setInput('')
    }

    return (
        <>
        <form onSubmit={addUserHandler}>
            <input type="text" placeholder="Enter username" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">click</button>
            
        </form>
        <ul>{users.map((user) => (
            <li key={user.id}>
                <div>{user.text}</div>
                <button onClick={() => dispatch(removeUser(user.id))}>remove</button>
            </li>

        ))} </ul>
        </>
    );
}
export default Login;