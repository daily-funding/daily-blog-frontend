import CategoryButton from "@/src/components/categoryButton";
import TopCarousel from "@/src/components/topCarousel";
import UpButton from "@/src/components/upButton";
import "./home.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="home">
      <TopCarousel />
      <div className="postSection">
        <Suspense fallback={null}>
          <CategoryButton />
        </Suspense>
      </div>
      <UpButton />
    </div>
  );
}
