import { InsightItemProps } from "@/src/types/post";
import styles from "../style.module.css";

/* eslint-disable @next/next/no-img-element */
export default function InsightItem({
  insight,
}: {
  insight: InsightItemProps;
}) {
  return (
    <div className={styles.insightItem}>
      <img src={insight.preview_image} alt="" />
      <div className={styles.black_back}>
        <span>{insight.category_name}</span>
      </div>
      <div className={styles.info_div}>
        <p>{insight.title}</p>
      </div>
    </div>
  );
}
