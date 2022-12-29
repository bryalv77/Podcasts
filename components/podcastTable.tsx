import Link from 'next/link';
import { FC } from 'react'
import rem, { formatDate, formatMillis } from '../utils';

const PodcastTable: FC<{podcastList: any, podcastId: any}> = ({podcastList, podcastId}) => {

  return (
    <>
     <section className="table">
      <div className="row">
        <div className='th--title'>Title</div>
        <div className='th--cell'>Date</div>
        <div className='th--cell'>Duration</div>
      </div>
      {
        podcastList.map((podcast: any, index: number) => {
          return (
            <div key={podcast.trackId} className="row" style={{backgroundColor: index % 2 === 0 ? 'rgba(0,0,0,0.015)' : 'transparent'}}>
              <div className='cell--title'>
                <Link className='link' href={`/podcast/${podcastId}/episode/${podcast.trackId}`}>
                  <div className='cell--title__text'>
                    {podcast.trackName}
                  </div>
                </Link>
              </div>
              <div className='cell'>{formatDate(podcast.releaseDate)}</div>
              <div className='cell'>{formatMillis(podcast.trackTimeMillis)}</div>
            </div>
          )
        })
      }
    </section>
     <style jsx>{`
        .table {
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          padding: 1rem;
          border-radius: 0.5rem;
        }
        .th--title {
          font-weight: bold;
          color: #000;
          width: calc(100% - ${rem(180)});
        }
        .th--cell {
          font-weight: bold;
          width: ${rem(90)};
        }
        .row {
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid #ccc;
          padding: 1rem 0;
        }
        .cell--title {
          width: calc(100% - ${rem(180)});
        }
        .cell--title__text {
          color: var(--primary-color);
        }
        .cell {
          text-align: center;
          width: ${rem(90)};
        }
        @media (max-width: 768px) {
          .row {
            font-size: 0.8rem;
          }
          .th--title {
            width: calc(100% - ${rem(140)});
          }
          .th--cell {
            width: ${rem(70)};
          }
          .cell--title {
            width: calc(100% - ${rem(140)});
          }
          .cell {
            width: ${rem(70)};
          }
      `}</style>
    </>
  )
}

export default PodcastTable;


