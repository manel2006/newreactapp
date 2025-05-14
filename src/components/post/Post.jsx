import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";
export default function Post({ post }) {
  const [like,setLike] = useState(post.like);
  const [isliked,setIsLiked] = useState(false);
const likeHandler=()=>{
  setLike(isliked ? like-1 : like+1)
  setIsLiked(!isliked)
}

  
  const user = Users.find((u) => u.id === post.userId);

  
  console.log("Rendering post with photo:", post.photo);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={user?.profilePicture} alt="" />
            <span className="postUsername">{user?.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>

          {post.photo && (
            <img className="postImg" src={post.photo} alt="Post content" />
          )}
        </div>

        <div className="postBottom">
          <div className="postBottonLeft">
            <img
              className="likeIcon"
              src="https://i.postimg.cc/Gm85GFBN/OIP.jpg" onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="https://i.postimg.cc/g2CBDx80/OIP-1.jpg"  onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottonRight" />
          <span className="postCommentText">{post.comments} comments</span>
        </div>
      </div>
    </div>
  );
}