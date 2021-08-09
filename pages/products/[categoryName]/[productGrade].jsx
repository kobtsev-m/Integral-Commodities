import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from 'state/state';

import { getProductByIdApi, getPlaceCoordinatesByNameApi } from 'api/api';
import ProductDetails from 'components/product/product-details/product-details';
import LoadingSpinner from 'components/ui/loading';
import Breadcrumbs from 'components/ui/breadcrumbs';
import ProductTabviewTop from 'components/product/product-tabviews/product-tabview-top/product-tabview-top';
import useTranslation from 'next-translate/useTranslation';

import styles from 'components/product/product-details/product-details.module.css';
import cn from 'classnames';

const INFO_FIELDS_TO_FILTER = ['price', 'density'];

function ProductPage() {
  const router = useRouter();
  const { t } = useTranslation();

  const category = router.query.categoryName;
  const productGrade = router.query.productGrade;
  const { getProductIdByGrade } = useContext(ProductsContext);

  const [product, setProduct] = useState(null);
  const [ports, setPorts] = useState(null);
  const [factories, setFactories] = useState(null);
  const [arePortsUpdated, setArePortsUpdated] = useState(false);
  const [areFactoriesUpdated, setAreFactoriesUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!!productGrade) {
      getProductIdByGrade(productGrade).then((productId) => {
        getProductByIdApi(productId).then((product) => {
          setProduct(product);
          setIsLoading(!!product);
        });
      });
    }
  }, [productGrade]);

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

  const getBreadcrumbs = (product) => {
    const homeBreadcrumb = {
      title: t('common:menu.home'),
      link: '/products/sulphur'
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
      const polymerTypeLower = polymerType?.toLowerCase();
      const polymerTypeUpper = polymerType?.toUpperCase();
      polymerBreadcrumb = {
        title: t(`common:menu.${polymerTypeLower}`),
        link: `/products/${product?.category}?type=${polymerTypeUpper}`
      };
    }
    const gradeBreadcrumb = {
      title: ['fertilizers', 'sulphur'].includes(category)
        ? t(`common:${category}.${product.grade.toLowerCase()}`)
        : product.grade
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
        <h2 className='text-center'>
          <Trans i18nKey='common:noProducts' />
        </h2>
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
