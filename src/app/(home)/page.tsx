import CategoryButton from "@/src/app/(home)/components/categoryButton";
import TopCarousel from "./components/topCarousel";
import UpButton from "@/src/components/upButton";
import "./home.css";
import PostItem from "./components/postItem";

export default function Home() {
  return (
    <div className="home">
      <TopCarousel />
      <div className="postSection">
        <CategoryButton />
        <PostItem />
      </div>
      <UpButton />
    </div>
  );
}
