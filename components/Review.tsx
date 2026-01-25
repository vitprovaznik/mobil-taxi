import styles from "./Review.module.css";

export default function Review() {
  return (
    <section className={styles.review}>
      <h2 className={styles.title}>Recenze</h2>
      <div className={styles.content}>
        <figure className={styles.figure}>
          <img
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000077-142bb142bc/stars.png?ph=f3be96abaf"
            alt=""
            width="437"
            height="68"
            loading="lazy"
          ></img>

          <blockquote className={styles.blockquote}>
            <p>
              "Super odvoz z Jablonce do Prahy na letiště. Nejlepší taxi v
              Jablonci!"
            </p>
          </blockquote>
        </figure>
        <figure className={styles.figure}>
          <img
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000077-142bb142bc/stars.png?ph=f3be96abaf"
            alt=""
            width="437"
            height="68"
            loading="lazy"
          ></img>

          <blockquote className={styles.blockquote}>
            <p>
              "Příjemný řidič a ještě lepší servis. Jízda byla bezpečná a řidič se vyznal v okolí a díky tomu jsem stihl vlak. A cena mě taky mile překvapila."
            </p>
          </blockquote>
        </figure>
        <figure className={styles.figure}>
          <img
            src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000077-142bb142bc/stars.png?ph=f3be96abaf"
            alt=""
            width="437"
            height="68"
            loading="lazy"
          ></img>

          <blockquote className={styles.blockquote}>
            <p>
              "Velice nadstandardní služby, rychlost a ochota. Mohu jen doporučit.
              <br />
              Jízdou po Praze bez problémů vyzná se a hlavně mluvící česky"
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
