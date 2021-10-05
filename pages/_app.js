import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from 'store';

import Layout from 'components/layout/Layout/Layout';

import { pageview } from 'utils/analytics.utils';
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
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default AppWrapper;
