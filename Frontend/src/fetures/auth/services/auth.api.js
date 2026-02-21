import axios from "axios";

const api = axios.create({
    baseUrl: "http://localhost:3000/api/auth",
    withCredentials: true
})


export async function login(username, password){

    try{
        const resposnse = await api.post("/login", {username, password});
        return resposnse.data;

    }catch(err){
        throw err
    }

}

export async function register(username, email, password){

    try {
        
        const resposnse = await api.post("/login", {username, email, password});
        return resposnse.data;
    } catch (err) {

        throw err
    }
}

export async function getMe(){
    try {
        
        const response = await api.get("/get-me");
        return response.data;
    } catch (err) {
     
        throw err
    }
}