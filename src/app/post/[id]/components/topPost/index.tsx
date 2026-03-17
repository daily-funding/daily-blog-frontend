"use client";

import "./style.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DetailTopPost } from "@/src/types/post";
import { mockDetailPost } from "@/src/data/mockDetailPost";

export default function TopPost() {
  const [posts, setPosts] = useState<DetailTopPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTopPosts = async () => {
      const response = await fetch("/api/top-posts");
      const data = await response.json();
      console.log("topPosts:", data);

      if (!data.posts || data.posts.length === 0) {
        setPosts(mockDetailPost.posts);
      } else {
        setPosts(data.posts);
      }
    };

    fetchTopPosts();
  }, []);

  return (
    <div className="topCarousel">
      <div className="topCarouselTrack">
        {posts.map((post) => (
          <div className="topCarouselSlide" key={post.post_id}>
            <img src={post.preview_image} alt="" />
            <div className="topCarouselTextSection">
              <p className="category_badge">{post.category.name}</p>
              <button
                type="button"
                className="topCarouselPostLink"
                onClick={() => {
                  router.push(`/post/${post.post_id}`);
                }}
              >
                <h1 className="title">{post.title}</h1>
                <p className="subtitle">{post.subtitle}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="topCarouselIndicator">
        <img src="/daily-funding-logo.png" alt="" />
      </div>
    </div>
  );
}
