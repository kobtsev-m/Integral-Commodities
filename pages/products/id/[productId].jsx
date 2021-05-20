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
      const newPorts = product.doc_data?.find((item) => 'map' in item)?.map;
      setPorts(newPorts);
      setIsLoading(!!newPorts?.length);
    }
  }, [product]);

  useEffect(() => {
    if (ports?.length && !ports[0].lat) {
      const newPortsPromises = ports.map(async (port) => {
        const coordinates = await getPlaceCoordinatesByNameApi(port.name);
        return { ...port, ...coordinates };
      });
      Promise.all(newPortsPromises).then((newPorts) => {
        setPorts(newPorts);
        setIsLoading(false);
      });
    }
  }, [ports]);

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
          <ProductTabviewTop product={product} ports={ports} />
        </>
      )}
    </section>
  );
}

export default ProductPage;
