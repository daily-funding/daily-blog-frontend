import { API_URLS } from "@/src/constants/api";
import TopPost from "./components/topPost";
import PostContent from "./components/postContent";
import "./style.css";
import DailyTogether from "./components/dailyTogether";
import AnotherInsight from "./components/anotherInsight";
import { Suspense } from "react";
import { Metadata } from "next";

async function getPost(id: string) {
  const response = await fetch(`${API_URLS.posts}${id}/`, {
    cache: "no-cache"
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`);
  }

  return response.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
  };
}

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>; //Next가 page를 streaming & async rendering으로 처리한다. page가 async server component일 수 있기 때문에 params를 Promise로 전달한다.
}) {
  const { id } = await params;

  const post = await getPost(id);

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
