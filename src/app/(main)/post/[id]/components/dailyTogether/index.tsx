/* eslint-disable @next/next/no-img-element */
import "./style.css";

export default function DailyTogether() {
  return (
    <div className="dailianBanner">
      <img src="/post/dailian-back.png" alt="" />
      <div className="dailianTextSection">
        <p>{"우리는 매일 금융의 각을 넓혀가는 데일리언입니다."}</p>
        <a
          href="https://linktr.ee/dailyfunding"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>{"데일리언과 함께하기 >"}</u>
        </a>
      </div>
    </div>
  );
}
