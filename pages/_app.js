import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { pageview } from '../utils/analytics';

import '../styles/globals.css';
import '../public/css/index.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
      ym(72914599, 'hit', url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
