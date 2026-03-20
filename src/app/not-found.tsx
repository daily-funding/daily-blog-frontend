import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "24px",
      }}
    >
      <Image src="/post/error-404.jpeg" alt="404" width={400} height={400} />
      <p
        style={{
          fontSize: "28px",
          fontWeight: 300,
          fontFamily: "Noto Sans KR",
          textAlign: "center",
          whiteSpace: "pre-line",
        }}
      >
        {`죄송합니다. \n 원하시는 페이지를 찾을 수 없습니다.`}
      </p>
      <p style={{ fontSize: "16px", color: "gray" }}>
        WE CANNOT FIND YOUR DESTINATION.
      </p>
    </div>
  );
}
