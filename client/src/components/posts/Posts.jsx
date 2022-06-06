import "./posts.css";
import Post from "../post/Post";

    export default function Posts({ posts }) {
        return (
          <div key={posts._id} className="posts">
              {posts.map((p) => (
              <Post post={p} />
              ))}
          </div>
        );
}