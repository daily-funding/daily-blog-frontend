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

  const url = `${API_URLS.posts}${id}/`;

  try {
    const response = await fetch(url, { cache: "no-store" });

    const contentType = response.headers.get("content-type") ?? "unknown";
    const rawText = await response.text();

    if (!response.ok) {
      return (
        <div style={{ padding: "24px", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          <h1>debug</h1>
          <p>id: {id}</p>
          <p>url: {url}</p>
          <p>status: {response.status}</p>
          <p>content-type: {contentType}</p>
          <h2>body</h2>
          <pre>{rawText.slice(0, 2000)}</pre>
        </div>
      );
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
  } catch (error) {
    return (
      <div style={{ padding: "24px", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        <h1>fetch error</h1>
        <p>id: {id}</p>
        <p>url: {url}</p>
        <h2>message</h2>
        <pre>{error instanceof Error ? error.stack ?? error.message : String(error)}</pre>
      </div>
    );
  }
}
