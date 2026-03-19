/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import "./postShareButton.css";

export default function PostShareButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShareClick = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="button_div">
        <button onClick={handleShareClick}>
          <img src="/post/post-share.png" alt="share post" />
          <span>공유</span>
        </button>
      </div>
      {isModalOpen && (
        <div className="overlay">
          <div className="modal_box">
            <div className="modal_message">클립보드에 복사되었습니다</div>
            <button
              className="modal_confirm"
              onClick={() => setIsModalOpen(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}
