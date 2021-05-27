import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

import { getProductByIdApi, getPlaceCoordinatesByNameApi } from 'api/api';
import { capitalize } from 'utils/string-utils';
import ProductDetails from 'components/product/product-details/product-details';
import LoadingSpinner from 'components/ui/loading';
import Breadcrumbs from 'components/ui/breadcrumbs';
import ProductTabviewTop from 'components/product/product-tabviews/product-tabview-top/product-tabview-top';

import styles from 'components/product/product-details/product-details.module.css';
import cn from 'classnames';

const INFO_FIELDS_TO_FILTER = ['price', 'density'];

const getBreadcrumbs = (product) => {
  const homeBreadcrumb = { title: 'Home', link: '/products/polymers' };
  const categoryBreadcrumb = {
    title: capitalize(product?.category),
    link: `/products/${product?.category}`
  };
  const polymerType = product?.card_data.find(
    (item) => item.key === 'Type'
  ).value;
  const polymerBreadcrumb = {
    title: polymerType,
    link: `/products/${product?.category}?type=${polymerType?.toUpperCase()}`
  };
  const gradeBreadcrumb = { title: product?.grade };
  return [
    homeBreadcrumb,
    categoryBreadcrumb,
    polymerType ? polymerBreadcrumb : null,
    gradeBreadcrumb
  ];
};

function ProductPage() {
  const router = useRouter();
  const productId = router.query.productId;

  const [product, setProduct] = useState(null);
  const [ports, setPorts] = useState(null);
  const [factories, setFactories] = useState(null);
  const [arePortsUpdated, setArePortsUpdated] = useState(false);
  const [areFactoriesUpdated, setAreFactoriesUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!!productId) {
      getProductByIdApi(productId).then((product) => {
        setProduct(product);
        setIsLoading(!!product);
      });
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      const mapObj = product.doc_data?.find((item) => 'map' in item);
      const newPorts = mapObj?.map;
      const newFactories = mapObj?.availability;
      setPorts(newPorts);
      setFactories(newFactories);
      setIsLoading(false);
    }
  }, [product]);

  const addCoordinatesToPlaces = (places, callback) => {
    const newPlacesPromises = places.map(async (place) => {
      const coordinates = await getPlaceCoordinatesByNameApi(
        place.name ?? place
      );
      return place.name
        ? { ...place, ...coordinates }
        : { name: place, ...coordinates };
    });
    Promise.all(newPlacesPromises).then((newPlaces) => {
      callback(newPlaces);
    });
  };

  useEffect(() => {
    if (ports?.length && !arePortsUpdated) {
      setArePortsUpdated(true);
      addCoordinatesToPlaces(ports, setPorts);
    }
  }, [ports]);

  useEffect(() => {
    if (factories?.length && !areFactoriesUpdated) {
      setAreFactoriesUpdated(true);
      addCoordinatesToPlaces(factories, setFactories);
    }
  }, [factories]);

  return (
    <section className={cn(styles.root__productPage, styles.productPage)}>
      {isLoading ? (
        <LoadingSpinner />
      ) : !product ? (
        <h2 className={'text-center'}>There is no product!</h2>
      ) : (
        <>
          <Breadcrumbs list={getBreadcrumbs(product)} />
          <ProductDetails
            product={product}
            fieldsToFilter={INFO_FIELDS_TO_FILTER}
          />
          <ProductTabviewTop
            product={product}
            ports={ports}
            factories={factories}
          />
        </>
      )}
    </section>
  );
}

export default ProductPage;
