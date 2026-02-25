import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'

const Register = () => {

  const { registerHandler, loading } = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();


  if (loading) {
    return <main><h1>loading....</h1></main>
  }

  const submitHandler = async (e)=>{

    e.preventDefault();
    await registerHandler(username, email, password);

    navigate("/");
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
          <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Register</button>
        </form>
        <p>Already have an account? <Link to={'/login'}>Login.</Link></p>
      </div>
    </main>
  )
}

export default Register
