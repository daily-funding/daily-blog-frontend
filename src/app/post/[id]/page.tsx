import { API_URLS } from "@/src/constants/api";
import TopPost from "./components/topPost";
import PostContent from "./components/postContent";
import "./style.css";
import DailyTogether from "./components/dailyTogether";
import AnotherInsight from "./components/anotherInsight";
import { Suspense } from "react";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const url = `${API_URLS.posts}${id}`;

  console.log("[PostDetail] request url:", url);

  const response = await fetch(url, { cache: "no-store" });

  console.log("[PostDetail] status:", response.status);
  console.log("[PostDetail] content-type:", response.headers.get("content-type"));

  const rawText = await response.text();
  console.log("[PostDetail] raw body:", rawText.slice(0, 300));

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`);
  }

  const post = JSON.parse(rawText);

  return (
    <div className="postPage">
      <TopPost post={post} />
      <PostContent content={post.content} />
      <DailyTogether />
      <Suspense fallback={null}>
        <AnotherInsight id={id} />
      </Suspense>
    </div>
  );
}
