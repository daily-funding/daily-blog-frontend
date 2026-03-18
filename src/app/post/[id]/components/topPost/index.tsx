/* eslint-disable @next/next/no-img-element */
"use client";

import "./style.css";
import { TopPostProps } from "@/src/types/post";

export default function TopPost({ post } : TopPostProps) {
  return (
    <div className="topPost">
      <div className="topPostTrack">
        <div className="topPostSlide">
          <img src={post.preview_image} alt="" />
          <div className="topPostTextSection">
            <p className="category_badge">{post.category_name}</p>
            <h1 className="title">{post.title}</h1>
            <p className="subtitle">{post.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="topPostLogo">
        <img src="/post/daily-funding-logo.png" alt="" />
      </div>
    </div>
  );
}
