import { API_URLS } from "@/src/constants/api";
import InsightItem from "./components/insightItem";
import styles from "./style.module.css";
import { InsightItemProps } from "@/src/types/post";
import InsightCardSection from "./components/insightCardSection";

type InsightResponse = {
  posts: InsightItemProps[];
};

async function getInsights(id: string): Promise<InsightResponse | null> {
  try {
    const response = await fetch(`${API_URLS.posts}${id}/insight/`);

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch {
    return null;
  }
}

export default async function AnotherInsight({ id }: { id: string }) {
  const insightData = await getInsights(id);

  if (!insightData || !insightData.posts?.length) {
    return null;
  }

  return (
    <section className={styles.anotherInsightSection}>
      <div className={styles.anotherInsight}>
        <p className={styles.title}>또 다른 인사이트</p>
        <InsightCardSection posts={insightData.posts} />
      </div>
       
    </section>
  );
}
