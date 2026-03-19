import CategoryButton from "./components/categoryButton";
import TopCarousel from "./components/topCarousel";
import UpButton from "../../components/upButton";
import "./home.css";
import PostList from "./components/post/postList";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "데일리펀딩의 특별한 블로그, 데일리 인사이트",
};

export default function Home() {
  return (
    <div className="home">
      <TopCarousel />
      <div className="postSection">
        <Suspense fallback={null}>
          <CategoryButton />
        </Suspense>
        <Suspense fallback={null}>
          <PostList />
        </Suspense>
      </div>
      <UpButton />
    </div>
  );
}
