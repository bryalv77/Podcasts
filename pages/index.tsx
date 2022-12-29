import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';
import Textfield from '../components/Textfield';
import Loader from '../components/Loader';
import Nav from '../components/Nav';
import { rem, PODCASTS_LIST_URL_API } from '../utils';


export default function Podcasts() {
  const [podcasts, setPodcasts]: any = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText]: any = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.podcasts && Date.now() - localStorage.lastUpdatePodcasts <= 1000 * 60 * 60 * 24) {
        setPodcasts(JSON.parse(localStorage.podcasts));
        setIsLoading(false);
        return;
      }
      const result = await axios.get(PODCASTS_LIST_URL_API);
      const { entry } = result.data.feed;
      setPodcasts(entry);
      localStorage.podcasts = JSON.stringify(entry);
      localStorage.lastUpdatePodcasts = Date.now();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleSearchText = (e: any) => {
    const searchString = e.target.value;
    setSearchText(searchString);
    if (searchString === '') {
      setPodcasts(JSON.parse(localStorage.podcasts));
    } else {
      const filteredPodcasts = JSON.parse(localStorage.podcasts).filter((podcast: any) => {
        return podcast['im:name'].label.toLowerCase().includes(searchString.toLowerCase());
      });
      setPodcasts(filteredPodcasts);
    }
  };

  return (
    <>
      <Head>
        <title>Podcaster</title>
      </Head>
      {
        isLoading && <Loader />
      }
      <main className="main">
        <Nav
          title="Podcaster"
          isLoading={isLoading}
        />
        <div className="filter">
          <div className="filter--count">
            {podcasts.length}
          </div>
          <Textfield
            placeholder="Filter podcasts..."
            value={searchText}
            onChange={handleSearchText}
          />
        </div>
        <div className="grid">
          {
            podcasts.map((podcast: any) => {
              return (
                <Card
                  key={podcast.id.attributes['im:id']}
                  podcastId={podcast.id.attributes['im:id']}
                  title={podcast['im:name'].label}
                  description={podcast['im:artist'].label}
                  image={podcast['im:image'][2].label}
                />
              )
            })
          }
        </div>
      </main>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(${rem(250)}, 1fr));
          grid-gap: 1rem;
          margin: 1rem 0;
        }
        .filter {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .filter--count {
          font-weight: bold;
          color: #FFF;
          background-color: var(--primary-color);
          padding: 0.25rem;
          border-radius: 0.25rem;
          font-size: 1.25rem;
        }
      `}</style>

    </>
  )
};
