import { useRouter } from 'next/router';
import { useState, useEffect, memo } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { getProductById } from 'api/api';
import { capitalize } from 'utils/string-utils';
import ProductDetails from 'components/product/product-details/product-details';
import LoadingSpinner from 'components/ui/loading';
import Breadcrumbs from 'components/ui/breadcrumbs';
import ProductTabviewTop from 'components/product/product-tabviews/product-tabview-top/product-tabview-top';

import classes from 'components/product/product-details/product-details.module.css';
import classnames from 'classnames';
import { initialPorts } from 'components/product/product-tabviews/product-tabview-top/data/values';

const INFO_FIELDS_TO_FILTER = ['price', 'density'];
const GOOGLE_API_KEY = 'AIzaSyBHgrjA93fN08uUsixuRj28u4d8QEZPNWo';
const GOOGLE_API_LIBRARIES = ['places'];
const GOOGLE_API_LANGUAGE = 'en';

const getBreadcrumbs = (product) => {
  const homeBreadcrumb = { title: 'Home', link: '/' };
  const categoryBreadcrumb = {
    title: capitalize(product?.category),
    link: `/products/${product?.category}`
  };
  const polymerType = product?.card_data.find(
    (item) => item.key === 'Type'
  ).value;
  const polymerBreadcrumb = {
    title: polymerType,
    link: `/products/${product?.category}?type=${polymerType}`
  };
  const gradeBreadcrumb = { title: product?.grade };
  return [
    homeBreadcrumb,
    categoryBreadcrumb,
    polymerBreadcrumb,
    gradeBreadcrumb
  ];
};

function ProductPage() {
  const router = useRouter();
  const productId = router.query.productId;

  const initialProductData = { product: null, ports: null };
  const [productPageData, setProductPageData] = useState(initialProductData);
  const [arePortsUpdated, setArePortsUpdated] = useState(false);
  const [productIsLoaded, setProductIsLoaded] = useState(false);

  const { isLoaded: googleScriptIsLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: GOOGLE_API_LIBRARIES,
    language: GOOGLE_API_LANGUAGE
  });

  const handleProductLoad = (product) => {
    setProductPageData({ ...productPageData, product });
  };

  const handlePortsLoad = (ports) => {
    setProductPageData({ ...productPageData, ports });
  };

  useEffect(() => {
    if (!!productId) {
      getProductById(productId)
        .then((data) => handleProductLoad(data))
        .catch(() => setProductIsLoaded(true));
    }
  }, [productId]);

  useEffect(() => {
    if (productPageData.product && !productPageData.ports) {
      handlePortsLoad(initialPorts);
    }
  }, [productPageData]);

  useEffect(() => {
    if (productPageData.ports && !arePortsUpdated && googleScriptIsLoaded) {
      const setPortsLatLng = productPageData.ports.map(async (port) => {
        const geocodes = await geocodeByAddress(port.name);
        const { lat, lng } = await getLatLng(geocodes[0]);
        return { ...port, lat, lng };
      });
      Promise.all(setPortsLatLng).then((newPorts) => {
        setArePortsUpdated(true);
        handlePortsLoad(newPorts);
      });
    }
  }, [productPageData, arePortsUpdated, googleScriptIsLoaded]);

  useEffect(() => {
    if (arePortsUpdated) {
      setProductIsLoaded(true);
    }
  }, [arePortsUpdated]);

  return (
    <section
      className={classnames(classes.root__productPage, classes.productPage)}
    >
      {!productIsLoaded || !googleScriptIsLoaded ? (
        <LoadingSpinner />
      ) : !productPageData.product ? (
        <h2 className={'text-center'}>There is no product!</h2>
      ) : (
        <>
          <Breadcrumbs list={getBreadcrumbs(productPageData.product)} />
          <ProductDetails
            product={productPageData.product}
            fieldsToFilter={INFO_FIELDS_TO_FILTER}
          />
          <ProductTabviewTop {...productPageData} />
        </>
      )}
    </section>
  );
}

export default memo(ProductPage);
