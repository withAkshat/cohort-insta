import AppRoutes from "./AppRoutes.jsx"
import AuthProvider from "./features/auth/auth.context.jsx"
import PostContextProvider from "./features/post/post.context.jsx"
import "./features/shared/global.scss"

function App() {


  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRoutes />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
