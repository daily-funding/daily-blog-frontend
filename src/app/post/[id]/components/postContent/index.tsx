import PostShareButton from "./components/postShareButton";
import DOMPurify from "isomorphic-dompurify";
import "./style.css";

export default function PostContent({ content }: { content: string }) {
  const sanitizedContent = DOMPurify.sanitize(content);
  return (
    <div className="postContent">
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
      <PostShareButton />
    </div>
  );
}
