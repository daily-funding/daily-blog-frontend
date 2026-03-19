const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

export const API_URLS = {
  basic: `${BASE_URL}/`,
  topPosts: `${BASE_URL}/posts/top/`,
  posts: `${BASE_URL}/posts/`,
  categories: `${BASE_URL}/categories/`,
};