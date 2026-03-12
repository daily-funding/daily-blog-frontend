import "./header.css";
import Image from "next/image"

export default function Header() {
    return <div className='header'>
        <header className="headerObject">
            <Image src="/daily-insight-logo.png" width={212} height={34} alt="데일리 인사이트" />
                <a href="https://new.daily-funding.com/" target="_blank" rel="noopener noreferrer">
                <div className="dailyFundingLink">
                <span>데일리펀딩 바로가기</span>
                <Image src="/dailyfunding-link.png" width={25} height={25} alt="데일리펀딩 바로가기" />
                </div>
                </a>
        </header>
    </div>
}