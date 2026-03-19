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
  params: { id: string }; //Next가 page를 streaming & async rendering으로 처리한다. page가 async server component일 수 있기 때문에 params를 Promise로 전달한다.
}) {
  const { id } = params;

    const url = `${API_URLS.posts}${id}/`;
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

  let post;
  try {
    post = JSON.parse(rawText);
  } catch (e) {
    return (
      <div style={{ padding: "24px", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        <h1>JSON parse error</h1>
        <p>url: {url}</p>
        <p>content-type: {contentType}</p>
        <h2>body</h2>
        <pre>{rawText.slice(0, 2000)}</pre>
      </div>
    );
  }

  console.log(post);

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
