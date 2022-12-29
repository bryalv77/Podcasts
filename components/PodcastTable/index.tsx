import { FC } from 'react'
import styles from './styles.module.css';
import PodcastRow from './PodcastRow';

const PodcastTable: FC<{ podcastList: any, podcastId: string }> = ({ podcastList, podcastId }) => (
  <section className={styles.table}>
    <div className={styles.row}>
      <div className={styles['th--title']}>Title</div>
      <div className={styles['th--cell']}>Date</div>
      <div className={styles['th--cell']}>Duration</div>
    </div>
    {
      podcastList.map((podcast: any, index: number) => (
        <PodcastRow
          podcastId={podcastId} 
          key={podcast.trackId}
          index={index}
          trackId={podcast.trackId}
          trackName={podcast.trackName}
          releaseDate={podcast.releaseDate}
          trackTimeMillis={podcast.trackTimeMillis}
        />
      ))
    }
  </section>
)

export default PodcastTable;

