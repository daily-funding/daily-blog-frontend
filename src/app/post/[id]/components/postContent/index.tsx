/* eslint-disable @next/next/no-img-element */
import "./style.css";

export default function PostContent({ content }: { content: string }) {
  console.log(content);
  return (
    <div className="postContent">
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="button_div">
        <button>
          <img src="/post/post-share.png" alt="share post" />
          <span>공유</span>
        </button>
      </div>
    </div>
  );
}
