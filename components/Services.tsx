import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Naše služby</h2>
      <p className={styles.description}>
        MobilTaxi je spolehlivá taxi služba v Jablonci nad Nisou, která vám
        nabízí pohodlnou a rychlou dopravu po městě i okolí. Naše profesionální
        řidiči vám zajistí bezpečnou jízdu a vždy vám vyjdou vstříc. Využijte
        naší služby a užijte si komfortní cestu.
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
          <p className={styles.serviceDescription}>"Letištní přeprava"</p>
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
          <p className={styles.serviceDescription}>"Noční jízdy"</p>
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
          <p className={styles.serviceDescription}>"Kurýrní služba"</p>
        </li>
      </ul>
      <button className={styles.button}>Služby</button>
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000067-532ca532cb/car%204%20-%20g.jpeg?ph=f3be96abaf"
          alt="Mobil Taxi Jablonec nad Nisou, Škoda Superb L&K"
          width="810"
          height="1080"
          loading="lazy"
        />
        <figcaption className={styles.caption}>Mobil Taxi Jablonec nad Nisou, Škoda Superb L&K</figcaption>
      </figure>
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src="/vybava-2.jpg"
          alt="Mobil Taxi Jablonec nad Nisou, Výbava 2"
          width="810"
          height="1080"
          loading="lazy"
        />
        <figcaption className={styles.caption}>Výbava</figcaption>
      </figure>
    </section>
  );
}
