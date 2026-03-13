/* eslint-disable @next/next/no-img-element */
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { mockTopPosts } from "../data/mockTopPosts";
import "./topCarousel.css";
import { useState } from "react";

function getTopPosts() {
  return mockTopPosts;
}

export default function TopCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const data = getTopPosts();
  const mockPost = data.posts;
  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <div className="topCarousel" ref={emblaRef}>
      <div className="topCarouselTrack">
        {mockPost.map((post) => (
          <div className="topCarouselSlide" key={post.post_id}>
            <img src={post.preview_image} alt="" />
            <div className="topCarouselTextSection">
              <p className="category_badge">{post.category_name}</p>
              <h1 className="title">{post.title}</h1>
              <p className="subtitle">{post.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//TODO:- 너 carousel 구현 시작하고 있었고 header 부분이 구분되어 있길래 이걸 어떻게 해야 위에 얹을 수 있나 고민중이었다
//TODO:- 그리고 지금 당장은 mock data에서 데이터 뽑아와서 사진 1개만 띄워보는거 했던거임 ㅇㅋ?
