import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Loader from '../../../../components/Loader';
import CardFull from '../../../../components/CardFull';
import CardEpisode from '../../../../components/CardEpisode';
import Nav from '../../../../components/Nav';

export const Episode: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [podcast, setPodcast]: any = useState(null)
  const [episode, setEpisode]: any = useState(null);
  const router = useRouter();
  const { podcastId, episodeId } = router.query;

  useEffect(() => {
    const getDataFromLocalStorage = () => {
      const currentPodcast = localStorage[`podcast_${podcastId}`];
      const currentPodcastList = localStorage[`podcastList_${podcastId}`];
      if (currentPodcast && currentPodcastList && currentPodcast !== 'undefined' && currentPodcastList !== 'undefined') {
        setPodcast(JSON.parse(currentPodcast || ''));
        const currentEpisode = JSON.parse(currentPodcastList || '').find((episode: any) => episode.trackId.toString() === episodeId);
        setEpisode(currentEpisode);
        setIsLoading(false);
      }
    }
    getDataFromLocalStorage();
  }, [podcastId, episodeId, router]);

  return (
    <>
      {
        isLoading && <Loader />
      }
      <Head>
        <title>{podcast ? episode ? `Podcaster | ${podcast['im:name'].label} | ${episode.trackName}` : 'Podcaster': 'Podcaster'}</title>
      </Head>
      <main className="main">
        <Nav
          title="Podcaster"
          isLoading={isLoading}
        />
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
            episode && (
              <CardEpisode
                trackName={episode?.trackName || ''}
                description={episode?.description || ''}
                episodeUrl={episode?.episodeUrl || ''}
              />
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