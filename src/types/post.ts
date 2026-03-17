export interface TopPost {
  post_id: number;
  category_name: string;
  title: string;
  subtitle: string;
  preview_image: string;
}

export interface DetailTopPost {
  post_id: number;
  category: {
    id: number;
    name: string;
  };
  title: string;
  subtitle: string;
  content: string;
  preview_image: string;
}
