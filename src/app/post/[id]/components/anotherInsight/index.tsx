import InsightItem from "./components/insightItem";
import styles from "./style.module.css"

export default function AnotherInsight() {
  return (
    <section className={styles.anotherInsightSection}>
      <div className={styles.anotherInsight}>
        <p className={styles.title}>또 다른 인사이트</p>
        <div className={styles.temptemp}>
          <InsightItem />
          <InsightItem />
          <InsightItem />
          <InsightItem />
          <InsightItem />
          <InsightItem />
        </div>
      </div>
    </section>
  );
}
