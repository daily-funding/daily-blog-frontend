export interface TopPost {
  post_id: number;
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

export type Post = {
  post_id: number;
  category_name: string;
  title: string;
  description: string;
  preview_image: string;
}

export type TopPostProps = {
  post: DetailTopPost;
};

export type InsightItemProps ={
  post_id: number;
  category_name: string;
  title: string;
  preview_image: string;
};

export type Category = {
  category_id: number;
  name: string;
};
