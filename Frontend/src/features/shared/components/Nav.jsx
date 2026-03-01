import { useNavigate } from "react-router"
import "../nav.scss"

const Nav = () => {

  const navigate = useNavigate();

  return (
    <div>
      <nav className='nav-bar'>
        <p>Insta</p>
        <button
        onClick={()=>navigate("/create-post")}
        className='button primary-button'>Create Post</button>
      </nav>
    </div>
  )
}

export default Nav
