import { useState, createContext } from "react"


export const PostContext = createContext();

function PostContextProvider({children}){

    const [loading, setLoading] = useState("")
    const [feed, setFeed] = useState("")
    const [post, setPost] = useState("")

    const outValues = {loading, feed, post, setLoading, setFeed, setPost};

    return <PostContext.Provider value={outValues}>
        {children}
    </PostContext.Provider >

}

export default PostContextProvider;