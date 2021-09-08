import { useEffect } from 'react';
import { useRouter } from 'next/router';

import GlobalState from 'state/state';
import Layout from 'components/templates/Layout/Layout';

import { pageview } from 'utils/analytics';
import 'public/css/index.css';

function AppWrapper({ Component, pageProps }) {
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
    <GlobalState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalState>
  );
}

export default AppWrapper;
