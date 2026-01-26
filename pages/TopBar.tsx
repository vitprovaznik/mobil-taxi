import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.item}>
          <span className={styles.icon}>i</span> Otevřeno Nonstop
        </div>
        <div className={styles.item2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
              fill="#818A99"
            />
          </svg>
          <a href="tel:+420723104060" className={styles.phoneLink}>
            +420 723 104 060
          </a>
        </div>
      </div>
    </div>
  );
}
