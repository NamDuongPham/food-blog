import { useTitle } from "../../hooks/useTitle";
import PostList from "./components/PostList/PostList";

function Blog() {
  useTitle("Blog")
  return (
    <div>
      <PostList />
    </div>
  );
}

export default Blog;
