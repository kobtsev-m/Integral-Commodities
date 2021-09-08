import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from 'state/state';

import { getProductByIdApi, getPlaceCoordinatesByNameApi } from 'api/api';
import ProductDetails from 'components/organisms/Product/ProductDetails/ProductDetails';
import LoadingSpinner from 'components/atoms/Loaders/Spinner';
import Breadcrumbs from 'components/atoms/Breadcrumbs/Breadcrumbs';
import ProductTabviewTop from 'components/organisms/Product/ProductTabsView/top/ProductTabsViewTop';
import useTranslation from 'next-translate/useTranslation';

import styles from 'components/organisms/Product/ProductDetails/ProductDetails.module.css';
import cn from 'classnames';

const INFO_FIELDS_TO_FILTER = ['price', 'density'];

function ProductPage() {
  const router = useRouter();
  const { t, lang } = useTranslation();

  const productGrade = router.query.productGrade;
  const { getProductIdByGrade } = useContext(ProductsContext);

  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [ports, setPorts] = useState(null);
  const [factories, setFactories] = useState(null);
  const [arePortsUpdated, setArePortsUpdated] = useState(null);
  const [areFactoriesUpdated, setAreFactoriesUpdated] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setArePortsUpdated(false);
    setAreFactoriesUpdated(false);
    setIsLoading(true);
  }, [lang]);

  useEffect(() => {
    if (!!productGrade) {
      getProductIdByGrade(t, productGrade).then((id) => {
        setProductId(id);
      });
    }
  }, [productGrade]);

  useEffect(() => {
    if (productId && isLoading) {
      getProductByIdApi(lang, productId, setProduct)
        .catch((e) => console.log(e))
        .then(() => setIsLoading(false));
    }
  }, [productId, isLoading]);

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

  const getBreadcrumbs = (product) => {
    const homeBreadcrumb = {
      title: t('common:menu.home'),
      link: t('common:homeLink')
    };
    const categoryBreadcrumb = {
      title: t(`common:menu.${product?.category}`),
      link: `/products/${product?.category}`
    };
    const polymerType = product?.card_data.find(
      (item) => item.key === 'Type'
    ).value;
    let polymerBreadcrumb = null;
    if (polymerType) {
      const polymerTypeSingle = polymerType?.toUpperCase().split(', ')[0];
      polymerBreadcrumb = {
        title: polymerType,
        link: `/products/${product?.category}?type=${polymerTypeSingle}`
      };
    }
    const gradeBreadcrumb = {
      title: product.grade
    };
    return [
      homeBreadcrumb,
      categoryBreadcrumb,
      polymerBreadcrumb,
      gradeBreadcrumb
    ];
  };

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

  return (
    <section className={cn(styles.root__productPage, styles.productPage)}>
      {isLoading ? (
        <LoadingSpinner />
      ) : !product ? (
        <h2 className='text-center'>{t('common:noProducts')}</h2>
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
