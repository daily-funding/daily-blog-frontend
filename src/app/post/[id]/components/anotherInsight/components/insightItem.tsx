import { InsightItemProps } from "@/src/types/post";
import styles from "../style.module.css";

/* eslint-disable @next/next/no-img-element */
// export default function InsightItem(insight: InsightItemProps) {
//   <div className="insightItem">
//     <img src={insight.preview_image} alt="" />
//     <span>{insight.category_name}</span>
//     <p>{insight.title}</p>
//   </div>;
// }

export default function InsightItem() {
  return (
    <div className={styles.insightItem}>
      <img src="/post/dailian-back.png" alt="" />
      <div className={styles.black_back}>
        <span>USER TALK</span>
      </div>
      <div className={styles.info_div}>
        <p>로깅 레이어, 이슈 해결과 고객 이해를 위해 해해햏해해</p>
      </div>
    </div>
  );
}
