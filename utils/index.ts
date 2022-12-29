export const rem = (px: number) => `${px / 16}rem`;
export const PODCASTS_LIST_URL_API = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
export const API_URL_PODCAST_EPISODES = 'https://itunes.apple.com/lookup?&media=podcast&entity=podcastEpisode&limit=100&id=';
export const CORS_HELPER = 'https://api.allorigins.win/get?url='

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatMillis = (duration: number) => {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  let hoursToPrint = (hours < 10) ? "0" + hours : hours;
  let minutesToPrint = (minutes < 10) ? "0" + minutes : minutes;
  let secondsToPrint = (seconds < 10) ? "0" + seconds : seconds;

  return hoursToPrint + ":" + minutesToPrint + ":" + secondsToPrint;
}

export const isValidUrl = (urlString: string) => {
  const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
  
  return !!urlPattern.test(urlString);
}

export default rem;