"use client";

import { InsightItemProps } from "@/src/types/post";
import styles from "../style.module.css";
import InsightItem from "./insightItem";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function InsightCardSection({
  posts,
}: {
  posts: InsightItemProps[];
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef] = useEmblaCarousel();

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 660);
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const sectionClassName = `${styles.insightCardSection} ${
    isMobile ? styles.mobileSection : styles.desktopSection
  }`;

  return (
    <div className={sectionClassName} ref={isMobile ? emblaRef : undefined}>
      {isMobile ? (
        <div className={styles.insightTrack}>
          {posts.map((insight) => (
            <div className={styles.insightSlide} key={insight.post_id}>
              <InsightItem insight={insight} />
            </div>
          ))}
        </div>
      ) : (
        posts.map((insight) => (
          <div key={insight.post_id}>
            <InsightItem insight={insight} />
          </div>
        ))
      )}
    </div>
  );
}
