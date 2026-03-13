/* eslint-disable @next/next/no-img-element */
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { mockTopPosts } from "../data/mockTopPosts";
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
              <div
                onClick={() => {
                  router.push(`/post/${post.post_id}`);
                }}
              >
                <h1 className="title">{post.title}</h1>
                <p className="subtitle">{post.subtitle}</p>
              </div>
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

//TODO:- 너 carousel 구현 시작하고 있었고 header 부분이 구분되어 있길래 이걸 어떻게 해야 위에 얹을 수 있나 고민중이었다
//TODO:- 그리고 지금 당장은 mock data에서 데이터 뽑아와서 사진 1개만 띄워보는거 했던거임 ㅇㅋ?
