import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.item}>
        <span className={styles.icon}>i</span> Otevřeno Nonstop
      </div>
    </div>
  );
}
