import { useState } from 'react'
import { Link } from 'react-router'
import axios from "axios"

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function submitHandler(e){

        e.preventDefault();

        axios.post("http://localhost:3000/api/auth/register", {username, email, password}, {withCredentials: true})
        .then((res)=>{
            console.log(res.data);
        })
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Username" />
                    <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="password" />
                    <button type='submit'>Register</button>
                </form>
                <p>already have an account? <Link className="link" to="/login">SignIn</Link></p>
            </div>
        </main>
    )
}

//  function Register(){
//     return <h1>hi</h1>
// }

export default Register
