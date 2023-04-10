import { Link } from "react-router-dom";
import { PostType } from "../types/postType";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-col items-center">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link to={`/user/${post.id}`}>
        <span>{post.user?.username}</span>
      </Link>
    </div>
  );
};

export default Post;
