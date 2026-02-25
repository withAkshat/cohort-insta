import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth.js"
import "../styles/form.scss"


const Login = () => {
    const { loginHandler, user } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = async (e)=>{
        e.preventDefault();

        await loginHandler(username, password);
        console.log(user);
        
        navigate("/");
    }


    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='username' onChange={(e)=> setUsername(e.target.value)} />
                    <input type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>
                <p>Don't have an account? <Link to={'/register'}>Sign Up.</Link></p>
            </div>
        </main>
    )
}

export default Login
