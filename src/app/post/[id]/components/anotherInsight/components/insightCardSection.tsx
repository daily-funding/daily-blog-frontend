"use client";

import { InsightItemProps } from "@/src/types/post";
import styles from "../style.module.css";
import InsightItem from "./insightItem";
import { useEffect, useState } from "react";

export default function InsightCardSection({
  posts,
}: {
  posts: InsightItemProps[];
}) {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 660);
  };

  useEffect(() => {
    window.addEventListener("resize", checkMobile);

    return window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.insightCardSection}>
      {posts.map((insight) => (
        <div key={insight.post_id}>
          <InsightItem insight={insight} />
        </div>
      ))}
    </div>
  );
}
