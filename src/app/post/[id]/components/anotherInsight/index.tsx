import InsightItem from "./components/insightItem";
import "./style.css";

export default function AnotherInsight() {
  return (
    <section className="anotherInsightSection">
      <div className="anotherInsight">
        <p className="title">또 다른 인사이트</p>
        <div className="temptemp">
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
