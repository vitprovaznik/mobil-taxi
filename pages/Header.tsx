import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000055-855ca855cc/logo%20mobiltaxi.png?ph=f3be96abaf"
          alt=""
          width="58"
          height="58"
        />
        <p className={styles.title}>Mobil Taxi Jablonec nad Nisou</p>
      </div>
      <div className={styles.hamburger}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  );
}
