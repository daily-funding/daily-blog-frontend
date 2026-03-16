"use client";

import Image from "next/image";

export default function UpButton() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button type="button" className="up-btn" onClick={handleTop}>
        <Image
          src="/footer/up-button.png"
          alt="위로 가기"
          width={61}
          height={61}
          style={{ width: "100%", height: "100%" }}
        />
      </button>

      <style jsx>{`
        .up-btn {
          position: fixed;
          right: 40px;
          bottom: 40px;
          z-index: 100;

          width: 61px;
          height: 61px;

          border: none;
          background: transparent;
          cursor: pointer;

          padding: 0;
        }

        .up-btn:focus {
          outline: none;
        }

        @media (max-width: 768px) {
          .up-btn {
            width: 47px;
            height: 47px;
            right: 14px;
            bottom: 14px;
          }
        }
      `}</style>
    </>
  );
}
