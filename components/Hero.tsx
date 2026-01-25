import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Mobil Taxi Jablonec nad Nisou</h1>
      <p className={styles.description}>
        Mobil Taxi Jablonec nad Nisou vám zajistí pohodlnou dopravu 24 hodin
        denně. At' už cestujete na letiště, do práce nebo na společenskou
        událost, s námi máte vždy jistotu včasného a bezpečného příjezdu.
      </p>
      <button className={styles.button}>Zavolat si taxi</button>
    </div>
  );
}
