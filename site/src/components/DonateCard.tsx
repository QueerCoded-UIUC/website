import styles from "./DonateCard.module.css";
import { pressStart } from "@/app/layout";

export default function DonateCard() {
  return (
    <section className={styles.donateSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={`${styles.textTitle} ${pressStart.className}`}>
            QueerCoded_
          </h2>
        </div>

        <a href="/donate" className={styles.donateButton}>
          DONATE
        </a>
      </div>
    </section>
  );
}