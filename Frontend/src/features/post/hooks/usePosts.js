import { useContext } from "react";
import { PostContext } from "../post.context.jsx"
import { getFeed } from "../services/post.api.js"

export function usePosts() {

    const { loading, post, feed, setLoading, setPost, setFeed } = useContext(PostContext);

    async function handleGetFeed() {
        
        setLoading(true)
        const data = await getFeed()
        setFeed(data.allPosts)
        setLoading(false)

    }

    return {loading, feed, post, handleGetFeed}
}

