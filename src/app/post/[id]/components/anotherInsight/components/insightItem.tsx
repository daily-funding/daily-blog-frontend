import { InsightItemProps } from "@/src/types/post";

/* eslint-disable @next/next/no-img-element */
export default function InsightItem(insight: InsightItemProps) {
  <div className="insightItem">
    <img src={insight.preview_image} alt="" />
    <span>{insight.category_name}</span>
    <p>{insight.title}</p>
  </div>;
}
