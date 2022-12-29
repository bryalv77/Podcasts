/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import axios from 'axios';
import {useRouter} from 'next/router';
import Loader from '../../../components/loader';
import CardFull from '../../../components/cardFull';
import Title from '../../../components/title';
import Separator from '../../../components/separator';
import PodcastTable from '../../../components/podcastTable';
import {API_URL_PODCAST_EPISODES, CORS_HELPER} from '../../../utils';

export const Podcast: FC<{}> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [podcast, setPodcast]:any = useState(null)
  const [podcastList, setPodcastList]:any = useState([]);
  const router = useRouter();
  const {podcastId} = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const lastUpdatePodcastList = localStorage.getItem(`lastUpdatePodcastsList_${podcastId}`);
      if (lastUpdatePodcastList && Date.now() - parseFloat(lastUpdatePodcastList) <= 1000 * 60 * 60 * 24) {
        setPodcastList(JSON.parse(localStorage.getItem(`podcastList_${podcastId}`) || ''));
        setIsLoading(false);
        return;
      }
      const url = encodeURIComponent(`${API_URL_PODCAST_EPISODES}${podcastId}`);
      const requestUrl = `${CORS_HELPER}${url}`;
      const result = await axios.get(requestUrl);
      const contents = JSON.parse(result.data.contents);
      const podcastList = contents.results;
      localStorage.setItem(`podcastList_${podcastId}`, JSON.stringify(podcastList));
      localStorage.setItem(`lastUpdatePodcastsList_${podcastId}`, Date.now().toString());
      setPodcastList(podcastList);
      setIsLoading(false);
    };
    try {
      const allPodcasts = JSON.parse(localStorage.podcasts);
      const currentPodcast = allPodcasts.find((podcast: any) => podcast.id.attributes['im:id'] === podcastId);
      localStorage.setItem(`podcast_${podcastId}`, JSON.stringify(currentPodcast));
      localStorage.setItem(`lastUpdatePodcast_${podcastId}`, Date.now().toString());
      setPodcast(currentPodcast);
      fetchData();
    } catch (e) {
      router.push('/');
    }
  }, [podcastId, router]);

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
            podcastList && podcastList.length > 0 && (
              <div>
                <h2 className='title'>{`Episodes: ${podcastList.length}`}</h2>
                <PodcastTable 
                  podcastList={podcastList}
                  podcastId={podcastId}
                />
              </div>
            )
          }
        </div>
      </main>
      <style jsx>{`
        .layout {
          display: grid;
          grid-template-columns: repeat(2, auto);
          grid-gap: 3rem;
          margin: 1rem 0;
        }
        .title {
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          padding: 1rem;
          margin: 0 0 1rem 0;
          border-radius: 0.5rem;
        }
        @media (max-width: 768px) {
          .podcast {
            display: flex;
            justify-content: center;
          }
          .layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </>
  )
};

export default Podcast;