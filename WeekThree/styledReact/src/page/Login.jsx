import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiFacade.js";

export const Login = ({setCurrentUser, currentUser}) => {
    const [user, setUser] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        attemptLogin();
    }

    const attemptLogin = async () => {
        try {
            await login(user.username, user.password, (data) => setCurrentUser(data));
            setUser({username: "", password: ""})
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser])

    return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={user.username} onChange={handleOnChange}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={user.password} onChange={handleOnChange} />
            </label>
            <button type="submit">Login</button>
        </form>
        <button onClick={() => navigate("/register")}>Register</button>
    </>
    )
}
