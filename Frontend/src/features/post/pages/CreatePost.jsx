import { useRef, useState } from "react"
import "../style/createPost.scss"
import { usePosts } from "../hooks/usePosts"
import { useNavigate } from "react-router"

const CreatePost = () => {

  const [caption, setCaption] = useState("")
  const { loading, handleCreatePost } = usePosts()
  const postImageInputField = useRef(null)

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = postImageInputField.current.files[0];

    await handleCreatePost(file, caption)
    navigate("/feed");
  }

  if (loading) {
    return <main><h1>Loading...</h1></main>
  }

  return (
    <main className="create-post-page">
      <div className="form-container">

        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <label className="post-image-label" htmlFor="post-image">Select Image</label>
          <input ref={postImageInputField} hidden type="file" name="post-image" id="post-image" />
          <input type="text" onChange={(e) => setCaption(e.target.value)} name="capiton" id="caption" placeholder="Enter Caption" />
          <button className="button primary-button">Create Post</button>
        </form>

      </div>
    </main>
  )
}

export default CreatePost
