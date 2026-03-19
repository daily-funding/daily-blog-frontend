/* eslint-disable @next/next/no-img-element */
"use client";

import useEmblaCarousel from "embla-carousel-react";
import "./topCarousel.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TopPost } from "@/src/types/post";

const mockPosts: TopPost[] = [
  {
    post_id: 1,
    title: "데일리펀딩 블로그에 오신 것을 환영합니다 환영 환영 환영묵",
    subtitle: "현재 게시물이 없어 임시 목업 데이터를 표시하고 있습니다.",
    preview_image: "/carousel/sample-image.jpg",
    category_name: "데일리 랩스",
  },
  {
    post_id: 2,
    title: "데일리펀딩 블로그에 오신 것을 환영합니다 환영 환영 환영묵",
    subtitle: "현재 게시물이 없어 임시 목업 데이터를 표시하고 있습니다.",
    preview_image: "/carousel/sample-image.jpg",
    category_name: "데일리 랩스",
  },
];

export default function TopCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [posts, setPosts] = useState<TopPost[]>([]);
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

  useEffect(() => {
    const fetchTopPosts = async () => {
      const response = await fetch("/api/top-posts");
      const data = await response.json();
      console.log("topPosts:", data);

      if (!data.posts || data.posts.length === 0) {
        setPosts(mockPosts);
      } else {
        setPosts(data.posts);
      }
    };

    fetchTopPosts();
  }, []);

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
