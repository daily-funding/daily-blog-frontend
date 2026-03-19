import CategoryButton from "./components/categoryButton";
import TopCarousel from "./components/topCarousel";
import UpButton from "../../components/upButton";
import "./home.css";
import PostList from "./components/post/postList";
import { Suspense } from "react";

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
