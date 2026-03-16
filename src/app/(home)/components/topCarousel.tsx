/* eslint-disable @next/next/no-img-element */
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { mockTopPosts } from "@/src/data/mockTopPosts";
import "./topCarousel.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function getTopPosts() {
  return mockTopPosts;
}

export default function TopCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const data = getTopPosts();
  const posts = data.posts;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!emblaApi) return;

    const updateIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateIndex();

    emblaApi.on("select", updateIndex);

    return () => {
      emblaApi.off("select", updateIndex);
    };
  }, [emblaApi]);

  //MARK:- 나중에 지우기 (index 보기용 로그)
  console.log("currentPageIndex:", selectedIndex);

  return (
    <div className="topCarousel" ref={emblaRef}>
      <div className="topCarouselTrack">
        {posts.map((post) => (
          <div className="topCarouselSlide" key={post.post_id}>
            <img src={post.preview_image} alt="" />
            <div className="topCarouselTextSection">
              <p className="category_badge">{post.category_name}</p>
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
        {posts.map((_, index) => (
          <button
            className={index === selectedIndex ? "active" : ""}
            key={index}
            onClick={() => {
              if (!emblaApi) return;
              emblaApi.scrollTo(index);
            }}
          />
        ))}
      </div>
      <div className="topCarouselNavButton">
        <button
          onClick={() => {
            if (!emblaApi) return;
            emblaApi.scrollPrev();
          }}
        >
          <img src="/carousel/carousel-prev-button.png" alt="이전 게시물" />
        </button>
        <button
          onClick={() => {
            if (!emblaApi) return;
            emblaApi.scrollNext();
          }}
        >
          <img src="/carousel/carousel-next-button.png" alt="다음 게시물" />
        </button>
      </div>
    </div>
  );
}
