import styles from "./products.module.css";
import BestItemsSection from "./components/BestItemSection";
import AllItemsSection from "./components/AllItemSection";
import Pagination from "components/Pagination";

export default function Products() {
  return (
    <div className={styles.container}>
      <section className={styles.bestProduct}>
        <BestItemsSection />
      </section>
      <section className={styles.saleProduct}>
        <AllItemsSection />
      </section>
      <section className={styles.pagenation}>
        <Pagination />
      </section>
    </div>
  );
}
