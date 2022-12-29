/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { FC } from 'react'
import styles from './styles.module.css';

const Card: FC<{
  name: string,
  author: string,
  description: string,
  image: string,
  podcastId: string
}> = ({ name, author, description, image, podcastId }) => (
  <section className={styles.card}>
    <Link href={`/podcast/${podcastId}`} className={styles.image__link}>
      <img className={styles.image} src={image} alt={name} />
    </Link>
    <Link href={`/podcast/${podcastId}`} className="link">
      <h4 className={styles.title}>
        {name}
      </h4>
    </Link>
    <Link href={`/podcast/${podcastId}`} className="link">
      <h4 className={styles.subtitle}>
        {`by ${author}`}
      </h4>
    </Link>
    <p className={styles.description}>
      <span className={styles.description__title}>Description:</span><br /><br />
      {description}
    </p>
  </section>
);

export default Card;


