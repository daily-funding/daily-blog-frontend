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
  params: { id: string };
}) {
  const { id } = params;
  const response = await fetch(`${API_URLS.posts}${id}`, {
    cache: "no-store",
  });

  return <div>status: {response.status}</div>;
}
