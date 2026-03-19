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
  const url = `${API_URLS.posts}${id}/`;

  let debugInfo: {
    id: string;
    url: string;
    status?: number;
    contentType?: string;
    redirected?: boolean;
    bodyPreview?: string;
    errorMessage?: string;
  } | null = null;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") ?? "unknown";
    const rawBody = await response.text();

    if (!response.ok) {
      debugInfo = {
        id,
        url,
        status: response.status,
        contentType,
        redirected: response.redirected,
        bodyPreview: rawBody.slice(0, 2000),
      };
    } else {
      const post = JSON.parse(rawBody);

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
  } catch (error) {
    debugInfo = {
      id,
      url,
      errorMessage: error instanceof Error ? error.stack ?? error.message : String(error),
    };
  }

  return (
    <div style={{ padding: "24px", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
      <h1>post detail debug</h1>
      <p>id: {debugInfo?.id}</p>
      <p>url: {debugInfo?.url}</p>
      {debugInfo?.status !== undefined && <p>status: {debugInfo.status}</p>}
      {debugInfo?.contentType && <p>content-type: {debugInfo.contentType}</p>}
      {debugInfo?.redirected !== undefined && <p>redirected: {String(debugInfo.redirected)}</p>}
      {debugInfo?.bodyPreview && (
        <>
          <h2>body preview</h2>
          <pre>{debugInfo.bodyPreview}</pre>
        </>
      )}
      {debugInfo?.errorMessage && (
        <>
          <h2>error</h2>
          <pre>{debugInfo.errorMessage}</pre>
        </>
      )}
    </div>
  );
}
