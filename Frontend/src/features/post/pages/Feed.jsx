import { useEffect } from "react";
import { usePosts } from "../hooks/usePosts.js";
import Post from "../components/Post.jsx";
import Follows from "../components/Follows.jsx"
import "../style/feed.scss"

const Feed = () => {

  const { loading, feed, post, handleGetFeed } = usePosts();

  useEffect(() => {
    handleGetFeed()

  }, [])

  if (loading || !feed) {
    return <main><h1>Loading....</h1></main>
  }

  console.log(feed);
  
  return (
    <main>
      <div className="feed-page">
        <Follows />
        <div className="feed">
          <div className="posts">
              {feed.map((post)=>{
                console.log(post);
                
               return <Post post={post} />
              })}
          </div>
        </div>
      </div>
    </main>

  )
}

export default Feed
