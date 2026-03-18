import { API_URLS } from "@/src/constants/api";
import TopPost from "./components/topPost";
import PostContent from "./components/postContent";
import "./style.css";
import DailyTogether from "./components/dailyTogether";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ id: string }>; //Next가 page를 streaming & async rendering으로 처리한다. page가 async server component일 수 있기 때문에 params를 Promise로 전달한다.
}) {
  const { id } = await params;

  const response = await fetch(`${API_URLS.posts}${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post: ${response.status}`);
  }
  const post = await response.json();
  console.log(post);

  return (
    <div className="postPage">
      <TopPost post={post} />
      <PostContent />
      <DailyTogether />
    </div>
  );
}
