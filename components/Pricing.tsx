import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <h2 className={styles.title}>Ceník taxi Jablonec nad Nisou</h2>
      <p>
        U nás v Mobil Taxi Jablonec nad Nisou můžete platit kartou, QR kódem i
        hotově.
      </p>
    </section>
  );
}
