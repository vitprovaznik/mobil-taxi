import styles from "../components/Button.module.css";

interface ButtonProps {
  text: string;
  color: string;
  border: string;
  background: string;
  hoverBackground?: string;
  hoverBorder?: string;
  inlinePadding?: string;
}

export default function Button({ text, border, background, color, hoverBackground, hoverBorder, inlinePadding = "2rem" }: ButtonProps) {
  return (
    <button
      className={styles.button}
      style={{
        "--button-border": border ? border : "inherit",
        "--button-background": background ? background : "inherit",
        "--button-color": color ? color : "inherit",
        "--button-hover-background": hoverBackground ? hoverBackground : "inherit",
        "--button-hover-border": hoverBorder ? hoverBorder : "inherit",
        "--button-inline-padding": inlinePadding ? inlinePadding : "inherit",
      } as React.CSSProperties}
    >
      {text}
    </button>
  );
}
