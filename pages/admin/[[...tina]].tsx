import dynamic from 'next/dynamic';

// Dynamically import TinaAdmin with SSR disabled
const TinaAdmin = dynamic(() =>
  import('tinacms').then((mod) => mod.TinaAdmin),
  { ssr: false }
);

export default TinaAdmin;
