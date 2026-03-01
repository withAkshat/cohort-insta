import  { Routes, Route, BrowserRouter } from "react-router"
import Login from "./features/auth/pages/Login.jsx"
import Register from "./features/auth/pages/Register.jsx"
import CreatePost from "./features/post/pages/CreatePost.jsx"
import Feed from "./features/post/pages/Feed.jsx"
import Nav from "./features/shared/components/Nav.jsx"

function AppRoutes() {
    return (
        <BrowserRouter>
        <Nav />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </BrowserRouter>        
    )
}

export default AppRoutes