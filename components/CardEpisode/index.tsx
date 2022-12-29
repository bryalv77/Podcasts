import Link from 'next/link';
import { FC } from 'react'
import styles from './styles.module.css';
import { isValidUrl } from '../../utils';

const CardEpisode: FC<{
  trackName: string,
  description: string,
  episodeUrl: string
}> = ({
  trackName,
  description,
  episodeUrl
}) => {
  return (
    <section className={styles.episode}>
      <h2 className={styles.title}>{trackName}</h2>
      <div className={styles.description}>
        {
          description && description.split(/\r?\n|\r|\n/g).map((line: string, index: number) => (
            <p key={index}>{
              isValidUrl(line) ? <Link className='link' href={line} target="_blank" rel="noreferrer"><span className={styles.text}>{line}</span></Link> : line
            }</p>
          ))
        }
      </div>
      <audio controls className={styles.audio}>
        <source src={episodeUrl} type="audio/mpeg" />
      </audio>
    </section>
  )
}

export default CardEpisode;
