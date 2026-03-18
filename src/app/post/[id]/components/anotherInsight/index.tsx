import { API_URLS } from "@/src/constants/api";
import InsightItem from "./components/insightItem";
import styles from "./style.module.css";
import { InsightItemProps } from "@/src/types/post";
import InsightCardSection from "./components/insightCardSection";

type InsightResponse = {
  posts: InsightItemProps[];
};

async function getInsights(id: string): Promise<InsightResponse> {
  const response = await fetch(`${API_URLS.posts}${id}/insight/`);
  return response.json();
}

export default async function AnotherInsight({ id }: { id: string }) {
  const InsightData = await getInsights(id);
  console.log("items:", InsightData);

  return (
    <section className={styles.anotherInsightSection}>
      <div className={styles.anotherInsight}>
        <p className={styles.title}>또 다른 인사이트</p>
        <InsightCardSection posts={InsightData.posts} />
      </div>
    </section>
  );
}
