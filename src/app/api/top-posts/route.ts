import { API_URLS } from "@/src/constants/api";

export async function GET() {
  const response = await fetch(API_URLS.topPosts);
  const data = await response.json();
  return Response.json(data);
}
