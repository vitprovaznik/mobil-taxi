import styles from "./Sluzby.module.css";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function Sluzby() {
  return (
    <section className={styles.services}>
      <h1 className={styles.title}>Naše Služby</h1>
      <Paragraph>
        MobilTaxi je spolehlivá taxi služba v Jablonci nad Nisou, která vám
        nabízí pohodlnou a rychlou dopravu po městě i okolí. Naše profesionální
        řidiči vám zajistí bezpečnou jízdu a vždy vám vyjdou vstříc. Využijte
        naší služby a užijte si komfortní cestu.
      </Paragraph>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000065-ec937ec93b/car%203%20-%20g.jpeg?ph=f3be96abaf"
            alt="Mobil Taxi Jablonec nad Nisou, Letištní přeprava"
            layout="responsive"
            width={700}
            height={475}
            className={styles.image}
          />
          <SectionTitle text="&bdquo;Letištní přeprava&ldquo;" />
          <Paragraph>
            Letištní přeprava je důležitou součástí cestování, která zajišťuje
            pohodlný a efektivní přesun mezi místem pobytu a cílovým letištěm.
          </Paragraph>
        </div>
        <div className={styles.card}>
          <Image
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000043-356b2356b6/Obr%C3%A1zek%20WhatsApp%2C%202024-12-11%20v%2000.02.54_eeae924d.jpeg?ph=f3be96abaf"
            alt="Mobil Taxi Jablonec nad Nisou, Noční jízdy"
            layout="responsive"
            width={700}
            height={475}
            className={styles.image}
          />
          <SectionTitle text="&bdquo;Noční jízdy&ldquo;" />
          <Paragraph>
            Noční jízdy jsou plné tajemna, nečekaných dobrodružství a pocitu
            svobody pod hvězdnou oblohou.
          </Paragraph>
        </div>
        <div className={styles.card}>
          <Image
            src="/services-3.jpg"
            alt="Mobil Taxi Jablonec nad Nisou, Kurýrní služby"
            layout="responsive"
            width={700}
            height={475}
            className={styles.image}
          />
          <SectionTitle text="&bdquo;Kurýrní služba&ldquo;" />
          <Paragraph>
            Kurýrní služba pro vás poskytuje rychlé a spolehlivé doručování
            zásilek, ať už se jedná o dokumenty, balíky nebo expresní přepravu.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
