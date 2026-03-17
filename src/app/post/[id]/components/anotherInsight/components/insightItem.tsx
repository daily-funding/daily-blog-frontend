import { InsightItemProps } from "@/src/types/post";

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
    <div className="insightItem">
      <img src="/post/dailian-back.png" alt="" />
      <div className="black_back">
        <span>USER TALK</span>
      </div>
      <div className="info_div">
        <p>로깅 레이어, 이슈 해결과 고객 이해를 위해 해해햏해해</p>
      </div>
    </div>
  );
}
