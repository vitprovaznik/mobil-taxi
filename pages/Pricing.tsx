import styles from "./Pricing.module.css";
import SectionTitle from "@/components/SectionTitle";


export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <SectionTitle text="Ceník taxi Jablonec nad Nisou" color="var(--color-primary)" />
      <p>
        U nás v Mobil Taxi Jablonec nad Nisou můžete platit kartou, QR kódem i
        hotově.
      </p>
      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="24"
            viewBox="0 0 23 46"
            fill="none"
          >
            <path
              d="M4.69964 12.6117L6.73323 10.58L17.8096 21.6526C17.9882 21.83 18.1299 22.041 18.2266 22.2734C18.3233 22.5058 18.373 22.755 18.373 23.0068C18.373 23.2585 18.3233 23.5077 18.2266 23.7401C18.1299 23.9725 17.9882 24.1835 17.8096 24.3609L6.73323 35.4392L4.70156 33.4075L15.0976 23.0096L4.69964 12.6117Z"
              fill="white"
            />
          </svg>
          <p className={styles.serviceDescription}>
            Zelená zóna: Jednotná sazba <strong>89 Kč</strong>
          </p>
        </li>
        <li className={styles.serviceItem}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="24"
            viewBox="0 0 23 46"
            fill="none"
          >
            <path
              d="M4.69964 12.6117L6.73323 10.58L17.8096 21.6526C17.9882 21.83 18.1299 22.041 18.2266 22.2734C18.3233 22.5058 18.373 22.755 18.373 23.0068C18.373 23.2585 18.3233 23.5077 18.2266 23.7401C18.1299 23.9725 17.9882 24.1835 17.8096 24.3609L6.73323 35.4392L4.70156 33.4075L15.0976 23.0096L4.69964 12.6117Z"
              fill="white"
            />
          </svg>
          <p className={styles.serviceDescription}>
            Mimo zelenou zónu: Jízdné již <strong>od 25 Kč/km</strong>
          </p>
        </li>
      </ul>
    </section>
  );
}
