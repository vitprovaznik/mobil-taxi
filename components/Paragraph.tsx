import styles from "./Paragraph.module.css";

interface ParagraphProps {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
}

export default function Paragraph({ children, fontSize = "1.125rem", fontWeight = "normal", className }: ParagraphProps) {
  return <p className={`${styles.paragraph} ${className}`} style={{ fontSize, fontWeight }}>{children}</p>;
}
