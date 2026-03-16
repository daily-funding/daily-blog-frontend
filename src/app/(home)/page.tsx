import CategoryButton from "@/src/app/(home)/components/categoryButton";
import TopCarousel from "./components/topCarousel";
import UpButton from "@/src/components/upButton";
import "./home.css";
import PostItem from "./components/postItem";
import PostList from "./components/postList";

export default function Home() {
  return (
    <div className="home">
      <TopCarousel />
      <div className="postSection">
        <CategoryButton />
        <PostList />
      </div>
      <UpButton />
    </div>
  );
}
