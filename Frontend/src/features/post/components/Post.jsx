import "../style/post.scss"

const Post = ({ post }) => {
  return (
    <div className='post'>
      <div className="top">

        <div className="profile">
          <div className="img">
            <img src={post.user.profileImage} alt="" />
          </div>
          <p className="name">
            {post.user.username}
          </p>

        </div>
        <div className="img">
          {/* <img src={post.imgUrl} alt="" /> */}
        </div>

      </div>

      <div className="bottom">
        <div className="up">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="down"></div>

      </div>
    </div>
  )
}

export default Post
