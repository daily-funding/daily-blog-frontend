import CategoryButton from "@/src/app/(home)/components/categoryButton";
import TopCarousel from "./components/topCarousel";
import UpButton from "@/src/components/upButton";
import "./home.css";
import PostItem from "./components/postItem";
import PostList from "./components/postList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="home">
      <TopCarousel />
      <div className="postSection">
        <Suspense fallback={null}>
          <CategoryButton />
        </Suspense>
        <PostList />
      </div>
      <UpButton />
    </div>
  );
}
