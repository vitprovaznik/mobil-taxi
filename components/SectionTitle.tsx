import styles from "../components/SectionTitle.module.css";

interface SectionTitleProps {
  text: string;
  color?: string;
}

export default function SectionTitle({ text, color }: SectionTitleProps) {
  return (
    <h2
      className={styles.title}
      style={{ "--title-color": color ? color : "inherit" } as React.CSSProperties}
    >
      {text}
    </h2>
  );
}
