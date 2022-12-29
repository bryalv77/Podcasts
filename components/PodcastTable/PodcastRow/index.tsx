import Link from 'next/link';
import { FC } from 'react'
import styles from './styles.module.css';
import { formatDate, formatMillis } from '../../../utils';

const PodcastRow: FC<{
  trackId: string,
  trackName: string,
  podcastId: string,
  index: number,
  releaseDate: string,
  trackTimeMillis: number
}> = ({ 
  trackId, 
  trackName, 
  podcastId, 
  index, 
  releaseDate, 
  trackTimeMillis 
}) => (
  <div key={trackId} className={styles.row} style={{ backgroundColor: index % 2 === 0 ? 'rgba(0,0,0,0.015)' : 'transparent' }}>
    <div className={styles['cell--title']}>
      <Link className="link" href={`/podcast/${podcastId}/episode/${trackId}`}>
        <div className={styles['cell--title__text']}>
          {trackName}
        </div>
      </Link>
    </div>
    <div className={styles.cell}>{formatDate(releaseDate)}</div>
    <div className={styles.cell}>{formatMillis(trackTimeMillis)}</div>
  </div>
)

export default PodcastRow;
