/* eslint-disable @next/next/no-img-element */

import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
const Card: FC<{ title: string, description: string, image: string, podcastId: string }> = ({ title, description, image, podcastId }) => {
  return (
    <Link className={styles.card} href={`/podcast/${podcastId}`}>
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>Author: {description}</p>
    </Link>
  )
}

export default Card;
