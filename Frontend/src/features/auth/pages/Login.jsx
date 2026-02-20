import { useState } from "react";
import { Link } from "react-router";
import "../styles/form.scss"
import { useAuth } from "../hooks/useAuth.js";


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin, loading } = useAuth()
    
    function submitHandler(e){

        e.preventDefault();

        handleLogin(username, password)
        .then((res)=>{
            console.log(res);
        })
    }


    if(loading){
        return <h1>Loading..!!</h1>
    }
    
    return (

        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Username" />
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                    <button>Login</button>
                </form>
                <p>don't have an account? <Link className="link" to="/register">Register</Link></p>
            </div>
        </main>

    )
}

export default Login
