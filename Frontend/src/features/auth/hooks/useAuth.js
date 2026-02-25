import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, register } from "../services/auth.api.js";


export function useAuth() {

    const authContext = useContext(AuthContext);
    const { loading, setLoading, user, setUser } = authContext

    const loginHandler = async (username, password) => {

        setLoading(true)
        const response = await login(username, password);
        
        setUser(response.user);
        setLoading(false)
    }

    const registerHandler = async (username, email, password) => {

        setLoading(true);
        const response = await register(username, email, password);
        setUser(response.user)
        setLoading(false);
    }


    return { loading, user, loginHandler, registerHandler };
}
