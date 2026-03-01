import { useContext, useEffect } from "react";
import { PostContext } from "../post.context.jsx"
import { createPost, getFeed, likePost, unLikePost } from "../services/post.api.js"

export function usePosts() {

    const { loading, post, feed, setLoading, setPost, setFeed } = useContext(PostContext);

    async function handleGetFeed() {
        
        setLoading(true)
        const data = await getFeed()
        setFeed(data.allPosts)
        setLoading(false)

    }

    async function handleCreatePost(imageFile, caption){

        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
        setLoading(false)
    }

    async function handleLike(post){
        setLoading(true)
        await likePost(post)
        setLoading(false)
    }
  
    async function handleUnLike(post){
        setLoading(true)
        await unLikePost(post)
        setLoading(false)
    }

    // initial hydration
    useEffect(()=>{
        handleGetFeed();
    }, [])

    return {loading, feed, post, handleGetFeed, handleCreatePost, handleLike, handleUnLike}
}

