import AppRoutes from "./AppRoutes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import "./features/style.scss"

function App() {


  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
