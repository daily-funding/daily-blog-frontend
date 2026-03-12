/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import "./header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const isPostPage = pathName.startsWith("/post/");
  const router = useRouter();

  return (
    <div className="header">
      <header className="headerObject">
        {isPostPage ? (
          <img
            className="headerBackButton"
            src="/header/header-left-arrow.png"
            alt="뒤로 가기"
            onClick={() => router.back()}
          />
        ) : (
          <img
            className="headerDailyInsightLogo"
            src="/header/daily-insight-logo.png"
            alt=""
          />
        )}
        {isPostPage ? (
          <Link href="/">
            <img
              className="headerCancelButton"
              src="/header/header-cancel.png"
              alt="홈으로 가기"
            />
          </Link>
        ) : (
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
        )}
      </header>
    </div>
  );
}
