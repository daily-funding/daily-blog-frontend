/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { mockPostsResponse } from "../../../data/mockPosts";
import "./postList.css"

export default function PostItem() {
  const posts = mockPostsResponse.results;

  return (
    <div className="article_item">
      <img
        src={posts[0].preview_image}
        alt=""
      />
      <div className="post_info">
        <div className="articleCategoryBadge">
            {posts[0].category_name}
        </div>
        <p className="postInfoTitle">
            {posts[0].title}
        </p>
        <p className="postInfoDescription">
            {posts[0].description}
        </p>
        <p className="postInfoMoreButton">
            {"MORE >"}
        </p>
      </div>
    </div>
  );
}
