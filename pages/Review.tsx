import styles from "./Review.module.css";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

export default function Review() {
  return (
    <section className={styles.review}>
      <SectionTitle text="Recenze" color="var(--color-primary)" />
      <div className={styles.content}>
        <figure className={styles.figure}>
          <Image
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000077-142bb142bc/stars.png?ph=f3be96abaf"
            alt=""
            width="437"
            height="68"
            loading="lazy"
            layout="responsive"
          />

          <blockquote className={styles.blockquote}>
            <Paragraph fontSize="1rem">
              "Super odvoz z Jablonce do Prahy na letiště. Nejlepší taxi v
              Jablonci!"
            </Paragraph>
          </blockquote>
        </figure>
        <figure className={styles.figure}>
          <Image
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000077-142bb142bc/stars.png?ph=f3be96abaf"
            alt=""
            width="437"
            height="68"
            loading="lazy"
            layout="responsive"
          />

          <blockquote className={styles.blockquote}>
            <Paragraph fontSize="1rem">
              "Příjemný řidič a ještě lepší servis. Jízda byla bezpečná a řidič
              se vyznal v okolí a díky tomu jsem stihl vlak. A cena mě taky mile
              překvapila."
            </Paragraph>
          </blockquote>
        </figure>
        <figure className={styles.figure}>
          <Image
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000077-142bb142bc/stars.png?ph=f3be96abaf"
            alt=""
            width="437"
            height="68"
            loading="lazy"
            layout="responsive"
          />

          <blockquote className={styles.blockquote}>
            <Paragraph fontSize="1rem">
              "Velice nadstandardní služby, rychlost a ochota. Mohu jen
              doporučit.
              <br />
              Jízdou po Praze bez problémů vyzná se a hlavně mluvící česky"
            </Paragraph>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
