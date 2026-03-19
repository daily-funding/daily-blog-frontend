export interface TopPost {
  post_id: number;
  category_id: number;
  category_name: string;
  title: string;
  subtitle: string;
  preview_image: string;
}

export interface DetailTopPost {
  post_id: number;
  category_id: number;
  category_name: string;
  title: string;
  subtitle: string;
  content: string;
  preview_image: string;
}

export interface Post {
  post_id: number;
  category_name: string;
  title: string;
  description: string;
  preview_image: string;
}

export interface PostListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export interface TopPostProps {
  post: DetailTopPost;
}

export interface InsightItemProps {
  post_id: number;
  category_name: string;
  title: string;
  preview_image: string;
}

export interface Category {
  category_id: number;
  name: string;
}
