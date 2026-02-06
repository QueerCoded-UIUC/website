import styles from "./DonateCard.module.css";

export default function DonateCard() {
  return (
    <section className={styles.donateSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 >Support QueerCoded</h2>
        </div>

        <a href="/donate" className={styles.donateButton}>
          Donate
        </a>
      </div>
    </section>
  );
}