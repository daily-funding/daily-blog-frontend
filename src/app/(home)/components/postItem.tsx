/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "./postList.css";
import { Post } from "@/src/types/post";

type PostItemProps = {
    post: Post;
};

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="article_item">
      <img src={post.preview_image} alt="" />
      <div className="post_info">
        <div className="articleCategoryBadge">{post.category_name}</div>
        <p className="postInfoTitle">{post.title}</p>
        <p className="postInfoDescription">{post.description}</p>
        <p className="postInfoMoreButton">{"MORE >"}</p>
      </div>
    </div>
  );
}
