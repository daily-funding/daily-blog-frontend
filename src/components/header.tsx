/* eslint-disable @next/next/no-img-element */
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <header className="headerObject">
        <img
          className="headerDailyInsightLogo"
          src="/header/daily-insight-logo.png"
          alt=""
        />
        <a
          href="https://new.daily-funding.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="headerDailyFundingLink">
            <span>데일리펀딩 바로가기</span>
            <img
              className="headerLinkSymbol"
              src="/header/dailyfunding-link.png"
              alt=""
            />
          </div>
        </a>
      </header>
    </div>
  );
}
