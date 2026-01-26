import styles from '../components/Figure.module.css';
import Image from 'next/image';

interface FigureProps {
  className?: string;
  captionText: string;
  imageSrc: string;
}

export default function Figure({className, captionText, imageSrc }: FigureProps) {
  return <figure className={`${styles.figure} ${className}`}>
    <Image src={imageSrc} alt={captionText} className={styles.image} layout="responsive" width={810} height={1080} />
    <figcaption className={styles.caption}>{captionText}</figcaption>
  </figure>;
}
