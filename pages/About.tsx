import SectionTitle from "@/components/SectionTitle";
import styles from "./About.module.css";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <SectionTitle
          text="Rychlé a spolehlivé taxi pro Jablonec nad Nisou"
          color="var(--color-primary)"
        />
        <Paragraph>
          Jsme profesionální taxi služba pro Jablonec nad Nisou a okolí s
          dlouholetou tradicí poskytování spolehlivého a pohodlného přepravního
          servisu. S našimi moderními vozidly a zkušenými řidiči jsme vždy
          připraveni splnit veškeré vaše přepravní potřeby a vždy přistavíme
          vozidlo do 10 minut! Také jezdíme s diskrétními vozy bez polepu na
          přání zákazníků.
        </Paragraph>
        <Button
          text="O nás"
          border="1px solid var(--primary)"
          background="none"
          color="var(--light)"
          hoverBackground="none"
          hoverBorder="1px solid var(--light)"
          inlinePadding="3rem"
        />
      </div>
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000065-ec937ec93b/car%203%20-%20g.jpeg?ph=f3be96abaf"
          alt="Mobil Taxi Jablonec nad Nisou, Škoda Kodiaq"
          width="810"
          height="1080"
          loading="lazy"
        />
        <figcaption className={styles.caption}>
          Mobil Taxi Jablonec nad Nisou, Škoda Kodiaq
        </figcaption>
      </figure>
      <figure className={styles.figure}>
        <img
          className={styles.image}
          src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000051-cde14cde16/interier.jpeg?ph=f3be96abaf"
          alt="Mobil Taxi Jablonec nad Nisou, Výbava 1"
          width="810"
          height="1080"
          loading="lazy"
        />
        <figcaption className={styles.caption}>Výbava</figcaption>
      </figure>
    </section>
  );
}
