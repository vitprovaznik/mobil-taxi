import styles from "./Hero.module.css";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Mobil Taxi Jablonec nad Nisou</h1>
        <Paragraph>
          Mobil Taxi Jablonec nad Nisou vám zajistí pohodlnou dopravu 24 hodin
          denně. At' už cestujete na letiště, do práce nebo na společenskou
          událost, s námi máte vždy jistotu včasného a bezpečného příjezdu.
        </Paragraph>
        <Button
          text="Zavolat si taxi"
          border="none"
          background="var(--primary)"
          color="var(--dark)"
          hoverBackground="var(--light-gray)"
          hoverBorder="none"
        />
      </div>
    </div>
  );
}
