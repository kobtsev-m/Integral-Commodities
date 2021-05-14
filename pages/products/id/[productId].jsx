import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

import { getProductByIdApi, getPlacesApi } from 'api/api';
import { PlacesContext } from 'state/state';
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

  const { ports, setPorts, arePortsUpdated } = useContext(PlacesContext);
  const [product, setProduct] = useState(null);
  const [productIsLoading, setProductIsLoading] = useState(true);

  useEffect(() => {
    if (!!productId) {
      getProductByIdApi(productId, setProduct).catch(() =>
        setProductIsLoading(false)
      );
    }
  }, [productId]);

  useEffect(() => {
    if (product && !arePortsUpdated) {
      getPlacesApi(setPorts).catch((e) => console.log(e));
    }
  }, [product]);

  useEffect(() => {
    if (product && arePortsUpdated) {
      setProductIsLoading(false);
    }
  }, [product, ports]);

  return (
    <section className={cn(styles.root__productPage, styles.productPage)}>
      {productIsLoading ? (
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
          <ProductTabviewTop product={product} ports={ports} />
        </>
      )}
    </section>
  );
}

export default ProductPage;
