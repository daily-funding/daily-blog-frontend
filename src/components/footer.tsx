/* eslint-disable @next/next/no-img-element */
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footerObject">
        <div className="footerSNSLinkSection">
          <a
            href="https://www.instagram.com/dailyfunding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/footer/instagram-logo.png" alt="데일리펀딩 인스타그램" />
          </a>

          <a
            href="https://brunch.co.kr/@dailian?tab=articles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/footer/brunch-logo.png" alt="데일리펀딩 브런치" />
          </a>
        </div>
        <div className="footerDailyFundingLinkSection">
          <p className="footerExplainText">이 모든 걸 경험할 수 있는</p>
          <a
            href="https://new.daily-funding.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em className="footerLink">데일리펀딩 바로가기</em>
          </a>
        </div>
        <div className="footerCopyrightSection">
          <p>&copy; 2020 DAILYFUNDING.</p>
          <p>모든 콘텐츠의 저작권은 데일리펀딩에 있습니다.</p>
        </div>
      </footer>
    </div>
  );
}
