/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import "./postShareButton.css";

export default function PostShareButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsModalOpen(true);
    } catch (error) {
      console.error("클립보드 복사 실패:", error);
      alert("복사 실패")
    }
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);


  return (
    <>
      <div className="button_div">
        <button onClick={handleShareClick}>
          <img src="/post/post-share.png" alt="share post" />
          <span>공유</span>
        </button>
      </div>
      {isModalOpen && (
        <div className="overlay" onClick={() => setIsModalOpen(false)}>
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
