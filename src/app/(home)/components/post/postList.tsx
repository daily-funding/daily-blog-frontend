import { PostListResponse } from "@/src/types/post";
import { API_URLS } from "@/src/constants/api";
import PostListClient from "./postListClient";
import { Suspense } from "react";

export default async function PostList() {
  const response = await fetch(API_URLS.posts, {
    next: { revalidate: 60 * 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch post data");
  }

  const data: PostListResponse = await response.json();

  return (
    <Suspense>
      <PostListClient initialData={data} />;
    </Suspense>
  );
}
