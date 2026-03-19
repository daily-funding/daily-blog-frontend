/* eslint-disable @next/next/no-img-element */
"use client";

import "./postList.css";
import { Post } from "@/src/types/post";
import { useRouter } from "next/navigation";

type PostItemProps = {
  post: Post;
};

export default function PostItem({ post }: PostItemProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/post/${post.post_id}`);
  };

  return (
    <div className="article_item">
      <img src={post.preview_image} alt="" onClick={onClick} />
      <div className="post_info">
        <div className="articleCategoryBadge">{post.category_name}</div>
        <p className="postInfoTitle" onClick={onClick}>
          {post.title}
        </p>
        <p className="postInfoDescription">{post.description}</p>
        <p className="postInfoMoreButton" onClick={onClick}>
          {"MORE >"}
        </p>
      </div>
    </div>
  );
}
