import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Zavolejte nám!</p>
      <a className={styles.footerLink} href="tel:+420723104060">+420 723 104 060</a>

      <br />
      <p className={styles.footerCopy}>
        &copy; 2026 Mobil Taxi. Všechna práva vyhrazena.
      </p>
    </footer>
  );
}
