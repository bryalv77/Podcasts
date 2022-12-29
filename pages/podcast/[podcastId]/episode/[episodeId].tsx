/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import Loader from '../../../../components/loader';
import CardFull from '../../../../components/cardFull';
import Title from '../../../../components/title';
import Separator from '../../../../components/separator';
import {isValidUrl} from '../../../../utils';
import Link from 'next/link';

export const Episode: FC<{}> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [podcast, setPodcast]:any = useState(null)
  const [episode, setEpisode]:any = useState(null);
  const router = useRouter();
  const {podcastId, episodeId} = router.query;
  

  useEffect(() => {
    if (podcastId && episodeId) {
      const currentPodcast = JSON.parse(localStorage.getItem(`podcast_${podcastId}`) || '');
      setPodcast(currentPodcast);
      const currentPodcastList = JSON.parse(localStorage.getItem(`podcastList_${podcastId}`) || '');
      const currentEpisode = currentPodcastList.find((episode: any) => episode.trackId.toString() === episodeId);
      
      setEpisode(currentEpisode);
      setIsLoading(false);
    } else {
      router.push('/');
    }
  }, [podcastId, episodeId, router]);

  return (
    <>
      {
        isLoading && <Loader />
      }
      <Head>
        <title>Podcaster | {podcast ? podcast['im:name'].label : ''}</title>
      </Head>
      <main className="main">
        <Title title="Podcaster"></Title>
        <Separator />
        <div className='layout'>
          <section className='podcast'>
            <CardFull
              podcastId={podcastId?.toString() || ''} 
              name={podcast ? podcast['im:name'].label : ''}
              image={podcast ? podcast['im:image'][2].label : ''}
              author={podcast ? podcast['im:artist'].label : ''}
              description={podcast ? podcast.summary.label : ''}
            />
          </section>
          {
            episode && 
            (
              <div className='episode'>
                <h2 className='title'>{episode.trackName}</h2>
                <div className='description'>
                  {
                    episode.description && episode.description.split(/\r?\n|\r|\n/g).map((line: string, index: number) => (
                      <p key={index}>{
                        isValidUrl(line) ? <Link className='link' href={line} target="_blank" rel="noreferrer"><span className='link--text'>{line}</span></Link> :line
                      }</p>
                    ))
                  }
                </div>
                <audio controls className='audio'>
                  <source src={episode.episodeUrl} type="audio/mpeg" />
                </audio>
              </div>
            )
          }
        </div>
      </main>
      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          margin: 1rem 0;
        }
        .podcast {
          margin-right: 2rem;
        }
        .episode {
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          padding: 1rem;
          border-radius: 0.5rem;
        }
        .link--text {
          color: var(--primary-color);
        }
        .audio {
          width: 100%;
          margin: 1rem 0;
        }
        @media (max-width: 768px) {
          .podcast {
            display: flex;
            justify-content: center;
            margin: 0 0 1rem 0;
          }
          .layout {
            flex-direction: column;
            flex-wrap: wrap;
          }
        }
      `}</style>

    </>
  )
};

export default Episode;