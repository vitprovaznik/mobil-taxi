import styles from "./ONas.module.css";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";

export default function ONas() {
  return (
    <section className={styles.onas}>
      <h1 className={styles.title}>O nás</h1>
      <div className={styles.content}>
        <SectionTitle text="Rychlé a spolehlivé taxi služby" />
        <Paragraph>
          Jsme profesionální taxi služba s dlouholetou tradicí poskytování
          spolehlivého a pohodlného přepravního servisu v Jablonci nad Nisou a
          okolí. S našimi moderními vozidly a zkušenými řidiči jsme vždy
          připraveni splnit veškeré vaše přepravní potřeby.
        </Paragraph>
        <div className={`${styles.imageContainer} ${styles.flexRow}`}>
          <Image
            src="/onas-1.jpg"
            alt="Mobil Taxi Jablonec nad Nisou, Škoda Kodiaq"
            width={500}
            height={300}
            layout="responsive"
            className={styles.image}
          />
          <Paragraph>
            Jsme společnost MobilTaxi, která poskytuje kvalitní a spolehlivé
            taxi služby v Jablonci nad Nisou a okolí. Snažíme se být vždy včas,
            bezpeční a přátelští k našim zákazníkům. Naše vozy jsou moderní,
            pohodlné a vybavené klimatizací, navigací a wifi, takže vás bezpečně
            dovezeme na vámi stanovené místo. Máme dlouholeté zkušenosti v oboru
            a naši řidiči jsou školeni a spolehliví. Rádi vám pomůžeme s odvozem
            na letiště, nádraží, do nemocnice nebo kamkoli jinam potřebujete.
          </Paragraph>
        </div>
        <div className={`${styles.imageContainer} ${styles.historyRow}`}>
          <Image
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000067-532ca532cb/car%204%20-%20g.jpeg?ph=f3be96abaf"
            alt="Mobil Taxi Jablonec nad Nisou, Škoda Superb L&K"
            width={800}
            height={1000}
            layout="responsive"
            className={styles.image}
          />

          <div className={`${styles.imageContainer} ${styles.historyContent}`}>
            <SectionTitle text="Historie" />
            <Paragraph fontWeight="500">
              MobilTaxi byla založena v roce 1991 v Jablonci nad Nisou. Naše
              společnost vznikla z potřeby zajišťovat spolehlivé a pohodlné taxi
              služby pro místní obyvatele i návštěvníky města. Od svého vzniku
              jsme se zaměřili na poskytování kvalitních a profesionálních
              služeb, které jsou v souladu s nejnovějšími trendy v oblasti
              dopravy. Díky naší dlouholeté praxi dnes patříme mezi
              nejzkušenější taxi služby v Jablonci nad Nisou.
            </Paragraph>
            <Image
              src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000080-a2ef4a2ef7/taxi.jpeg?ph=f3be96abaf"
              alt="Mobil Taxi Jablonec nad Nisou, Škoda Kodiaq"
              width={500}
              height={300}
              layout="responsive"
              className={styles.image}
            />
          </div>
        </div>
      </div>
 
    </section>
  );
}
