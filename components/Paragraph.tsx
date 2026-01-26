import styles from "./Paragraph.module.css";

interface ParagraphProps {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
}

export default function Paragraph({ children, fontSize = "1.125rem;", fontWeight = "normal" }: ParagraphProps) {
  return <p className={styles.paragraph} style={{ fontSize, fontWeight }}>{children}</p>;
}
