import PostShareButton from "./components/postShareButton";
import DOMPurify from "isomorphic-dompurify";
import "./style.css";

export default function PostContent({ content }: { content: string }) {
  return (
    <div className="postContent">
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PostShareButton />
    </div>
  );
}
