import { use, useEffect } from "react";
import { usePosts } from "../hooks/usePosts.js";
import Post from "../components/Post.jsx";

const Feed = () => {

  const { loading, feed, post, handleGetFeed } = usePosts();

  useEffect(() => {
    handleGetFeed()

  }, [])

  if (loading || !feed) {
    return <main><h1>Loading....</h1></main>
  }

  return (
    <main>
      <div className="feed-page">
        <div className="feed">
          <div className="posts">
              {feed.map((post)=>{
                <Post />
              })}
          </div>
        </div>
      </div>
    </main>

  )
}

export default Feed
