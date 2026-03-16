import PostItem from "./postItem";
import { mockPostsResponse } from "../../../data/mockPosts";

export default function PostList() {
  const posts = mockPostsResponse.results;

  return (
    <div className="postListSection">
      {posts.map((post) => (
        <PostItem key={post.post_id} post={post} />
      ))}
    </div>
  );
}
